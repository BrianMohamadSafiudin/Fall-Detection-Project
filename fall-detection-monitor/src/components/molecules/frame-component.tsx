"use client";
import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full text-left text-lg text-font-grey font-poppins mq675:gap-[20px]">
      <div className="w-[310px] shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start py-5 px-[25px] box-border gap-[8.9px]">
        <div className="w-[310px] h-52 relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden" />
        <div className="relative font-semibold inline-block min-w-[61px] z-[1]">
          Status
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <div className="flex-1 flex flex-row items-start justify-start gap-[10.3px]">
            <div className="h-[18.2px] flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0 box-border">
              <div className="w-[11.4px] h-[10.5px] relative z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[-5px] top-[8px] [transform:scale(4.81)]"
                  loading="lazy"
                  alt=""
                  src="/group-1451.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative z-[1]">{`SIAGA 1 : > 0.3 meter`}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-px">
          <div className="flex-1 flex flex-row items-start justify-start gap-[10.3px]">
            <div className="h-[88.6px] flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24.8px]">
                <div className="w-[11.4px] h-[10.5px] relative z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[-5px] top-[8px] [transform:scale(4.81)]"
                    loading="lazy"
                    alt=""
                    src="/group-1461.svg"
                  />
                </div>
                <div className="w-[11.4px] h-[10.5px] relative z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[-5px] top-[8px] [transform:scale(4.81)]"
                    loading="lazy"
                    alt=""
                    src="/group-1471.svg"
                  />
                </div>
                <div className="w-[11.4px] h-[10.5px] relative z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[-5px] top-[8px] [transform:scale(4.81)]"
                    loading="lazy"
                    alt=""
                    src="/group-1481.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8.3px]">
              <div className="self-stretch relative z-[1]">
                SIAGA 2 : 0.2 meter
              </div>
              <div className="w-[221.1px] relative whitespace-pre-wrap inline-block z-[1]">{`SIAGA 3 : 0.1 meter  `}</div>
              <div className="relative inline-block min-w-[76.5px] z-[1]">
                NORMAL
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex-1 shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-5 pb-[75.7px] pr-5 pl-[27px] box-border gap-[8.2px] min-w-[613px] max-w-full text-left text-lg text-font-grey font-poppins mq900:min-w-full">
        <div className="w-[943px] h-52 relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
        <div className="w-[128.4px] relative font-semibold inline-block z-[1]">
          Notifikasi
        </div>
        <div className="self-stretch h-[77.1px] relative inline-block shrink-0 z-[1]">{`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `}</div>
      </section>
    </div>
  );
};

export default FrameComponent;
