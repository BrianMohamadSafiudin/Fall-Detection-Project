"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Sidebar1: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/collapseprofil");
  }, [router]);

  const onDiagramKetinggianAirClick = useCallback(() => {
    router.push("/diagram");
  }, [router]);

  const onHistoryKetinggianAirClick = useCallback(() => {
    router.push("/history");
  }, [router]);

  const onKelolaUserIconClick = useCallback(() => {
    router.push("/kelola");
  }, [router]);

  return (
    <div className="bg-main flex flex-col items-start justify-start pt-[38px] pb-[597px] pr-[7px] pl-4 gap-[46.2px] mq1000:hidden mq1000:pt-[25px] mq1000:pb-[388px] mq1000:box-border mq450:pt-5 mq450:pb-[252px] mq450:box-border">
      <div className="w-[70px] h-[1024px] relative bg-main hidden" />
      <div className="flex flex-row items-start justify-start py-0 pr-4 pl-2">
        <div
          className="h-[15px] w-[22.5px] relative cursor-pointer z-[1]"
          onClick={onIcHambContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[7.5px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[15px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
        </div>
      </div>
      <img
        className="w-[41px] h-[41.3px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo-politeknik-negeri-malang-2@2x.png"
      />
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <div className="flex flex-col items-end justify-start gap-[41px]">
          <img
            className="w-[25px] h-[25px] relative cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/diagram-ketinggian-air.svg"
            onClick={onDiagramKetinggianAirClick}
          />
          <div className="flex flex-row items-start justify-end py-0 pr-0.5 pl-0">
            <img
              className="h-[31px] w-[31px] relative cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/history-ketinggian-air.svg"
              onClick={onHistoryKetinggianAirClick}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
        <div className="flex flex-col items-start justify-start gap-[37px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-1.5">
            <img
              className="h-[25px] w-[25px] relative object-cover cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/icon11@2x.png"
              onClick={onKelolaUserIconClick}
            />
          </div>
          <img
            className="w-[46px] h-[35px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/kelola-user-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
