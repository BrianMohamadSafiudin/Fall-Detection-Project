package com.kelompok4.deteksijatuh

import android.os.Bundle
import android.util.Log
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet
import com.kelompok4.deteksijatuh.databinding.ActivityChartBinding
import org.eclipse.paho.client.mqttv3.MqttCallback
import org.eclipse.paho.client.mqttv3.MqttMessage
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken
import org.eclipse.paho.client.mqttv3.MqttException

class ChartActivity : AppCompatActivity() {

    private lateinit var binding: ActivityChartBinding
    private lateinit var chartGyroX: LineChart
    private lateinit var chartGyroY: LineChart
    private lateinit var chartGyroZ: LineChart
    private lateinit var chartAccelX: LineChart
    private lateinit var chartAccelY: LineChart
    private lateinit var chartAccelZ: LineChart
    private lateinit var mqttClient: MyMqttClient

    private val gyroXData = mutableListOf<Float>()
    private val gyroYData = mutableListOf<Float>()
    private val gyroZData = mutableListOf<Float>()
    private val accelXData = mutableListOf<Float>()
    private val accelYData = mutableListOf<Float>()
    private val accelZData = mutableListOf<Float>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityChartBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Setup ActionBar
        supportActionBar?.apply {
            title = "Chart"
            setDisplayHomeAsUpEnabled(true)
        }

        chartGyroX = binding.chartGyroX
        chartGyroY = binding.chartGyroY
        chartGyroZ = binding.chartGyroZ
        chartAccelX = binding.chartAccelX
        chartAccelY = binding.chartAccelY
        chartAccelZ = binding.chartAccelZ

        setupChart(chartGyroX)
        setupChart(chartGyroY)
        setupChart(chartGyroZ)
        setupChart(chartAccelX)
        setupChart(chartAccelY)
        setupChart(chartAccelZ)

        // MQTT setup
        val serverUri = "tcp://34.101.62.111:1883"
        val clientId = "AndroidClientChart"
        mqttClient.connect()

    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                onBackPressed()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun setupChart(chart: LineChart) {
        chart.description.isEnabled = false
        chart.setTouchEnabled(true)
        chart.isDragEnabled = true
        chart.setScaleEnabled(true)
    }

    private fun updateSensorData(data: String) {
        try {
            Log.d("ChartActivity", "Received data: $data")

            val parts = data.split(",")
            if (parts.size >= 7) {
                val accelX = parts[1].toFloat()
                val accelY = parts[2].toFloat()
                val accelZ = parts[3].toFloat()
                val gyroX = parts[4].toFloat()
                val gyroY = parts[5].toFloat()
                val gyroZ = parts[6].toFloat()

                Log.d("ChartActivity", "Gyro Data - X: $gyroX, Y: $gyroY, Z: $gyroZ")
                Log.d("ChartActivity", "Accel Data - X: $accelX, Y: $accelY, Z: $accelZ")

                // Update gyro data
                addEntryToData(gyroXData, gyroX)
                addEntryToData(gyroYData, gyroY)
                addEntryToData(gyroZData, gyroZ)

                updateChart(chartGyroX, gyroXData, "Gyro X", android.graphics.Color.RED)
                updateChart(chartGyroY, gyroYData, "Gyro Y", android.graphics.Color.GREEN)
                updateChart(chartGyroZ, gyroZData, "Gyro Z", android.graphics.Color.BLUE)

                // Update accel data
                addEntryToData(accelXData, accelX)
                addEntryToData(accelYData, accelY)
                addEntryToData(accelZData, accelZ)

                updateChart(chartAccelX, accelXData, "Accel X", android.graphics.Color.YELLOW)
                updateChart(chartAccelY, accelYData, "Accel Y", android.graphics.Color.MAGENTA)
                updateChart(chartAccelZ, accelZData, "Accel Z", android.graphics.Color.CYAN)
            } else {
                Log.e("ChartActivity", "Received data is incomplete: $data")
            }
        } catch (e: Exception) {
            Log.e("ChartActivity", "Failed to parse data", e)
        }
    }

    private fun addEntryToData(dataList: MutableList<Float>, value: Float) {
        dataList.add(value)
        if (dataList.size > 100) { // Limit data to last 100 entries
            dataList.removeAt(0)
        }
    }

    private fun updateChart(chart: LineChart, data: MutableList<Float>, label: String, color: Int) {
        val entries = data.mapIndexed { index, value -> Entry(index.toFloat(), value) }
        val dataSet = LineDataSet(entries, label)
        dataSet.color = color
        chart.data = LineData(dataSet)
        chart.invalidate()
    }
}
