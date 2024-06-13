"use client";
import React, { useEffect, useState } from "react";
import { database } from "../../firebaseconfig.js";
import { ref, onValue } from "firebase/database";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Daftarkan komponen yang diperlukan untuk ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Definisikan tipe untuk dataset grafik
interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  fill: boolean;
}

// Definisikan tipe untuk data grafik
interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

const Realtime: React.FC = () => {
  const [data, setData] = useState<ChartData>({ labels: [], datasets: [] });

  useEffect(() => {
    const sensorRef = ref(database, "sensors/Device_01");
    onValue(sensorRef, (snapshot) => {
      const sensorData = snapshot.val();
      console.log("Data from Firebase: ", sensorData);
      if (sensorData) {
        const keys = Object.keys(sensorData).slice(-40); // Ambil 40 data terbaru
        const labels = keys.map((key) => {
          const date = new Date(sensorData[key].timestamp);
          return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        });

        const accelerationX = keys.map((key) => sensorData[key].accelerationx);
        const accelerationY = keys.map((key) => sensorData[key].accelerationy);
        const accelerationZ = keys.map((key) => sensorData[key].accelerationz);

        const gyroscopeX = keys.map((key) => sensorData[key].gyroscopex);
        const gyroscopeY = keys.map((key) => sensorData[key].gyroscopey);
        const gyroscopeZ = keys.map((key) => sensorData[key].gyroscopez);

        const newData: ChartData = {
          labels,
          datasets: [
            {
              label: "Acceleration X",
              data: accelerationX,
              borderColor: "rgba(255, 99, 132, 1)",
              fill: false,
            },
            {
              label: "Acceleration Y",
              data: accelerationY,
              borderColor: "rgba(54, 162, 235, 1)",
              fill: false,
            },
            {
              label: "Acceleration Z",
              data: accelerationZ,
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
            {
              label: "Gyroscope X",
              data: gyroscopeX,
              borderColor: "rgba(153, 102, 255, 1)",
              fill: false,
            },
            {
              label: "Gyroscope Y",
              data: gyroscopeY,
              borderColor: "rgba(255, 159, 64, 1)",
              fill: false,
            },
            {
              label: "Gyroscope Z",
              data: gyroscopeZ,
              borderColor: "rgba(255, 206, 86, 1)",
              fill: false,
            },
          ],
        };

        setData(newData);
        console.log("Updated chart data: ", newData);
      }
    });
  }, []);

  return (
    <div style={{ width: '100%', height: '300px', margin: '0 auto' }}>
      <Line 
        data={data} 
        options={{ maintainAspectRatio: false }} 
      />
    </div>
  );
};

export default Realtime;
