import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import FrameComponent2 from "./frame-component21";

export type FrameComponentType = {
  pekerjaan?: string;
  masukkanPekerjaan?: string;
  passwordBaru?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  pekerjaan,
  masukkanPekerjaan,
  passwordBaru,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const pekerjaanStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const masukkanPekerjaanStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const passwordBaruStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[336px] max-w-full text-left text-sm text-grey-2 font-poppins mq725:gap-[16px] mq725:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div
          className="w-[83.8px] relative inline-block z-[1]"
          style={pekerjaanStyle}
        >
          {pekerjaan}
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[15.5px] pb-[11px] max-w-full z-[1] text-center text-font-dis border-[1px] border-solid border-lightgray">
          <div className="h-11 w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
          <div
            className="w-[172.4px] relative inline-block shrink-0 z-[2]"
            style={masukkanPekerjaanStyle}
          >
            {masukkanPekerjaan}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div
          className="w-[136.5px] relative inline-block z-[1]"
          style={passwordBaruStyle}
        >
          {passwordBaru}
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[19.3px] pb-1.5 gap-[3.1px] max-w-full z-[1] text-center text-font-dis border-[1px] border-solid border-lightgray">
          <div className="h-[45px] w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
          <div className="h-[19.8px] w-[27.9px] relative">
            <div className="absolute top-[0px] left-[0px] w-[16.2px] h-[19.8px] z-[2]">
              <div className="absolute top-[6.2px] left-[0px] rounded-10xs bg-silver w-[16.2px] h-[13.5px]" />
              <div className="absolute top-[0px] left-[3.7px] rounded-8xs box-border w-[8.7px] h-[10.4px] z-[1] border-[1.5px] border-solid border-silver" />
              <div className="absolute top-[11.4px] left-[6.2px] rounded-[50%] bg-white w-[3.7px] h-[3.1px] z-[1]" />
            </div>
            <div className="absolute top-[3.1px] left-[27.4px] box-border w-[0.5px] h-[15.1px] z-[2] border-r-[0.5px] border-solid border-silver" />
          </div>
          <div className="w-[185.6px] relative inline-block shrink-0 z-[2]">
            Masukkan Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
