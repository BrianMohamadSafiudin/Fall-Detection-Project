"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import SideBar1 from "@/components/templates/side-bar1";
import ShortestPaths from "@/components/templates/shortest-paths";
import DataHistoryKetinggianAir from "@/components/atoms/data-history-ketinggian-air";

const COLLAPSEHISTORYFALLDETECTIO: NextPage = () => {
  const router = useRouter();

  const onNotifikasiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLOGOUTContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[39px] leading-[normal] tracking-[normal] mq1000:pl-5 mq1000:box-border mq725:gap-[19px]">
      <div className="w-[285px] bg-font-grey flex flex-row items-start justify-start mq1000:hidden">
        <div className="self-stretch w-[285px] relative bg-font-grey hidden" />
        <SideBar1 />
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-[calc(100%_-_324px)] mq1000:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq725:gap-[19px]">
          <ShortestPaths
            onNotifikasiContainerClick={onNotifikasiContainerClick}
            onLOGOUTContainerClick={onLOGOUTContainerClick}
          />
          <DataHistoryKetinggianAir />
        </div>
      </section>
    </div>
  );
};

export default COLLAPSEHISTORYFALLDETECTIO;
