'use client'
import MainButton from "../MainButton";
import MainInput from "../MainInput";

const AdminLogin = () =>{
    return(
        <div className="bg-[var(--box-bg)] xl:w-1/3 lg:w-3/4 md:w-4/5 w-full rounded-2xl shadow-md">
            <form className="flex justify-center flex-col gap-10 p-10">
                <MainInput 
                label="نام کاربری"
                parentClassName="col-span-2"
                />

                <MainInput 
                label="رمزورود"
                parentClassName="col-span-2"
                />
                <MainButton
                    className="w-full py-3 !text-white bg-[var(--rating-color)] font-bold text-2xl"
                    value={"ورود"}
                />
            </form>
        </div>
    )
};
export default AdminLogin;