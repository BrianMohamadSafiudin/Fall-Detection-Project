"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Sidebar: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/collapsekelola");
  }, [router]);

  const onDiagramKetinggianAirClick = useCallback(() => {
    router.push("/diagram");
  }, [router]);

  const onHistoryKetinggianAirClick = useCallback(() => {
    router.push("/history");
  }, [router]);

  const onKelolaUserIconClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="bg-main flex flex-col items-start justify-start pt-[38px] pb-[599px] pr-[5px] pl-4 gap-[37px] mq450:pt-5 mq450:pb-[253px] mq450:box-border mq1125:pt-[25px] mq1125:pb-[389px] mq1125:box-border">
      <div className="w-[70px] h-[1024px] relative bg-main hidden" />
      <div className="flex flex-row items-start justify-start pt-0 px-2 pb-2.5">
        <div
          className="h-[15px] w-[22.5px] relative cursor-pointer z-[1]"
          onClick={onIcHambContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[7.5px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
          <div className="absolute top-[15px] left-[0px] box-border w-[25.5px] h-[3px] border-t-[3px] border-solid border-white" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-[9.7px] pr-2 pl-0">
        <img
          className="h-[41.3px] w-[41px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/logo-politeknik-negeri-malang-2@2x.png"
        />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-1 pr-[15px] pl-[9px]">
        <img
          className="h-[25px] w-[25px] relative cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/diagram-ketinggian-air.svg"
          onClick={onDiagramKetinggianAirClick}
        />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-2">
        <img
          className="h-[31px] w-[31px] relative cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/history-ketinggian-air.svg"
          onClick={onHistoryKetinggianAirClick}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
        <div className="h-[25px] w-[42px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-[25px] h-[25px] object-cover z-[1]"
            alt=""
            src="/icon9@2x.png"
          />
          <div className="absolute top-[0px] left-[40px] box-border w-0.5 h-[27px] z-[1] border-r-[2px] border-solid border-white" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <img
          className="h-[33px] w-[31px] relative object-cover cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/kelola-user@2x.png"
          onClick={onKelolaUserIconClick}
        />
      </div>
    </div>
  );
};

export default Sidebar;
