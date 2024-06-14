"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Sidebar1 from "../../components/templates/sidebar1.tsx";
import { useRouter } from "next/navigation";
import FrameComponent1 from "../../components/molecules/frame-component1.tsx";
import FrameComponent from "../../components/molecules/frame-component.tsx";

const MANAGEPROFILEFALLDETECTION: NextPage = () => {
  const router = useRouter();

  const onNotifikasiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLOGOUTContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/collapsediagram");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[41px] leading-[normal] tracking-[normal] mq725:gap-[20px] mq1000:pl-5 mq1000:box-border">
      <Sidebar1 />
      <main className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-[calc(100%_-_111px)] mq1000:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-left text-lg text-font-grey font-poppins mq725:gap-[19px]">
          <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-font-grey font-poppins">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap">
                PROFIL PENGGUNA
              </h3>
            </div>
            <div className="w-[362px] flex flex-row items-start justify-start gap-[32px] max-w-full text-sm text-font-dis mq450:gap-[16px]">
              <div className="flex-[0.8929] flex flex-col items-start justify-start pt-[5px] pb-0 pr-3 pl-0">
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
                      loading="lazy"
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
              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xl text-font-grey">
                <img
                  className="h-[35px] w-[35px] relative object-cover min-h-[35px]"
                  loading="lazy"
                  alt=""
                  src="/icprof@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[64px] whitespace-nowrap">
                    ADMIN
                  </h3>
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-4 px-[26.3px] pb-[28.7px] box-border gap-[30px] max-w-full mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
            <div className="w-[1293px] h-[881px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
            <div className="w-[219.1px] relative font-semibold inline-block z-[1]">
              Edit Profil Pengguna
            </div>
            <div className="w-[1098px] flex flex-row items-start justify-start py-0 pr-[17px] pl-[16.8px] box-border max-w-full text-sm text-grey-2">
              <div className="flex-1 flex flex-col items-end justify-start gap-[8px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[76.6px] max-w-full mq1050:gap-[38px] mq725:gap-[19px] mq1000:flex-wrap">
                  <FrameComponent1 profil="/profil@2x.png" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[336px] max-w-full mq725:gap-[16px] mq725:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[8px] max-w-full">
                      <div className="w-[45.5px] relative inline-block z-[1]">
                        Email
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[15.6px] pb-[9px] max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="w-[45.5px] relative inline-block shrink-0 z-[2]">{`Email `}</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[8px] max-w-full">
                      <div className="w-[87.4px] relative inline-block z-[1]">
                        Username
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 pb-[11px] pr-0 pl-[15.6px] max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="flex-1 relative inline-block max-w-full z-[2]">
                          Username
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="w-[148.5px] relative inline-block z-[1]">
                        Nomor WhatsApp
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[15.6px] pb-[11px] max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="w-[307.7px] relative inline-block shrink-0 z-[2]">
                          Nomor WhatsApp
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="w-[126.9px] relative inline-block z-[1]">
                        Akun Telegram
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[15.6px] pb-[11px] max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[517.2px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="w-[307.7px] relative inline-block shrink-0 z-[2]">
                          Akun Telegram
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full text-font-dis mq725:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
                    <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[15.5px] pb-[9px] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                      <div className="h-11 w-[1054.8px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                      <div className="relative inline-block min-w-[62.3px] z-[2]">
                        Alamat
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20.3px] max-w-full">
                      <FrameComponent
                        pekerjaan="Pekerjaan"
                        masukkanPekerjaan="Masukkan Pekerjaan"
                        passwordBaru="Password Baru"
                      />
                      <FrameComponent
                        pekerjaan="Instansi"
                        masukkanPekerjaan="Masukkan Instansi"
                        passwordBaru="Masukkan Ulang Password"
                        propMinWidth="54px"
                        propDisplay="inline-block"
                        propMinWidth1="129px"
                        propWidth="207px"
                      />
                    </div>
                  </div>
                  <footer
                    className="self-stretch rounded-lg bg-main flex flex-row items-start justify-center pt-[5px] px-5 pb-[6.3px] box-border max-w-full cursor-pointer z-[1] text-center text-lg text-white font-poppins"
                    onClick={onButtonClick}
                  >
                    <div className="h-[38.3px] w-[1052.4px] relative rounded-lg bg-main hidden max-w-full" />
                    <div className="w-[141.3px] relative font-semibold inline-block shrink-0 z-[1]">
                      Ubah Data
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MANAGEPROFILEFALLDETECTION;
