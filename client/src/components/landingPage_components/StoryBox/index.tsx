import { TextBoxType } from "@/types";
import Link from "next/link";
import Arrow from "/public/svg/Arrow 1.svg";

const StoryBox = ({ title, bodyText, img  , id}: TextBoxType) => {
  return (
    <div className="flex bg-[#e9eff0] flex-col rounded-2xl gap-4 py-4 px-2.5 justify-center items-center w-[280px] sm:w-[394px]">
      {/* <div className="w-fit">{img}</div> */}
      <img src={img} alt="" className="rounded-3xl -mt-10" />
      <div className="flex justify-center gap -1 items-start flex-col px-2  ">
        <h3 className="sm:text-2xl text-xl text-[var(--black-blue)] font-semibold">
          {title}
        </h3>
        <p className="sm:text-xl text-base">{bodyText}</p>
      </div>
      <Link href={"./"} className="self-start px-6 py-2">
        <div className="flex sm:text-base text-sm items-center gap-3">
          <Arrow />
          <Link href={'../../../article/'}>
            <p>ادامه مطلب</p>
          </Link>
        </div>
      </Link>
    </div>
  );
};
export default StoryBox;
