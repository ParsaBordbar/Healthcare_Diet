"use client";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import Email from "/public/svgs/Email.svg";
const FormLogin = () => {
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ورود</h1>
      <section className="flex w-full flex-col items-center gap-[3.125rem]">
        <MainInput
          label="لطفا شماره تماس خود را وارد کنید:"
          iconFisrt={Email}
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
