"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const SideBar1: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/history");
  }, [router]);

  const onDiagramKetinggianAirClick = useCallback(() => {
    router.push("/collapsediagram");
  }, [router]);

  const onKelolaUserContainerClick = useCallback(() => {
    router.push("/collapsekelola");
  }, [router]);

  const onProfilUserContainerClick = useCallback(() => {
    router.push("/collapseprofil");
  }, [router]);

  return (
    <div className="flex-1 bg-main flex flex-col items-start justify-start pt-[38px] pb-[623px] pr-[5px] pl-[38px] relative gap-[21px] z-[1] text-left text-sm text-font-dis font-poppins mq450:pt-5 mq450:pb-[263px] mq450:box-border mq1000:pt-[25px] mq1000:pb-[405px] mq1000:box-border">
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
        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-base">
          <p className="m-0">FALL DETECTION</p>
          <p className="m-0">MONITOR</p>
        </h2>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-2 pb-3">
        <div
          className="flex flex-row items-start justify-start gap-[9px] cursor-pointer z-[1]"
          onClick={onDiagramKetinggianAirClick}
        >
          <img
            className="h-[25px] w-[25px] relative min-h-[25px]"
            loading="lazy"
            alt=""
            src="/diagram-ketinggian-air.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative font-semibold inline-block min-w-[115px]">
              Diagram Sensor
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-0 pl-px text-center text-xs text-white">
        <div className="flex-1 flex flex-row items-end justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
            <img
              className="w-[31px] h-[31px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/ichistory-ketinggian-air1.svg"
            />
          </div>
          <div className="h-[25px] flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative font-semibold z-[1]">
                History Jatuh Pengguna
              </div>
            </div>
            <div className="h-[27px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-white" />
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
      <img
        className="w-[41px] h-[41.3px] absolute !m-[0] top-[72px] left-[120px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo-politeknik-negeri-malang-2@2x.png"
      />
      <div
        className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
        onClick={onProfilUserContainerClick}
      >
        <img
          className="h-[33px] w-8 relative object-cover min-h-[33px]"
          alt=""
          src="/icon2@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="relative font-semibold inline-block min-w-[113px]">
            Profil Pengguna
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
