"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import FrameComponent2 from "../../components/molecules/frame-component2";

const SideBar3: NextPage = () => {
  const router = useRouter();

  const onIcHambContainerClick = useCallback(() => {
    router.push("/profil");
  }, [router]);

  const onDiagramKetinggianAirClick = useCallback(() => {
    router.push("/collapsediagram");
  }, [router]);

  const onHistoryKetinggianAirClick = useCallback(() => {
    router.push("/collapsehistory");
  }, [router]);

  const onKelolaUserContainerClick = useCallback(() => {
    router.push("/collapsekelola");
  }, [router]);

  return (
    <div className="w-[285px] bg-main flex flex-col items-start justify-start pt-[38px] pb-[621px] pr-[7px] pl-[38px] box-border gap-[19px] text-left text-sm text-font-dis font-poppins mq725:pt-5 mq725:pb-[263px] mq725:box-border mq975:hidden mq1025:pt-[25px] mq1025:pb-[404px] mq1025:box-border">
      <div className="w-[285px] h-[1024px] relative bg-main hidden" />
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
      <FrameComponent2 />
      <div className="flex flex-row items-start justify-start pt-0 px-2 pb-3.5">
        <div
          className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
          onClick={onDiagramKetinggianAirClick}
        >
          <img
            className="h-[25px] w-[25px] relative min-h-[25px]"
            loading="lazy"
            alt=""
            src="/diagram-ketinggian-air.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative font-semibold inline-block min-w-[115px]">{`Diagram Sensor `}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-3.5 text-center text-xs">
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
            <div className="relative font-semibold">History Jatuh Pengguna</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[7px] pb-1.5">
        <div
          className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
          onClick={onKelolaUserContainerClick}
        >
          <img
            className="h-[25px] w-[25px] relative object-cover min-h-[25px]"
            loading="lazy"
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
      <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-10 pb-1 relative z-[1] text-white">
        <div className="relative font-semibold inline-block min-w-[113px]">
          Profil Pengguna
        </div>
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/icon-2@2x.png"
        />
      </div>
    </div>
  );
};

export default SideBar3;
