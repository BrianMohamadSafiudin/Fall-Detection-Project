"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import SideBar from "../../components/templates/side-bar";
import { useRouter } from "next/navigation";
import Realtime from "../../components/organisms/realtime";
import mqtt, { MqttClient } from "mqtt"; // Import tipe MqttClient
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Import konfigurasi Firebase

const COLLAPSEDIAGRAMFALLDETECTIO: NextPage = () => {
  const router = useRouter();
  const [mqttClient, setMqttClient] = useState<MqttClient | null>(null); // Tambahkan tipe data
  const [streaming, setStreaming] = useState(true);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    const client: MqttClient = mqtt.connect("ws://34.101.62.111:8083/mqtt");
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
    });
    setMqttClient(client);

    const fetchPrediction = async () => {
      const docRef = doc(db, "predictions", "1153757755");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPrediction(docSnap.data().prediction);
      } else {
        console.log("No such document!");
      }
    };

    fetchPrediction();
  }, []);

  const onNotifikasiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLOGOUTContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleToggleStream = () => {
    const newStatus = !streaming;
    setStreaming(newStatus);
    if (mqttClient) {
      console.log(`Publishing ${newStatus ? "ON" : "OFF"} to MQTT broker`);
      mqttClient.publish("esp/stream/control", newStatus ? "ON" : "OFF");
    } else {
      console.log("MQTT client is not connected");
    }
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[39px] leading-[normal] tracking-[normal] mq725:gap-[19px] mq1000:pl-5 mq1000:box-border">
      <SideBar />
      <main className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-[calc(100%_-_324px)] text-left text-xl text-font-grey font-poppins mq1000:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq725:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative font-semibold mq450:text-base">
                    DIAGRAM SENSOR GYROSCOPE
                  </div>
                  <div className="relative text-lg">
                    Sabtu, 30 Maret 2024
                  </div>
                </div>
              </div>
              <div className="w-[366px] flex flex-row items-start justify-start gap-[36px] max-w-full text-sm text-font-dis mq450:flex-wrap mq450:gap-[18px]">
                <div className="flex-[0.9259] flex flex-col items-start justify-start pt-[5px] pb-0 pr-2 pl-0 box-border min-w-[70px] mq450:flex-1">
                  <div
                    className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
                    onClick={onNotifikasiContainerClick}
                  >
                    <div className="h-[25px] w-[25px] relative">
                      <img
                        className="absolute top-[10.5px] left-[12px] w-[9px] h-1"
                        loading="lazy"
                        alt=""
                        src="/vector-19.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                        alt=""
                        src="/icloc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[67px]">
                        Notifikasi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div
                    className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
                    onClick={onLOGOUTContainerClick}
                  >
                    <div className="h-[25px] w-[25px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/icon10.svg"
                      />
                      <img
                        className="absolute top-[4px] left-[6px] w-3 h-[17px] z-[1]"
                        alt=""
                        src="/rectangle-32.svg"
                      />
                      <img
                        className="absolute top-[10.5px] left-[12px] w-[9px] h-1 z-[2]"
                        alt=""
                        src="/vector-19.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[47px]">
                        Keluar
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[7px] min-w-[69px] text-left text-xl text-font-grey font-poppins">
                  <img
                    className="h-[35px] w-[35px] relative object-cover min-h-[35px]"
                    loading="lazy"
                    alt=""
                    src="/icprof@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative inline-block min-w-[64px] mq450:text-base">
                      ADMIN
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <Realtime />
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-lg mq725:gap-[20px] mq1000:flex-wrap">
            <div className="flex-[1] shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[15.9px] px-[26px] pb-[24.1px] box-border gap-[8.6px] min-w-[150px]">
              <div className="relative font-semibold inline-block min-w-[59px] z-[1]">
                Button
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <button
                  className={`flex flex-row items-center justify-center gap-[10px] px-4 py-2 rounded ${streaming ? 'bg-red-500' : 'bg-green-500'} text-white`}
                  onClick={handleToggleStream}
                >
                  {streaming ? 'Berhenti Streaming' : 'Mulai Streaming'}
                </button>
              </div>
            </div>
            <div className="flex-[3] shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[15.9px] pb-[24.1px] pr-5 pl-[22px] box-border gap-[8.6px]">
              <div className="relative font-semibold inline-block min-w-[59px] z-[1]">
                Status
              </div>
              <div className="relative inline-block shrink-0 z-[1]">{prediction}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default COLLAPSEDIAGRAMFALLDETECTIO;
