import { TextBoxType } from "@/types";

const TextBox = ({tittle, bodyText, img}:TextBoxType) => {
    return(
        <div className="flex flex-row justify-center items-center gap-4">
            <div>
                <h2 className="text-xl">{tittle}</h2>
                <p className="text-base">{bodyText}</p>
            </div>
            {img}
        </div>
    )
};
export default TextBox;