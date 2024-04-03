"use client";
import { LoginFormType } from "@/types";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import Email from "/public/svgs/Email.svg";

const FormLogin = ({type}:LoginFormType) => {
  if(type == 'getCode'){
    return(
      <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ورود</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
        <MainInput
          label="کد را وارد کنید"
          iconFirst={Email}
          placeholder="کد دریافتی را وراد کنید"
        />
        <MainButton
          simple
          className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
          value={"ورود"}
        />
      </section>
    </form>
    )
  }
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ورود</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
        <MainInput
          label="لطفا شماره تماس خود را وارد کنید:"
          iconFirst={Email}
          placeholder="abc@gmail.com"
        />
        <MainButton
          simple
          className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
          value={"ارسال کد ورود"}
        />
      </section>
    </form>
  );
};

export default FormLogin;
