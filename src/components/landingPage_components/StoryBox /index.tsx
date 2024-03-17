import { TextBoxType } from "@/types";
import Link from "next/link";
import Arrow2 from "/public/svg/arrow2.svg" 

const StoryBox  = ({tittle, bodyText, img}:TextBoxType) => {
    return(
        <div className="flex bg-[var(--box-bg)] flex-col rounded-2xl justify-center items-center w-[394px]">
            <div className="w-fit">
                {img}
            </div>
            <div className="flex justify-center items-start flex-col m-2 p-4 border-b-2">
                <h3 className="text-2xl text-[var(--tittle-box)] font-semibold">
                    {tittle}
                </h3>
                <p className="text-xl ">
                    {bodyText}
                </p>
            </div>
            <Link href={"./"} className="flex justify-start items-start my-2">
                ادامه
            </Link>
        </div>
    )
};
export default StoryBox;