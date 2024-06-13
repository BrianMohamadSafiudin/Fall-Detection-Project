import type { NextPage } from "next";

const FrameComponent2: NextPage = () => {
  return (
    <div className="flex flex-row items-start justify-start py-0 px-[22px] text-center text-xl text-white font-poppins">
      <div className="flex flex-col items-start justify-start gap-[1.7px]">
        <div className="flex flex-row items-start justify-start py-0 px-[60px]">
          <img
            className="h-[41.3px] w-[41px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo-politeknik-negeri-malang-2@2x.png"
          />
        </div>
        <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-base">
          <p className="m-0">FALL DETECTION</p>
          <p className="m-0">MONITOR</p>
        </h3>
      </div>
    </div>
  );
};

export default FrameComponent2;
