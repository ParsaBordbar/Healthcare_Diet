"use client";
import useAdmin from "@/validations/admin/useAdmin";
import MainButton from "../MainButton";
import MainInput from "../MainInput";
import { useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const nav = useRouter()
  const { control, errors, handelValueInputs, handleSubmit, register } =
    useAdmin();
  const inputRefs = [usernameRef, passwordRef];

  useEffect(()=>{
    if(localStorage.getItem('admin')){
      nav.push('/admin/panel')
    }
  },[])

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

  useEffect(() => {
    usernameRef.current?.focus();
    if (errors.username) {
      usernameRef.current?.focus();
    } else if (errors.password) {
      passwordRef.current?.focus();
    }
  }, [errors]);

  return (
    <div className="bg-[var(--milky-white)] xl:w-1/3 lg:w-3/4 md:w-4/5 w-full rounded-2xl shadow-md">
      <form
        onKeyDown={handleEnter}
        onSubmit={handleSubmit(handelValueInputs)}
        className="flex justify-center flex-col gap-10 p-10"
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              {...field}
              ref={usernameRef}
              error={!!errors.username}
              label="نام کاربری"
              parentClassName="col-span-2"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <MainInput
              {...field}
              ref={passwordRef}
              type="password"
              error={!!errors.password}
              label="رمز ورود"
              parentClassName="col-span-2"
            />
          )}
        />

        <MainButton
          modern={true}
          type="submit"
          className="w-full py-3 !text-white font-bold text-2xl "
          value={"ورود"}
        />
      </form>
    </div>
  );
};
export default AdminLogin;
