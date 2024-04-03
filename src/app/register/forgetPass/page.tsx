"use client";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import Email from "/public/svgs/Email.svg";

const ForgetPasswordPage = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center gap-5  w-1/3 top-[9.375rem] right-[7.5rem]">
        <form action="" className="flex w-full gap-10 flex-col justify-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className=" font-bold text-2xl">فراموشی رمز عبور</h1>
            <p className=" text-xl">
              یک شناسه ایمیل مرتبط با حساب خود وارد کنید
            </p>
          </div>
          <section className="flex w-full flex-col items-center gap-[3.125rem]">
            <MainInput
              label="ایمیل"
              placeholder="abc@gmail.com"
              iconFirst={Email}
            />
            <section className="flex w-full flex-col gap-1 justify-center">
              <MainButton
                simple
                className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
                value="بروزرسانی رمز عبور"
              />
              <p className="text-xl text-center mt-5 text-[var(--text)]">
                به زودی یک ایمیل با دستورالعمل های بیشتر دریافت خواهید کرد
              </p>
            </section>
          </section>
        </form>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
