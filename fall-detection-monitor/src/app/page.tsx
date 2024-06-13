"use client";

import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from 'next/navigation';

const HOME: NextPage = () => {
  const router = useRouter();

  const onBUTTONContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  const onLOGINTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onNavigasiContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='featureContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavigasiContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-white h-[2333px] overflow-hidden text-left text-lg text-main font-poppins">
      <div className="absolute top-[2200px] left-[0px] w-full h-12 text-center text-sm text-darkgray-200">
        <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 font-light inline-block">
          Copyright (c) 2024 Fall Detection Development Team
        </div>
      </div>
      <div
        className="absolute top-[973px] left-1/2 transform -translate-x-1/2 w-[662px] h-[280px] text-center text-13xl"
        data-scroll-to="featureContainer"
      >
        <b className="absolute top-[200px] left-[269px]">FITUR</b>
        <div className="absolute top-[278px] left-[0px] w-[662px] h-[202px] text-left text-sm text-font-grey grid grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] p-4">
            <div className="flex items-center mb-2">
              <img
                src="/icon.svg"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              <div className="font-semibold">Diagram Sensor Gyro (Real-Time)</div>
            </div>
            <p>Pengguna dapat mengawasi sensor gyro secara real-time untuk mendeteksi pergerakan yang tidak biasa.</p>
          </div>
          <div className="bg-white rounded-xl shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] p-4">
            <div className="flex items-center mb-2">
              <img
                src="/ichistory-ketinggian-air.svg"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              <div className="font-semibold">History Jatuh</div>
            </div>
            <p>Pengguna dapat melihat data history jatuh air untuk mengetahui seberapa rawan lingkungan Anda.</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1500px] left-1/2 transform -translate-x-1/2 w-[1196px] text-font-grey"
        data-scroll-to="aboutUsContainer"
      >
        <b className="absolute top-[130px] left-1/2 transform -translate-x-1/2 text-13xl text-main mb-12">TENTANG KAMI</b>
        <div className="absolute top-[130px] grid grid-cols-2 gap-10 mt-20">
          <div className="bg-white rounded-xl shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] p-4">
            <div className="font-semibold mb-2">Tentang Fall Detection</div>
            <p>Sistem deteksi jatuh kami dirancang untuk memberikan peringatan dini dan analisis data jatuh untuk meningkatkan keselamatan pengguna, terutama bagi lansia. Dengan teknologi sensor gyro yang canggih, sistem ini mampu mendeteksi pergerakan abnormal dan memberikan notifikasi real-time.</p>
          </div>
          <div className="bg-white rounded-xl shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] p-4">
            <div className="font-semibold mb-2">Pelayanan</div>
            <p>Kami menyediakan layanan pemantauan dan analisis jatuh air secara real-time untuk membantu pengguna memahami kondisi lingkungan mereka dan meningkatkan keselamatan.</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[0px] left-[-95.7px] w-[1664.9px] h-[1027.2px] text-white">
        <div className="absolute top-[0px] left-[96.7px] bg-gray-100 w-[1440px] h-[1024px]" />
        <img
          className="absolute top-[0px] left-[95.7px] w-[1440px] h-[1024px]"
          alt=""
        />
        <img
          className="absolute top-[173px] left-[0px] w-[1664.9px] h-[854.2px]"
          alt=""
          src="/group-189.svg"
        />
        <div className="absolute top-[295px] left-[218.7px] w-[574px] h-[277px]">
          <div
            className="absolute top-[226px] left-[0px] w-[205px] h-[51px] cursor-pointer text-center"
            onClick={onBUTTONContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-main w-[205px] h-[51px]" />
            <div className="absolute top-[12px] left-[44px] font-semibold">
              JELAJAH LEBIH
            </div>
          </div>
          <div className="absolute top-[141px] left-[0px] text-grey-2 inline-block w-[424px] h-[42px]">
            Sebagai sistem monitoring, untuk memantau alat deteksi jatuh pada
            lansia.
          </div>
          <b className="absolute top-[0px] left-[0px] text-[36px] inline-block text-main w-[574px] h-[146px]">
            <p className="m-0">{`Sistem Monitoring Alat `}</p>
            <p className="m-0">Deteksi Jatuh Untuk Lansia</p>
          </b>
        </div>
      </div>
      <div className="absolute top-[46px] left-[604px] w-[728px] h-[35px] text-base">
        <div className="absolute top-[0px] left-[525px] w-[203px] h-[35px] text-white">
          <div
            className="absolute top-[0px] left-[98px] w-[105px] h-[35px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-main w-[105px] h-[35px]" />
            <div className="absolute top-[5px] left-[18px] font-medium">
              DAFTAR
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro-200 w-[93px] h-[35px]" />
          <div
            className="absolute top-[5px] left-[21px] font-medium text-main cursor-pointer"
            onClick={onLOGINTextClick}
          >
            MASUK
          </div>
        </div>
        <div
          className="absolute top-[7px] left-[0px] w-[67px] h-6 cursor-pointer"
          onClick={onNavigasiContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] font-medium">
            FITUR
          </div>
        </div>
        <div
          className="absolute top-[7px] left-[100px] w-[120px] h-6 cursor-pointer"
          onClick={onNavigasiContainer1Click}
        >
          <div className="absolute top-[0px] left-[0px] font-medium">
            TENTANG KAMI
          </div>
        </div>
      </div>
      <img
        className="absolute h-[18.05%] w-[45.6%] top-[8.23%] right-[5.51%] bottom-[73.72%] left-[48.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-181.svg"
      />
    </div>
  );
};

export default HOME;
