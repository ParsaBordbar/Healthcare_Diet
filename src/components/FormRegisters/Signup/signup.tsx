"use client";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import Email from "/public/svgs/Email.svg";
const FormSignUp = () => {
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ثبت نام</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
       <MainInput label="نام و نام خانوادگی" placeholder="ABC" iconFisrt={}/>
        <MainButton
          simple
          className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
          value={"ارسال کد ورود"}
        />
      </section>
    </form>
  );
};

export default FormSignUp;
