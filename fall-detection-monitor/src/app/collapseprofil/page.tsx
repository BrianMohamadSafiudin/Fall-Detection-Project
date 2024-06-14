"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import SideBar3 from "../../components//templates/side-bar3.tsx";
import FrameComponent1 from "../../components/molecules/frame-component1.tsx";
import InstansiLabel from "../../components/organisms/instansi-label.tsx";

const COLLAPSEPROFILEFALLDETECTIO: NextPage = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[39px] leading-[normal] tracking-[normal] mq725:gap-[19px] mq975:pl-5 mq975:box-border">
      <SideBar3 />
      <main className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-[calc(100%_-_324px)] mq975:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-left text-xl text-font-grey font-poppins mq725:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap">
            <div className="flex flex-col ithttps://github.com/BrianMohamadSafiudin/piton.gitems-start justify-start pt-0.5 px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                PROFIL PENGGUNA
              </h3>
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
              <div className="flex-1 flex flex-row items-start justify-start gap-[7px] min-w-[69px] text-xl text-font-grey">
                <img
                  className="h-[35px] w-[35px] relative object-cover min-h-[35px]"
                  loading="lazy"
                  alt=""
                  src="/icprof@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[64px] mq450:text-base">
                    ADMIN
                  </h3>
                </div>
              </div>
            </nav>
          </div>
          <div className="self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-start justify-start pt-4 px-[22px] pb-[28.7px] box-border gap-[30px] max-w-full text-lg mq975:pt-5 mq975:pb-5 mq975:box-border">
            <div className="w-[1080px] h-[881px] relative shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white hidden max-w-full" />
            <div className="relative font-semibold z-[1]">
              Edit Profil Pengguna
            </div>
            <div className="w-[917px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full text-sm text-grey-2">
              <div className="flex-1 flex flex-col items-end justify-start gap-[8px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[64px] max-w-full mq450:gap-[16px] mq975:flex-wrap mq975:gap-[32px]">
                <FrameComponent1
                    profil="/profil1@2x.png"
                    propWidth="393px"
                    propMinWidth="393px"
                    propMinWidth1="52px"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[281px] max-w-full mq450:gap-[16px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[38px] z-[1]">
                        Email
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[13px] pb-[9px] whitespace-nowrap max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[432px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="relative inline-block min-w-[38px] z-[2]">{`Email `}</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[73px] z-[1]">
                        Username
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 pb-[11px] pr-0 pl-[11px] max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[432px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="flex-1 relative inline-block max-w-full z-[2]">
                          Username
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[124px] z-[1]">
                        Nomor WhatsApp
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[13px] pb-[11px] whitespace-nowrap max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[432px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="w-[257px] relative inline-block shrink-0 z-[2]">
                          Nomor WhatsApp
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[106px] z-[1]">
                        Akun Telegram
                      </div>
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2 px-[13px] pb-[11px] whitespace-nowrap max-w-full z-[1] text-font-dis border-[1px] border-solid border-lightgray">
                        <div className="h-11 w-[432px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                        <div className="w-[257px] relative inline-block shrink-0 z-[2]">
                          Akun Telegram
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full text-font-dis mq450:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px] shrink-0 [debug_commit:1de1738] max-w-full">
                    <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[13px] pb-[9px] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                      <div className="h-11 w-[881px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                      <div className="relative inline-block min-w-[52px] z-[2]">
                        Alamat
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[17px] max-w-full">
                      <InstansiLabel
                        pekerjaan="Pekerjaan"
                        masukkanPekerjaan="Masukkan Pekerjaan"
                        passwordBaru="Password Baru"
                      />
                      <InstansiLabel
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
                    className="self-stretch rounded-lg bg-main flex flex-row items-start justify-center pt-[5px] px-5 pb-[6.3px] box-border shrink-0 [debug_commit:1de1738] max-w-full cursor-pointer z-[1] text-center text-lg text-white font-poppins"
                    onClick={onButtonClick}
                  >
                    <div className="h-[38.3px] w-[879px] relative rounded-lg bg-main hidden max-w-full" />
                    <div className="w-[118px] relative font-semibold inline-block shrink-0 z-[1]">
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

export default COLLAPSEPROFILEFALLDETECTIO;

