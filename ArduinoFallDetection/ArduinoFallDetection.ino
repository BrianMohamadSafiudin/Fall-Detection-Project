#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
Adafruit_MPU6050 mpu;

#define DEVICE_ID "Device_01"                   // ID perangkat

const char *ssid = "JTI-POLINEMA";//silakan disesuaikan sendiri
const char *password = "jtifast!";//silakan disesuaikan sendiri

const char *mqtt_server = "34.101.62.111";

WiFiClient espClient;
PubSubClient client(espClient);

// long now = millis();
// long lastMeasure = 0;
unsigned long previousMillis = 0;      // Menyimpan waktu terakhir data diterbitkan
const long interval = 100;            // Interval untuk menerbitkan data sensor


void setup_wifi()
{
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("WiFi connected - ESP IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect()
{
  while (!client.connected())
  {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client"))
    {
      Serial.println("connected");
    }
    else
    {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  Serial.println("Mqtt Node-RED");
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  Serial.begin(115200);
  while (!Serial)
    delay(10);

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }

  Serial.println("");
  delay(100);
}

void loop() {
 if (!client.connected())
  {
    reconnect();
  }
  if (!client.loop())
  {
    client.connect("ESP8266Client");
  }

  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {  // Memeriksa apakah interval waktu telah berlalu
    previousMillis = currentMillis;

    sensors_event_t a, g, temp;
    mpu.getEvent(&a, &g, &temp);

    // Membuat string untuk mengirim semua data sensor
    String sensorData = String(DEVICE_ID) + ","
                      + String(a.acceleration.x, 3) + "," + String(a.acceleration.y, 3) + "," + String(a.acceleration.z, 3) + ","
                      + String(g.gyro.x, 7) + "," + String(g.gyro.y, 7) + "," + String(g.gyro.z, 7) + ","
                      + String(temp.temperature);
    Serial.println("Kirim ke cloud : " + sensorData);
    client.publish("esp/mpu6050/sensors", sensorData.c_str());
  }
}