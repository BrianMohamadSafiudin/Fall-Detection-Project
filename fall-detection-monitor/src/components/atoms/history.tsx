import type { NextPage } from "next";
import TableRow2 from "@/components/templates/table-row2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig.tsx";
import React, { useEffect, useState } from 'react';


const History: NextPage = () => {
  const [fallhistorys, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "fallhistorys"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    fetchUsers();
  }, []);
}

const History: NextPage = () => {
  return (
    <form className="m-0 self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[22px] px-[22px] pb-[42px] box-border gap-[20px] max-w-full mq750:pt-5 mq750:pb-[27px] mq750:box-border">
      <div className="w-[1293px] h-[494px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
        <div className="w-[227px] flex flex-col items-start justify-start gap-[3px]">
          <h3 className="m-0 self-stretch relative text-lg font-semibold font-poppins text-font-grey text-left z-[1]">
            <p className="m-0">{`Data History `}</p>
            <p className="m-0">Jatuh Pengguna</p>
          </h3>
          <div className="relative text-sm font-poppins text-font-grey text-left inline-block min-w-[119px] z-[1]">
            Perbulan Januari
          </div>
        </div>
        <div className="w-[334px] flex flex-row items-start justify-start gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
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
          <div className="flex-1 flex flex-col items-start justify-start min-w-[118px]">
            <div className="relative text-sm font-poppins text-font-grey text-center inline-block min-w-[83px] z-[1]">
              Waktu Akhir
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="w-28 rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-[5px] px-[7px] pb-1 box-border gap-[33px] z-[1]">
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 box-border max-w-full">
        <div className="flex-1 shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-hidden flex flex-col items-start justify-start max-w-full z-[1]">
          <TableRow2 />
          <div className="self-stretch shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-hidden flex flex-row items-center justify-start [row-gap:20px] mq1275:flex-wrap">
            <div className="h-[45px] w-[261px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
                  loading="lazy"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  1 Januari 2021 - 7 Januari 2021
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center" />
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center" />
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center" />
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[143px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[45px] shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-x-auto shrink-0 flex flex-row items-center justify-start">
            <div className="self-stretch w-[261px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  8 Januari 2021 - 14 Januari 2021
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  3
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[143px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-hidden flex flex-row items-center justify-start [row-gap:20px] mq1275:flex-wrap">
            <div className="h-[45px] w-[261px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
                  loading="lazy"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  15 Januari 2021 - 21 Januari 2021
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  2
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[140px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="h-[45px] w-[143px] bg-gray-300 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[45px] shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-x-auto shrink-0 flex flex-row items-center justify-start">
            <div className="self-stretch w-[261px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  22 Januari 2021 - 28 Januari 2021
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  1
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[143px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[45px] shadow-[0px_1px_0px_#b9b9b9_inset] bg-gray-300 overflow-x-auto shrink-0 flex flex-row items-center justify-start">
            <div className="self-stretch w-[261px] rounded-3xs bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  29 Januari 2021 - 31 Januari 2021
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[140px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center">
                  0
                </div>
              </div>
            </div>
            <div className="self-stretch w-[143px] bg-gray-300 shrink-0 flex flex-col items-start justify-center py-[3.5px] px-0 box-border">
              <div className="self-stretch h-0 relative max-w-full shrink-0 flex items-center justify-center">
                <img
                  className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-50px] top-[19px] w-full [transform:scale(Infinity)]"
                  alt=""
                  src=""
                />
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-2.5 px-2">
                <div className="self-stretch relative text-xs font-poppins text-font-grey text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <div className="h-[42px] relative text-sm font-poppins text-font-grey text-left inline-block z-[1]">
          <p className="m-0">Tertinggi = 3 Jatuh</p>
          <p className="m-0">Terendah = 0 Jatuh</p>
        </div>
      </div>
    </form>
  );
};

export default History;
