import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InstansiLabelType = {
  pekerjaan?: string;
  masukkanPekerjaan?: string;
  passwordBaru?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const InstansiLabel: NextPage<InstansiLabelType> = ({
  pekerjaan,
  masukkanPekerjaan,
  passwordBaru,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propWidth,
}) => {
  const pekerjaan1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const masukkanPekerjaan1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const passwordBaru1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[281px] max-w-full text-left text-sm text-grey-2 font-poppins mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div
          className="relative inline-block min-w-[70px] z-[1]"
          style={pekerjaan1Style}
        >
          {pekerjaan}
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[13px] pb-[11px] whitespace-nowrap max-w-full z-[1] text-center text-font-dis border-[1px] border-solid border-lightgray">
          <div className="h-11 w-[432px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
          <div className="relative z-[2]" style={masukkanPekerjaan1Style}>
            {masukkanPekerjaan}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div
          className="w-[114px] relative inline-block z-[1]"
          style={passwordBaru1Style}
        >
          {passwordBaru}
        </div>
        <div className="self-stretch rounded-3xs bg-white overflow-x-auto flex flex-row items-start justify-start pt-2.5 px-[16.1px] pb-1.5 gap-[2.5px] z-[1] text-center text-font-dis border-[1px] border-solid border-lightgray">
          <div className="h-[45px] w-[432px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-lightgray" />
          <div className="flex flex-col items-start justify-start py-0 pr-[6.9px] pl-0">
            <div className="w-[13.5px] h-[19.8px] relative z-[2]">
              <div className="absolute top-[6.2px] left-[0px] rounded-10xs bg-silver w-[13.5px] h-[13.5px]" />
              <div className="absolute top-[0px] left-[3.1px] rounded-8xs box-border w-[7.3px] h-[10.4px] z-[1] border-[1.5px] border-solid border-silver" />
              <div className="absolute top-[11.4px] left-[5.2px] rounded-[50%] bg-white w-[3.1px] h-[3.1px] z-[1]" />
            </div>
          </div>
          <div className="h-[17.7px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
            <div className="w-[0.5px] h-[15.1px] relative box-border z-[2] border-r-[0.5px] border-solid border-silver" />
          </div>
          <div className="w-[155px] relative inline-block shrink-0 z-[2]">
            Masukkan Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstansiLabel;
