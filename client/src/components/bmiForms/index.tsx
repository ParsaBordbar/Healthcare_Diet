"use client";
import MainButton from "../MainButton";
import MainInput from "../MainInput";

const BmiFormDiet = () => {
  
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">
        اطلاعات خود را وارد کنید
      </h1>
      <section className="grid w-full grid-cols-4 gap-8">
        <MainInput
          parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
          label="نام"
          placeholder="نام خود را وارد کنید"
        />
        <MainInput
          parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
        <MainInput
          parentClassName="col-span-2 lg:col-span-4"
          label="شماره تماس"
          placeholder="شماره تماس خود را وارد کنید"
        />
        <section className="col-span-2 flex flex-col gap-1">
          <label htmlFor="gender" className="block  text-lg font-medium ">
            جنسیت
          </label>
          <select
            id="gender"
            className="rounded-lg w-full outline-none   py-3 px-4 border border-[var(--border-color)] flex items-center gap-1  bg-white "
          >
            <option value="gender" selected>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </section>
        <MainInput
          label="وزن"
          parentClassName="col-span-2"
          placeholder="وزن خود را وارد کنید"
        />
        <MainInput
          label="قد"
          parentClassName="col-span-2"
          placeholder="قد خود را وارد کنید"
        />
        <MainInput
          label="سن"
          parentClassName="col-span-2"
          placeholder="سن خود را وارد کنید"
        />
        <MainButton
          gradient
          className="w-full h-fit self-end py-3 col-span-2 lg:col-span-4 !text-white"
          value={"ورود"}
        />
      </section>
    </form>
  );
};

export default BmiFormDiet;
