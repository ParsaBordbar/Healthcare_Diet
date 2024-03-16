import { TextBoxType } from "@/types";
import TheUnderLineThing from '/public/svg/TheLine.svg'

const TextBox = ({tittle, bodyText, img}:TextBoxType) => {
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center gap-6 ">
                {img}
                <div className="flex flex-col justify-center items-center gap-2 w-3/6">
                    <h2 className="text-xl">{tittle}</h2>
                    <p className="text-base">{bodyText}</p>
                </div>
            </div>
            <TheUnderLineThing className="ms-56 lg:scale-75" />   
        </div>
    )
};
export default TextBox;