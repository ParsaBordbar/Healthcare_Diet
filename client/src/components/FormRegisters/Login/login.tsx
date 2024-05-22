"use client";
import { LoginFormType } from "@/types";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import { useCallback, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import useEnterNumber from "@/validations/login/enterNumber/useEnterNumber";
import Phone from "/public/svg/Phone.svg";

const FormLogin = ({ type }: LoginFormType) => {
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const { control, errors, handelValueInputs, handleSubmit, register } =
    useEnterNumber();
  useEffect(() => {
    phoneNumberRef.current?.focus();
  }, [errors.phoneNumber]);
  const CheckTypeRender = useCallback(() => {
    if (type == "getCode") {
      return (
        <>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <MainInput
                {...field}
                error={!!errors.phoneNumber}
                ref={phoneNumberRef}
                iconFirst={Phone}
                parentClassName="col-span-2 lg:col-span-4"
                label="شماره تماس"
                placeholder="شماره تماس خود را وارد کنید"
              />
            )}
          />
          <MainButton
            type="submit"
            simple
            className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
            value={"ورود"}
          />
        </>
      );
    } else {
      return (
        <>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <MainInput
                {...field}
                iconFirst={Phone}
                error={!!errors.phoneNumber}
                ref={phoneNumberRef}
                parentClassName="col-span-2 lg:col-span-4"
                label="شماره تماس"
                placeholder="شماره تماس خود را وارد کنید"
              />
            )}
          />
          <MainButton
            type="submit"
            simple
            className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
            value={"ارسال کد ورود"}
          />
        </>
      );
    }
  }, [errors.phoneNumber]);
  return (
    <form
      action=""
      onSubmit={handleSubmit(handelValueInputs)}
      className="flex w-full gap-10 flex-col justify-center"
    >
      <h1 className="text-center font-bold text-2xl">ورود</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
        {CheckTypeRender()}
      </section>
    </form>
  );
};

export default FormLogin;
