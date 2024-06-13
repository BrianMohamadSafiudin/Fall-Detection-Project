import type { NextPage } from "next";

export type ShortestPathsType = {
  /** Action props */
  onNotifikasiContainerClick?: () => void;
  onLOGOUTContainerClick?: () => void;
};

const ShortestPaths: NextPage<ShortestPathsType> = ({
  onNotifikasiContainerClick,
  onLOGOUTContainerClick,
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-font-grey font-poppins mq725:flex-wrap">
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
            HISTORY JATUH PENGGUNA
          </h2>
          <div className="relative text-lg">Sabtu, 30 Maret 2024</div>
        </div>
      </div>
      <nav className="m-0 w-[366px] flex flex-row items-start justify-start gap-[36px] max-w-full whitespace-nowrap text-left text-sm text-font-dis font-poppins mq450:flex-wrap mq450:gap-[18px]">
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
        <div className="flex-1 flex flex-row items-start justify-start gap-[7px] min-w-[69px] text-xl text-font-grey">
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
        </div>
      </nav>
    </div>
  );
};

export default ShortestPaths;
