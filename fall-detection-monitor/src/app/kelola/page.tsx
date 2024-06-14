"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Realtime from "../../components/organisms/realtime11.tsx";
import Sidebar from "../../components/templates/sidebar.tsx";

const MANAGEUSERADMIN: NextPage = () => {
  const router = useRouter();

  const onNotifikasiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLOGOUTContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[41px] leading-[normal] tracking-[normal] mq800:gap-[20px] mq1325:flex-wrap">
      <Sidebar />
      <section className="w-[1287px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-full text-left text-xl text-font-grey font-poppins">
        <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq800:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                KELOLA PENGGUNA
              </h3>
            </div>
            <nav className="m-0 w-[362px] flex flex-row items-start justify-start gap-[32px] max-w-full text-left text-sm text-font-dis font-poppins mq450:gap-[16px]">
              <div className="flex-[0.8929] flex flex-col items-start justify-start pt-[5px] pb-0 pr-3 pl-0">
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
                      loading="lazy"
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
              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xl text-font-grey">
                <img
                  className="h-[35px] w-[35px] relative object-cover min-h-[35px]"
                  loading="lazy"
                  alt=""
                  src="/icprof@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[64px] mq450:text-base">
                    ADMIN
                  </h3>
                </div>
              </div>
            </nav>
          </div>
          <Realtime />
        </div>
      </section>
    </div>
  );
};

export default MANAGEUSERADMIN;
