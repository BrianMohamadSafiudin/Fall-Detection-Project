import type { NextPage } from "next";

const Realtime: NextPage = () => {
  return (
    <div className="self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-end justify-start pt-4 px-[22px] pb-3.5 box-border gap-[22.5px] max-w-full text-left text-lg text-font-grey font-poppins">
      <div className="w-[1287px] h-[470px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
        <div className="relative font-semibold z-[1]">Daftar Pengguna</div>
        <div className="w-[271px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-sm text-gainsboro-100">
          <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-[5px] pb-1 pr-2.5 pl-2 gap-[20px] z-[1]">
            <div className="h-[30px] w-[271px] relative rounded-8xs bg-whitesmoke-100 hidden" />
            <div className="relative inline-block min-w-[55px] z-[1]">
              Search..
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-[11px] h-2.5 relative z-[1]"
                alt=""
                src="/group-166.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-8xs bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[16.5px] box-border gap-[10.4px] max-w-full z-[1] text-base text-main1">
        <div className="self-stretch h-[338px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-8xs bg-white hidden" />
        <div className="self-stretch rounded-8xs bg-whitesmoke-100 overflow-x-auto flex flex-row items-start justify-between pt-[7px] pb-[6.3px] pr-[45px] pl-[14.3px] gap-[20px] z-[1] mq1325:pr-[22px] mq1325:box-border">
          <div className="h-[42px] w-[1243px] relative rounded-8xs bg-whitesmoke-100 shrink-0 hidden" />
          <div className="w-[122px] shrink-0 flex flex-row items-start justify-start gap-[35.9px]">
            <div className="h-[28.7px] w-[26.3px] relative font-medium inline-block shrink-0 z-[2]">
              No
            </div>
            <div className="h-[28.7px] flex-1 relative font-medium inline-block z-[2]">
              Nama
            </div>
          </div>
          <div className="w-[207.9px] shrink-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="w-[71.7px] h-[28.7px] relative font-medium inline-block shrink-0 z-[2]">
              Alamat
            </div>
          </div>
          <div className="w-[200.1px] shrink-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="w-[172.2px] h-[28.7px] relative font-medium inline-block shrink-0 z-[2]">
              Nomor WhatsApp
            </div>
          </div>
          <div className="w-[179.5px] shrink-0 flex flex-row items-start justify-start gap-[35.7px]">
            <div className="h-[28.7px] flex-1 relative font-medium inline-block shrink-0 z-[2]">
              Akses
            </div>
            <div className="relative font-medium inline-block min-w-[12.5px] shrink-0 z-[2]">
              ...
            </div>
            <div className="h-[28.7px] w-[39.5px] relative font-medium inline-block shrink-0 z-[2]">
              Aksi
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[15.6px] pl-[21px] box-border max-w-full text-center text-font-grey">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17.9px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1325:flex-wrap">
              <div className="w-[192.5px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                  <div className="w-3 flex flex-col items-start justify-start gap-[17.9px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[2.4px]">
                      <div className="h-[28.7px] w-[7.2px] relative inline-block shrink-0 min-w-[7.2px] z-[1]">
                        1
                      </div>
                    </div>
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 min-w-[12px] z-[1]">
                      2
                    </div>
                  </div>
                  <div className="w-[137.5px] flex flex-col items-start justify-start gap-[18.2px] text-left text-sm">
                    <div className="w-[130px] h-7 relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[77.8px] max-w-full text-left text-sm mq800:gap-[19px] mq1125:flex-wrap mq1125:gap-[39px]">
                <div className="w-72 flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                  <div className="w-[238px] flex flex-col items-start justify-start gap-[25.6px]">
                    <div className="relative inline-block min-w-[87px] z-[1]">
                      LoremIpsum
                    </div>
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                  </div>
                </div>
                <div className="w-[280.2px] flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0 box-border">
                  <div className="w-[135.7px] flex flex-col items-start justify-start gap-[17.3px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                      <div className="h-[28.7px] flex-1 relative inline-block z-[1]">
                        LoremIpsum
                      </div>
                    </div>
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                  </div>
                </div>
                <div className="w-[62.2px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17.9px]">
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                      USER
                    </div>
                    <div className="w-[54px] relative inline-block z-[1]">
                      USER
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.6px]">
                  <div className="flex flex-col items-start justify-start gap-[17.9px]">
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon7.svg"
                    />
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[17.9px]">
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon8.svg"
                    />
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[43px] max-w-full text-left text-sm mq800:gap-[21px] mq1325:flex-wrap">
              <div className="h-[28.7px] w-3 relative text-base text-center inline-block shrink-0 min-w-[12px] z-[1] mq1325:w-full mq1325:h-3">
                3
              </div>
              <div className="w-[540.5px] flex flex-row items-start justify-center py-0 pr-[97px] pl-0 box-border gap-[39.5px] max-w-full mq800:flex-wrap mq800:gap-[20px] mq800:pr-12 mq800:box-border mq450:pr-5 mq450:box-border">
                <div className="h-[28.7px] w-[178.2px] relative inline-block shrink-0 [debug_commit:1de1738] z-[1]">
                  LoremIpsum
                </div>
                <div className="h-[28.7px] flex-1 relative inline-block min-w-[68px] shrink-0 [debug_commit:1de1738] z-[1]">
                  LoremIpsum
                </div>
              </div>
              <div className="w-[315px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="w-[133.9px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                  LoremIpsum
                </div>
              </div>
              <div className="w-[209.4px] flex flex-row items-start justify-between gap-[20px]">
                <div className="w-[54px] relative inline-block shrink-0 z-[1]">
                  USER
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.6px]">
                  <img
                    className="h-[29.9px] w-[29.9px] relative min-h-[30px] shrink-0 [debug_commit:1de1738] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon3.svg"
                  />
                  <img
                    className="h-[29.9px] w-[29.9px] relative min-h-[30px] shrink-0 [debug_commit:1de1738] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[41.8px] max-w-full text-left text-sm mq800:gap-[21px] mq1325:flex-wrap">
              <div className="w-[13.2px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border text-center text-base">
                <div className="self-stretch h-[28.7px] relative inline-block shrink-0 min-w-[13.2px] z-[1]">
                  4
                </div>
              </div>
              <div className="w-[541.7px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border max-w-full">
                <div className="w-[477.2px] flex flex-row items-start justify-center gap-[64.6px] max-w-full mq800:gap-[32px] mq450:flex-wrap">
                  <div className="h-[28.7px] w-[153.1px] relative inline-block shrink-0 z-[1]">
                    LoremIpsum
                  </div>
                  <div className="h-[28.7px] flex-1 relative inline-block min-w-[68px] z-[1]">
                    LoremIpsum
                  </div>
                </div>
              </div>
              <div className="w-[316.2px] flex flex-col items-start justify-start pt-[1.1px] pb-0 pr-5 pl-0 box-border">
                <div className="w-[133.9px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                  LoremIpsum
                </div>
              </div>
              <div className="w-[209.4px] flex flex-row items-start justify-between gap-[20px]">
                <div className="w-[62.2px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[28.7px] relative inline-block shrink-0 [debug_commit:1de1738] z-[1]">
                    USER
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.6px] shrink-0 [debug_commit:1de1738]">
                  <img
                    className="h-[29.9px] w-[29.9px] relative min-h-[30px] shrink-0 [debug_commit:1de1738] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon3.svg"
                  />
                  <img
                    className="h-[29.9px] w-[29.9px] relative min-h-[30px] shrink-0 [debug_commit:1de1738] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[21.6px] max-w-full mq1125:flex-wrap">
              <div className="w-[251.1px] flex flex-row items-start justify-start gap-[41.8px] mq450:gap-[21px]">
                <div className="w-[13.2px] flex flex-col items-start justify-start gap-[19.2px]">
                  <div className="self-stretch h-[28.7px] relative inline-block shrink-0 min-w-[13.2px] z-[1]">
                    5
                  </div>
                  <div className="self-stretch h-[28.7px] relative inline-block shrink-0 min-w-[13.2px] z-[1]">
                    6
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[19.2px] text-left text-sm">
                  <div className="w-[138.7px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                    LoremIpsum
                  </div>
                  <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                    LoremIpsum
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-between min-w-[606px] max-w-full gap-[20px] text-left text-sm mq800:min-w-full mq1125:flex-wrap">
                <div className="w-[279.8px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[19.2px]">
                  <div className="w-[251.1px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                    LoremIpsum
                  </div>
                  <div className="w-[232px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                    LoremIpsum
                  </div>
                </div>
                <div className="w-[272px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 box-border">
                  <div className="w-[139.9px] flex flex-col items-start justify-start gap-[17.3px]">
                    <div className="w-[129.1px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                    <div className="self-stretch h-[28.7px] relative inline-block shrink-0 z-[1]">
                      LoremIpsum
                    </div>
                  </div>
                </div>
                <div className="w-[54px] flex flex-col items-start justify-start gap-[23px]">
                  <div className="self-stretch relative z-[1]">USER</div>
                  <div className="w-[46.6px] h-[28.7px] relative inline-block shrink-0 z-[1]">
                    USER
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.6px]">
                  <div className="flex flex-col items-start justify-start gap-[18px]">
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon3.svg"
                    />
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon5.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[18px]">
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon4.svg"
                    />
                    <img
                      className="w-[29.9px] h-[29.9px] relative z-[1]"
                      alt=""
                      src="/icon6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[233px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px] text-center text-sm text-black">
        <div className="flex-[0.4706] flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
          <div className="relative font-light inline-block min-w-[8px] z-[2]">{`<`}</div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 text-skyblue">
          <div className="relative [text-decoration:underline] font-medium inline-block min-w-[5px] z-[2]">
            1
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="relative font-light inline-block min-w-[9px] z-[2]">
            2
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="relative font-light inline-block min-w-[9px] z-[2]">
            3
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="relative font-light inline-block min-w-[9px] z-[2]">
            4
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="relative font-light inline-block min-w-[9px] z-[2]">
            5
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="relative font-light inline-block min-w-[9px] z-[2]">
            6
          </div>
        </div>
        <div className="relative font-light inline-block min-w-[8px] z-[2]">
          ...
        </div>
        <div className="flex-1 relative font-light inline-block min-w-[22px] z-[2]">
          100
        </div>
        <div className="relative font-light inline-block min-w-[7px] z-[2]">{`>`}</div>
      </div>
    </div>
  );
};

export default Realtime;
