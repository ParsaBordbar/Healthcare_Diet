import MainInput from "@/components/MainInput";
import { ReactNode } from "react";


const CommentsLayout = ({ children }: { children: ReactNode }) => {
    return(
    <main>
        <MainInput parentClassName="!w-1/2 mx-auto mb-10" type="search" placeholder="نام بیمار مورد نظر خود را وارد کنید"/>
        {children}
    </main>
    )
}
export default CommentsLayout;