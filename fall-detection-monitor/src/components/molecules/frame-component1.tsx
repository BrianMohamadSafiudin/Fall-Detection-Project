import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  profil?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  profil,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const alamatStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="h-[451px] w-[470.5px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[470.5px] max-w-full text-left text-sm text-grey-2 font-poppins mq725:min-w-full mq1000:flex-1"
      style={frameDivStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px] mq725:gap-[16px]">
        <div className="self-stretch flex-1 relative max-w-full max-h-full z-[1] flex items-center justify-center">
          <img
            className="self-stretch flex-1 overflow-hidden z-[1] object-contain absolute left-[-5px] top-[8px] w-full h-full [transform:scale(1.102)]"
            loading="lazy"
            alt=""
            src={profil}
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[9.6px]">
          <div
            className="relative inline-block min-w-[62.3px] z-[1]"
            style={alamatStyle}
          >
            Alamat
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
