/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, h1, start, para, hover = "false" }) => {
  return (
    <div
      className={`bg-[#27272d] p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: News</h3>
          <IoIosArrowRoundForward className="font-bold text-3xl" />
        </div>
        {h1 === true ? (
          <>
            <h1 className="text-3xl font-normal mt-5">Insights and behind</h1>
            <h1 className="text-3xl font-normal ">the scenes</h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-normal mt-5">Lets get to it.</h1>
            <h1 className="text-3xl font-normal ">together.</h1>
          </>
        )}
      </div>
      <div className="down w-full mt-50">
        {start === true && (
          <>
            <h1 className="text-[8rem] pb-10 font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm text-zinc-300 font-normal">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
