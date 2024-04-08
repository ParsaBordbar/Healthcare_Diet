import { TextBoxType } from "@/types";
import Link from "next/link";
import Arrow from "/public/svg/Arrow 1.svg";

const StoryBox = ({ title, bodyText, img  , id}: TextBoxType) => {
  return (
    <div className="flex bg-[var(--box-bg)] flex-col rounded-2xl justify-center items-center w-[394px]">
      {/* <div className="w-fit">{img}</div> */}
      <img src={img} alt="" />
      <div className="flex justify-center items-start flex-col m-2 p-4 border-b-2">
        <h3 className="text-2xl text-[var(--tittle-box)] font-semibold">
          {title + id}
        </h3>
        <p className="text-xl ">{bodyText}</p>
      </div>
      <Link href={"./"} className="self-start px-6 py-2">
        <div className="flex items-center gap-3">
          <Arrow />
          <p>ادامه</p>
        </div>
      </Link>
    </div>
  );
};
export default StoryBox;
