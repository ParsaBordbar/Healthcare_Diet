"use client";
import MainButton from "../../MainButton";
import MainInput from "../../MainInput";
import User from "/public/svgs/User.svg";
import Phone from "/public/svgs/Phone.svg";
import CloseEye from "/public/svgs/eye-slash.svg";
import Email from "/public/svgs/Email.svg";
const FormSignUp = () => {
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">ثبت نام</h1>
      <section className="flex w-full flex-col items-center gap-[1.875rem]">
        <MainInput
          label="نام و نام خانوادگی"
          placeholder="ABC"
          iconFirst={User}
        />
        <MainInput
          label="شماره تماس"
          placeholder="999*******"
          iconFirst={Phone}
        />
        <MainInput label="ایمیل" placeholder="abc@gmail.com" iconFirst={Email} />
        <MainInput
          label="رمز عبور"
          placeholder="12346A56789"
          iconFirst={CloseEye}
          type="password"
        />
        <section className="flex flex-col gap-1 justify-center">
          <p className="text-xl text-center mt-5 text-[var(--text)]">
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
          <MainButton
            simple
            className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white w-full"
            value='ثبت نام'
          />
        </section>
      </section>
    </form>
  );
};

export default FormSignUp;
