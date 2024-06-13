"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const SideBar: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/diagram");
  }, [router]);

  const onHistoryKetinggianAirClick = useCallback(() => {
    router.push("/collapsehistory");
  }, [router]);

  const onKelolaUserContainerClick = useCallback(() => {
    router.push("/collapsekelola");
  }, [router]);

  const onProfilUserContainerClick = useCallback(() => {
    router.push("/collapseprofil");
  }, [router]);

  return (
    <main className="w-[285px] bg-main flex flex-col items-start justify-start pt-[38px] pb-[623px] pr-[5px] pl-[38px] box-border relative gap-[21px] text-left text-sm text-font-dis font-poppins mq450:pt-5 mq450:pb-[263px] mq450:box-border mq1000:hidden mq1000:pt-[25px] mq1000:pb-[405px] mq1000:box-border">
      <div className="w-[285px] h-[1024px] relative bg-main hidden z-[0]" />
      <div className="flex flex-row items-start justify-start pt-0 px-2 pb-[41px]">
        <div
          className="h-[15px] w-[22.5px] relative cursor-pointer z-[1]"
          onClick={onIcHambContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[7.5px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[15px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[22px] text-center text-xl text-white">
        <b className="relative z-[1] mq450:text-base">
          <p className="m-0">FALL DETECTION</p>
          <p className="m-0">MONITOR</p>
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-0 pl-2 text-white">
        <div className="h-[25px] flex-1 flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[9px]">
            <img
              className="h-[25px] w-[25px] relative min-h-[25px] z-[1]"
              loading="lazy"
              alt=""
              src="/icon12.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative font-semibold inline-block min-w-[115px] z-[1]">
                Diagram Sensor
              </div>
            </div>
          </div>
          <div className="h-[27px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-white" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-3 text-center text-xs">
        <div
          className="flex flex-row items-start justify-start gap-[10px] cursor-pointer z-[1]"
          onClick={onHistoryKetinggianAirClick}
        >
          <img
            className="h-[31px] w-[31px] relative"
            loading="lazy"
            alt=""
            src="/history-ketinggian-air.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="relative font-semibold">{`History Jatuh Pengguna `}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[7px] pb-1">
        <div
          className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
          onClick={onKelolaUserContainerClick}
        >
          <img
            className="h-[25px] w-[25px] relative object-cover min-h-[25px]"
            alt=""
            src="/icon11@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative font-semibold inline-block min-w-[121px]">
              Kelola Pengguna
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
        onClick={onProfilUserContainerClick}
      >
        <img
          className="h-[33px] w-8 relative object-cover min-h-[33px]"
          alt=""
          src="/icon1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="relative font-semibold inline-block min-w-[113px]">
            Profil Pengguna
          </div>
        </div>
      </div>
      <img
        className="w-[41px] h-[41.3px] absolute !m-[0] top-[72px] left-[120px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo-politeknik-negeri-malang-2@2x.png"
      />
    </main>
  );
};

export default SideBar;
