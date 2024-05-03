"use client";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import User from "/public/svg/User.svg";
import Phone from "/public/svg/Phone.svg";
import CloseEye from "/public/svg/eye-slash.svg";
import { Controller } from "react-hook-form";
import Email from "/public/svg/Email.svg";
import { useEffect, useRef } from "react";
import useRegister from "@/validations/signup/useRegister";
const FormSignUp = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const { control, errors, handelValueInputs, handleSubmit, register } =
    useRegister();

  const inputRefs = [usernameRef, phoneNumberRef, emailRef, passwordRef];

  useEffect(() => {
    usernameRef.current?.focus();
    if (errors.username) {
      usernameRef.current?.focus();
    } else if (errors.phoneNumber) {
      phoneNumberRef.current?.focus();
    } else if (errors.email) {
      emailRef.current?.focus();
    } else if (errors.password) {
      passwordRef.current?.focus();
    }
    console.log(errors);
  }, [errors]);

  const handleEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      for (let i = 0; i < inputRefs.length; i++) {
        if (document.activeElement === inputRefs[i].current) {
          if (inputRefs[i + 1]?.current) {
            inputRefs[i + 1].current?.focus();
            event.preventDefault();
          }
          break;
        }
      }
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(handelValueInputs)}
      onKeyDown={handleEnter}
      className="flex w-full gap-10 flex-col justify-center"
    >
      <h1 className="text-center font-bold text-2xl">ثبت نام</h1>
      <section className="md:grid flex lg:flex flex-col w-full md:grid-cols-2 items-center gap-[1.875rem]">
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.username}
              ref={usernameRef}
              label="نام و نام خانوادگی"
              placeholder="ABC"
              iconFirst={User}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.phoneNumber}
              ref={phoneNumberRef}
              label="شماره تماس"
              placeholder="999*******"
              iconFirst={Phone}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.email}
              ref={emailRef}
              label="ایمیل"
              placeholder="abc@gmail.com"
              iconFirst={Email}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.password}
              ref={passwordRef}
              label="رمز عبور"
              placeholder="12346A56789"
              iconFirst={CloseEye}
              type="password"
            />
          )}
        />

        <section className="flex flex-col col-span-2 mt-5 gap-1 justify-center">
          <MainButton
            simple
            className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
            value="ثبت نام"
          />
          <p className="text-xl text-center  text-[var(--text)]">
            با ثبت نام، با
            <mark className="bg-transparent text-[var(--rating-color)]">
              {" "}
              سیاست حفظ حریم خصوصی{" "}
            </mark>
            و
            <mark className="bg-transparent text-[var(--rating-color)]">
              {" "}
              شرایط{" "}
            </mark>
            Healthy Bite موافقت می کنید
          </p>
        </section>
      </section>
    </form>
  );
};

export default FormSignUp;
