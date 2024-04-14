import { TextBoxType } from "@/types";
import TheUnderLineThing from '/public/svg/TheLine.svg'

const TextBox = ({title, bodyText, img}:TextBoxType) => {
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center gap-6">
                <div className="flex w-1/3">
                 {img}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <h2 className="md:text-xl text-lg">{title}</h2>
                    <p className="lg:text-base text-xs">{bodyText}</p>
                </div>
            </div>
            <TheUnderLineThing className="ms-56 lg:scale-75 hidden xl:flex" />   
        </div>
    )
};
export default TextBox;