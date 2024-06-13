package com.kelompok4.deteksijatuh

import android.content.Context
import android.util.Log
import info.mqtt.android.service.MqttAndroidClient
import org.eclipse.paho.client.mqttv3.*

class MyMqttClient(private val context: Context, serverUri: String, clientId: String) {
    val mqttClient: MqttAndroidClient = MqttAndroidClient(context, serverUri, clientId)

    fun connect() {
        try {
            val options = MqttConnectOptions()
            mqttClient.connect(options, null, object : IMqttActionListener {
                override fun onSuccess(asyncActionToken: IMqttToken?) {
                    Log.d("MyMqttClient", "Connected to MQTT")
                    mqttClient.subscribe("esp/mpu6050/sensors", 1, null, object : IMqttActionListener {
                        override fun onSuccess(asyncActionToken: IMqttToken?) {
                            Log.d("MyMqttClient", "Subscribed to topic")
                        }

                        override fun onFailure(asyncActionToken: IMqttToken?, exception: Throwable?) {
                            Log.e("MyMqttClient", "Failed to subscribe to topic", exception)
                        }
                    })
                }

                override fun onFailure(asyncActionToken: IMqttToken?, exception: Throwable?) {
                    Log.e("MyMqttClient", "Failed to connect to MQTT", exception)
                }
            })

            mqttClient.setCallback(object : MqttCallback {
                override fun connectionLost(cause: Throwable?) {
                    Log.e("MyMqttClient", "Connection lost", cause)
                }

                override fun messageArrived(topic: String?, message: MqttMessage?) {
                    Log.d("MyMqttClient", "Message arrived: ${message.toString()}")
                    // Handle the received message here
                    (context as MainActivity).updateSensorData(message.toString())
                }

                override fun deliveryComplete(token: IMqttDeliveryToken?) {
                    Log.d("MyMqttClient", "Delivery complete")
                }
            })
        } catch (e: MqttException) {
            Log.e("MyMqttClient", "Error connecting to MQTT", e)
        }
    }
}
