import type { NextPage } from "next";
import TableRow1 from "@/components/templates/table-row1";
import TableRow from "@/components/templates/table-row";

const DataHistoryKetinggianAir: NextPage = () => {
  return (
    <form className="m-0 self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[22px] pb-[49px] pr-[21px] pl-[25px] box-border gap-[30px] max-w-full mq725:pt-5 mq725:pb-8 mq725:box-border">
      <div className="w-[1080px] h-[511px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq725:flex-wrap">
        <div className="w-[227px] flex flex-col items-start justify-start gap-[3px]">
          <h3 className="m-0 self-stretch relative text-lg font-semibold font-poppins text-font-grey text-left z-[1]">
            <p className="m-0">{`Data History `}</p>
            <p className="m-0">Jatuh Pengguna</p>
          </h3>
          <div className="relative text-sm font-poppins text-font-grey text-left inline-block min-w-[119px] z-[1]">
            Perbulan Januari
          </div>
        </div>
        <div className="w-[294px] flex flex-row items-start justify-start gap-[20px]">
          <div className="w-28 flex flex-col items-start justify-start">
            <div className="relative text-sm font-poppins text-font-grey text-center inline-block min-w-[82px] z-[1]">
              Waktu Awal
            </div>
            <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-[5px] pb-1 pr-2.5 pl-[7px] gap-[20px] z-[1]">
              <div className="h-[30px] w-28 relative rounded-8xs bg-whitesmoke-100 hidden" />
              <div className="relative text-sm font-poppins text-font-grey text-left inline-block min-w-[53px] z-[1]">
                Januari
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <img
                  className="w-[9px] h-1 relative z-[1]"
                  alt=""
                  src="/vector-222.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="relative text-sm font-poppins text-font-grey text-center inline-block min-w-[83px] z-[1]">
              Waktu Akhir
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-[5px] pb-1 pr-2.5 pl-[7px] gap-[20px] z-[1]">
                <div className="h-[30px] w-28 relative rounded-8xs bg-whitesmoke-100 hidden" />
                <div className="relative text-sm font-poppins text-font-grey text-left inline-block min-w-[53px] z-[1]">
                  Januari
                </div>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <img
                    className="w-[9px] h-1 relative z-[1]"
                    alt=""
                    src="/vector-222.svg"
                  />
                </div>
              </div>
              <div className="rounded-8xs bg-main1 flex flex-row items-start justify-start pt-[5px] px-1 pb-1 z-[1]">
                <div className="h-[30px] w-[30px] relative rounded-8xs bg-main1 hidden" />
                <div className="relative text-sm font-semibold font-poppins text-white text-left inline-block min-w-[22px] z-[1]">
                  GO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-hidden flex flex-col items-start justify-start z-[1]">
          <TableRow1 />
          <TableRow
            text="1 Januari 2021 - 7 Januari 2021"
            text4="0"
            text5="0"
            propHeight="unset"
            propOverflowX="unset"
            propOverflow="hidden"
            propRowGap="20px"
            propAlignSelf="unset"
            propHeight1="45px"
            propAlignSelf1="unset"
            propHeight2="45px"
            propAlignSelf2="unset"
            propHeight3="45px"
            propAlignSelf3="unset"
            propHeight4="45px"
            propAlignSelf4="unset"
            propHeight5="45px"
            propAlignSelf5="unset"
            propHeight6="45px"
            propAlignSelf6="unset"
            propHeight7="45px"
            propAlignSelf7="unset"
            propHeight8="45px"
          />
          <TableRow
            text="8 Januari 2021 - 14 Januari 2021"
            text1="0"
            text2="0"
            text3="0"
            text4="0"
            text5="3"
            propHeight="45px"
            propOverflowX="auto"
            propOverflow="unset"
            propRowGap="unset"
            propAlignSelf="stretch"
            propHeight1="unset"
            propAlignSelf1="stretch"
            propHeight2="unset"
            propAlignSelf2="stretch"
            propHeight3="unset"
            propAlignSelf3="stretch"
            propHeight4="unset"
            propAlignSelf4="stretch"
            propHeight5="unset"
            propAlignSelf5="stretch"
            propHeight6="unset"
            propAlignSelf6="stretch"
            propHeight7="unset"
            propAlignSelf7="stretch"
            propHeight8="unset"
          />
          <TableRow
            text="15 Januari 2021 - 21 Januari 2021"
            text1="0"
            text2="2"
            text3="0"
            text4="0"
            text5="0"
            propHeight="unset"
            propOverflowX="unset"
            propOverflow="hidden"
            propRowGap="20px"
            propAlignSelf="unset"
            propHeight1="45px"
            propAlignSelf1="unset"
            propHeight2="45px"
            propAlignSelf2="unset"
            propHeight3="45px"
            propAlignSelf3="unset"
            propHeight4="45px"
            propAlignSelf4="unset"
            propHeight5="45px"
            propAlignSelf5="unset"
            propHeight6="45px"
            propAlignSelf6="unset"
            propHeight7="45px"
            propAlignSelf7="unset"
            propHeight8="45px"
          />
          <TableRow
            text="22 Januari 2021 - 28 Januari 2021"
            text1="0"
            text2="0"
            text3="0"
            text4="1"
            text5="0"
            propHeight="45px"
            propOverflowX="auto"
            propOverflow="unset"
            propRowGap="unset"
            propAlignSelf="stretch"
            propHeight1="unset"
            propAlignSelf1="stretch"
            propHeight2="unset"
            propAlignSelf2="stretch"
            propHeight3="unset"
            propAlignSelf3="stretch"
            propHeight4="unset"
            propAlignSelf4="stretch"
            propHeight5="unset"
            propAlignSelf5="stretch"
            propHeight6="unset"
            propAlignSelf6="stretch"
            propHeight7="unset"
            propAlignSelf7="stretch"
            propHeight8="unset"
          />
          <TableRow
            text="29 Januari 2021 - 31 Januari 2021"
            text1="0"
            text2="0"
            text3="0"
            text4="0"
            text5="0"
          />
        </div>
        <div className="relative text-sm font-poppins text-font-grey text-left z-[1]">
          <p className="m-0">Tertinggi = 3 jatuh</p>
          <p className="m-0">Terendah = 0 jatuh</p>
        </div>
      </div>
    </form>
  );
};

export default DataHistoryKetinggianAir;
