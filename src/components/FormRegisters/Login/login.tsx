"use client";
import { LoginFormType } from "@/types";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import Email from "/public/svgs/Email.svg";
import { useCallback } from "react";

const FormLogin = ({ type }: LoginFormType) => {
  const CheckTypeRender = useCallback(() => {
    if (type == "getCode") {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          <MainInput
            label="لطفا شماره تماس خود را وارد کنید:"
            iconFirst={Email}
            placeholder="abc@gmail.com"
          />
          <MainButton
            simple
            className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
            value={"ارسال کد ورود"}
            url="./enterTheCode"
          />
        </>
      );
    }
  }, []);
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ورود</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
        {CheckTypeRender()}
      </section>
    </form>
  );
};

export default FormLogin;
