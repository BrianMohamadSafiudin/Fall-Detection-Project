"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Sidebar2: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/collapsehistory");
  }, [router]);

  const onDiagramKetinggianAirClick = useCallback(() => {
    router.push("/diagram");
  }, [router]);

  const onKelolaUserIconClick = useCallback(() => {
    router.push("/kelola");
  }, [router]);

  const onKelolaUserIcon2Click = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="w-[70px] bg-main flex flex-col items-start justify-start pt-[38px] pb-[599px] pr-px pl-4 box-border gap-[46.2px] mq450:pt-5 mq450:pb-[253px] mq450:box-border mq750:hidden mq1100:pt-[25px] mq1100:pb-[389px] mq1100:box-border">
      <div className="w-[70px] h-[1024px] relative bg-main hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-2">
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
        <div className="flex-1 flex flex-col items-end justify-start gap-[41px]">
          <div
            className="self-stretch h-[25px] relative cursor-pointer z-[1]"
            onClick={onDiagramKetinggianAirClick}
          >
            <div className="absolute top-[0px] left-[52px] box-border w-0.5 h-[27px] border-r-[2px] border-solid border-font-dis" />
            <img
              className="absolute top-[0px] left-[8px] w-[25px] h-[25px]"
              loading="lazy"
              alt=""
              src="/diagram-ketinggian-air.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0">
            <div className="h-[31px] flex-1 relative">
              <img
                className="absolute top-[0px] left-[0px] w-[31px] h-[31px] z-[1]"
                loading="lazy"
                alt=""
                src="/ichistory-ketinggian-air1.svg"
              />
              <div className="absolute top-[6px] left-[47px] box-border w-0.5 h-[27px] z-[1] border-r-[2px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <div className="flex flex-col items-end justify-start gap-[37px]">
          <img
            className="w-[25px] h-[25px] relative object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/icon11@2x.png"
            onClick={onKelolaUserIconClick}
          />
          <img
            className="w-[31px] h-[33px] relative object-cover cursor-pointer z-[1]"
            alt=""
            src="/kelola-user@2x.png"
            onClick={onKelolaUserIcon2Click}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
