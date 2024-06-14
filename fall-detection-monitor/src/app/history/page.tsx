"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Sidebar2 from "@/components/templates/sidebar2.tsx";
import { useRouter } from "next/navigation";
import History from "@/components/atoms/history.tsx";

const HISTORYFALLDETECTION: NextPage = () => {
  const router = useRouter();

  const onNotifikasiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLOGOUTContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[41px] leading-[normal] tracking-[normal] mq750:gap-[20px] mq750:pl-5 mq750:box-border">
      <Sidebar2 />
      <section className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-[calc(100%_-_111px)] text-left text-xl text-font-grey font-poppins mq750:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                  HISTORY JATUH PENGGUNA
                </h2>
                <div className="relative text-lg">Jumat, 14 Juni 2024</div>
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
              <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[7px] min-w-[69px] text-left text-xl text-font-grey font-poppins">
                <img
                  className="h-[35px] w-[35px] relative object-cover min-h-[35px]"
                  loading="lazy"
                  alt=""
                  src="/icprof@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[64px] mq450:text-base">
                    ADMIN
                  </h2>
                </div>
              </nav>
            </div>
          </div>
          <History />
        </div>
      </section>
    </div>
  );
};

export default HISTORYFALLDETECTION;
