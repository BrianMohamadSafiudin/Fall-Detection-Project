package com.kelompok4.deteksijatuh

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import android.widget.ToggleButton
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NotificationCompat
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.kelompok4.deteksijatuh.databinding.ActivityMainBinding
import org.eclipse.paho.client.mqttv3.MqttClient
import org.eclipse.paho.client.mqttv3.MqttException
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class MainActivity : AppCompatActivity() {

    private lateinit var mqttClient: MyMqttClient
    private lateinit var binding: ActivityMainBinding
    private lateinit var gyroChart: LineChart
    private lateinit var accelChart: LineChart
    private lateinit var toggleButton: ToggleButton
    private lateinit var statusTextView: TextView
    private var isStreaming: Boolean = false

    private var gyroXData = mutableListOf<Float>()
    private var gyroYData = mutableListOf<Float>()
    private var gyroZData = mutableListOf<Float>()
    private var accelXData = mutableListOf<Float>()
    private var accelYData = mutableListOf<Float>()
    private var accelZData = mutableListOf<Float>()

    private var fallCount = 0
    private val fallHistory = mutableListOf<Pair<String, String>>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        gyroChart = findViewById(R.id.lineChart)
        accelChart = findViewById(R.id.lineChartacc)
        toggleButton = findViewById(R.id.toggleStreaming)
        statusTextView = findViewById(R.id.statusTextView)

        mqttClient = MyMqttClient(this, "ws://34.101.62.111:8083", MqttClient.generateClientId())
        mqttClient.connect()

        toggleButton.setOnCheckedChangeListener { _, isChecked ->
            isStreaming = isChecked
            val message = if (isStreaming) "ON" else "OFF"
            publishMessage(message)
            statusTextView.text = "Streaming ${if (isStreaming) "Started" else "Stopped"}"
        }

        supportActionBar?.apply {
            setDisplayHomeAsUpEnabled(false)
        }

        binding.lihathistory.setOnClickListener {
            val intent = Intent(this, HistoryActivity::class.java)
            startActivity(intent)
        }

        setupCharts()
        fetchPredictionFromFirestore()
        fetchFallHistoryFromFirestore()
        NotificationUtils.createNotificationChannel(this)
    }

    private fun setupCharts() {
        gyroChart.description.isEnabled = false
        accelChart.description.isEnabled = false
    }

    private fun fetchPredictionFromFirestore() {
        val db = Firebase.firestore

        db.collection("predictions")
            .addSnapshotListener { snapshots, e ->
                if (e != null) {
                    Log.w("MainActivity", "Listen failed.", e)
                    return@addSnapshotListener
                }

                if (snapshots != null && !snapshots.isEmpty) {
                    val document = snapshots.documents[0]
                    val prediction = document.getString("prediction") ?: ""
                    val documentId = document.id

                    if (prediction.contains("Fall", ignoreCase = true)) {
                        fallCount = 1
                        fallHistory.clear()
                        fallHistory.add(Pair(prediction, documentId))
                        handleFallDetection(prediction, documentId)
                    } else {
                        fallCount = 0
                        fallHistory.clear()
                    }

                    val predictionsText = "$prediction"
                    binding.predictionTextView.text = predictionsText
                }
            }
    }

    private var fallHistoryCount = 0

    private fun fetchFallHistoryFromFirestore() {
        val db = Firebase.firestore

        db.collection("fallhistorys")
            .addSnapshotListener { snapshots, e ->
                if (e != null) {
                    Log.w("MainActivity", "Listen failed.", e)
                    return@addSnapshotListener
                }

                if (snapshots != null && !snapshots.isEmpty) {
                    if (snapshots.size() > fallHistoryCount) {
                        fallHistoryCount = snapshots.size()
                        binding.fallHistoryTextView.text = fallHistoryCount.toString()

                        val latestFall = snapshots.documents.lastOrNull()
                        val latestPrediction = latestFall?.getString("fallhistory") ?: "Unknown fall prediction"
                        showNewDataNotification(latestPrediction)
                        AlarmUtils.playAlarm(this)
                    }
                }
            }
    }

    private fun showNewDataNotification(prediction: String) {
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channelId = "fall_detection_channel"
            val channelName = "Fall Detection Channel"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(channelId, channelName, importance)
            notificationManager.createNotificationChannel(channel)
        }

        val title = "PASIEN TERJATUH!!!"
        val message = prediction
        val intent = Intent(this, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)

        val notificationBuilder = NotificationCompat.Builder(this, "fall_detection_channel")
            .setContentTitle(title)
            .setContentText(message)
            .setSmallIcon(R.drawable.notifikasi)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)

        notificationManager.notify(2, notificationBuilder.build())
    }

    private fun handleFallDetection(prediction: String, timestamp: String) {
        if (prediction.contains("Fall", ignoreCase = true)) {
            AlarmUtils.playAlarm(this)
            val formattedTimestamp = formatTimestamp(timestamp)
            saveFallDataToFirestore(prediction, formattedTimestamp)
        }
    }

    private fun formatTimestamp(timestamp: String): String {
        val unixTimestamp = timestamp.toLong() * 1000
        val date = Date(unixTimestamp)
        val sdf = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault())
        return sdf.format(date)
    }

    private fun saveFallDataToFirestore(prediction: String, timestamp: String) {
        val db = Firebase.firestore

        val data = hashMapOf(
            "fallhistory" to prediction,
            "timestamp" to timestamp
        )

        db.collection("fallhistorys")
            .add(data)
            .addOnSuccessListener { documentReference ->
                Log.d("MainActivity", "Fall data added with ID: ${documentReference.id}")
            }
            .addOnFailureListener { e ->
                Log.w("MainActivity", "Error adding fall data", e)
            }
    }

    private fun publishMessage(message: String) {
        try {
            val topic = "esp/stream/control"
            mqttClient.mqttClient.publish(topic, message.toByteArray(), 1, false)
            Log.d("publishMessage", "Message published: $message")
        } catch (e: MqttException) {
            Log.e("publishMessage", "Error publishing message", e)
        }
    }

    fun updateSensorData(data: String) {
        runOnUiThread {
            try {
                Log.d("mqtt", "Received data: $data")

                val parts = data.split(",")
                val deviceId = parts[0]
                val accelX = parts[1].toFloat()
                val accelY = parts[2].toFloat()
                val accelZ = parts[3].toFloat()
                val gyroX = parts[4].toFloat()
                val gyroY = parts[5].toFloat()
                val gyroZ = parts[6].toFloat()
                val temperature = parts[7].toFloat()

                Log.d("Mqtt", "Gyro Data - X: $gyroX, Y: $gyroY, Z: $gyroZ")
                Log.d("Mqtt", "Accel Data - X: $accelX, Y: $accelY, Z: $accelZ")
                Log.d("Mqtt", "Temperature: $temperature")

                // Gyroscope Data
                val gyroXEntries = gyroXData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()
                val gyroYEntries = gyroYData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()
                val gyroZEntries = gyroZData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()

                gyroXEntries.add(Entry(gyroXData.size.toFloat(), gyroX))
                gyroYEntries.add(Entry(gyroYData.size.toFloat(), gyroY))
                gyroZEntries.add(Entry(gyroZData.size.toFloat(), gyroZ))

                gyroXData.add(gyroX)
                gyroYData.add(gyroY)
                gyroZData.add(gyroZ)

                val gyroXDataSet = LineDataSet(gyroXEntries, "Gyro X").apply {
                    color = android.graphics.Color.RED
                }
                val gyroYDataSet = LineDataSet(gyroYEntries, "Gyro Y").apply {
                    color = android.graphics.Color.GREEN
                }
                val gyroZDataSet = LineDataSet(gyroZEntries, "Gyro Z").apply {
                    color = android.graphics.Color.BLUE
                }

                val gyroLineData = LineData(gyroXDataSet, gyroYDataSet, gyroZDataSet)
                gyroChart.data = gyroLineData
                gyroChart.invalidate()

                // Accelerometer Data
                val accelXEntries = accelXData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()
                val accelYEntries = accelYData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()
                val accelZEntries = accelZData.mapIndexed { index, value -> Entry(index.toFloat(), value) }.toMutableList()

                accelXEntries.add(Entry(accelXData.size.toFloat(), accelX))
                accelYEntries.add(Entry(accelYData.size.toFloat(), accelY))
                accelZEntries.add(Entry(accelZData.size.toFloat(), accelZ))

                accelXData.add(accelX)
                accelYData.add(accelY)
                accelZData.add(accelZ)

                val accelXDataSet = LineDataSet(accelXEntries, "Accel X").apply {
                    color = android.graphics.Color.MAGENTA
                }
                val accelYDataSet = LineDataSet(accelYEntries, "Accel Y").apply {
                    color = android.graphics.Color.CYAN
                }
                val accelZDataSet = LineDataSet(accelZEntries, "Accel Z").apply {
                    color = android.graphics.Color.YELLOW
                }

                val accelLineData = LineData(accelXDataSet, accelYDataSet, accelZDataSet)
                accelChart.data = accelLineData
                accelChart.invalidate()

                val sdf = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault())
                val timestamp = sdf.format(Date())

                binding.deviceIdTextView.text = "Device ID: $deviceId"
                binding.timestampTextView.text = "Timestamp: $timestamp"
                binding.temperatureTextView.text = "$temperature°C"

            } catch (e: Exception) {
                Log.e("MainActivity", "Failed to process data", e)
            }
        }
    }
}
