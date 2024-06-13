import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TableRowType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propOverflowX?: CSSProperties["overflowX"];
  propOverflow?: CSSProperties["overflow"];
  propRowGap?: CSSProperties["rowGap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight2?: CSSProperties["height"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propHeight3?: CSSProperties["height"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propHeight4?: CSSProperties["height"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propHeight5?: CSSProperties["height"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propHeight6?: CSSProperties["height"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propHeight7?: CSSProperties["height"];
  propAlignSelf7?: CSSProperties["alignSelf"];
  propHeight8?: CSSProperties["height"];
};

const TableRow: NextPage<TableRowType> = ({
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  propHeight,
  propOverflowX,
  propOverflow,
  propRowGap,
  propAlignSelf,
  propHeight1,
  propAlignSelf1,
  propHeight2,
  propAlignSelf2,
  propHeight3,
  propAlignSelf3,
  propHeight4,
  propAlignSelf4,
  propHeight5,
  propAlignSelf5,
  propHeight6,
  propAlignSelf6,
  propHeight7,
  propAlignSelf7,
  propHeight8,
}) => {
  const tableRowStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      overflowX: propOverflowX,
      overflow: propOverflow,
      rowGap: propRowGap,
    };
  }, [propHeight, propOverflowX, propOverflow, propRowGap]);

  const tableCellStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight1,
    };
  }, [propAlignSelf, propHeight1]);

  const tableCell1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      height: propHeight2,
    };
  }, [propAlignSelf1, propHeight2]);

  const tableCell2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      height: propHeight3,
    };
  }, [propAlignSelf2, propHeight3]);

  const tableCell3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      height: propHeight4,
    };
  }, [propAlignSelf3, propHeight4]);

  const tableCell4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      height: propHeight5,
    };
  }, [propAlignSelf4, propHeight5]);

  const tableCell5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
      height: propHeight6,
    };
  }, [propAlignSelf5, propHeight6]);

  const tableCell6Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
      height: propHeight7,
    };
  }, [propAlignSelf6, propHeight7]);

  const tableCell7Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf7,
      height: propHeight8,
    };
  }, [propAlignSelf7, propHeight8]);

  return (
    <div
      className="self-stretch h-[45px] shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-x-auto shrink-0 flex flex-row items-start justify-start text-center text-xs text-font-grey font-poppins"
      style={tableRowStyle}
    >
      <div
        className="self-stretch w-[261px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCellStyle}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell1Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text1}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell2Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text2}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell3Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text3}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell4Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text4}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell5Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">{text5}</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell6Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative">0</div>
        </div>
      </div>
      <div
        className="self-stretch w-[110px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border"
        style={tableCell7Style}
      >
        <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
            alt=""
            src=""
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
          <div className="self-stretch relative" />
        </div>
      </div>
    </div>
  );
};

export default TableRow;
