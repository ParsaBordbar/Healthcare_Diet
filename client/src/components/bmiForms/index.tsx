"use client";
import useBmi from "@/validations/bmi/useBmi";
import MainButton from "../MainButton";
import MainInput from "../MainInput";
import { Controller } from "react-hook-form";
import { useEffect, useRef } from "react";

const BmiFormDiet = () => {
  const { control, handelValueInputs, register, errors, handleSubmit } =
    useBmi();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const abdominalCircumferenceRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const hipcircumferenceRef = useRef<HTMLInputElement | null>(null);
  const heightRef = useRef<HTMLInputElement | null>(null);
  const weightRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);


  const inputRefs = [
    nameRef,
    lastNameRef,
    phoneNumberRef,
    abdominalCircumferenceRef,
    hipcircumferenceRef,
    weightRef,
    ageRef,
    cityRef,
    heightRef,
    genderRef,
  ];

  useEffect(() => {
    // console.log(errors, !Bmi, Bmi);
    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.lastName) {
      lastNameRef.current?.focus();
    } else if (errors.phoneNumber) {
      phoneNumberRef.current?.focus();
    } else if (errors.abdominalCircumference) {
      abdominalCircumferenceRef.current?.focus();
    } else if (errors.hipcircumference) {
      hipcircumferenceRef.current?.focus();
    } else if (errors.weight) {
      weightRef.current?.focus();
    } else if (errors.age) {
      ageRef.current?.focus();
    } else if (errors.city) {
      cityRef.current?.focus();
    } else if (errors.height) {
      heightRef.current?.focus();
    } else if (errors.gender) {
      genderRef.current?.focus();
    }
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
      onKeyDown={handleEnter}
      onSubmit={handleSubmit(handelValueInputs)}
      className="flex w-full gap-6 sm:gap-10 flex-col justify-center"
    >
      <h1 className="text-center text-[var(--black-blue)] font-extrabold text-2xl">
        اطلاعات خود را وارد کنید
      </h1>
      <section className="grid w-full grid-cols-4 gap-4">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.name}
              parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
              label="نام"
              autoFocus
              ref={nameRef}
              placeholder="نام خود را وارد کنید"
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.lastName}
              ref={lastNameRef}
              parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
              label="نام خانوادگی"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          )}
        />

        {/* <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.phoneNumber}
              ref={phoneNumberRef}
              parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
              label="شماره تماس"
              placeholder={number||"d"}
            />
          )}
        /> */}

        <Controller
          control={control}
          name="abdominalCircumference"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.abdominalCircumference}
              ref={abdominalCircumferenceRef}
              parentClassName="col-span-2 lg:col-span-2"
              label="دور شکم"
              placeholder="اندازه دور شکم خود را وارد کنید"
            />
          )}
        />

        <Controller
          control={control}
          name="hipcircumference"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.hipcircumference}
              ref={hipcircumferenceRef}
              parentClassName="col-span-2 lg:col-span-2"
              label="دور باسن"
              placeholder="اندازه دور باسن  خود را وارد کنید"
            />
          )}
        />

        <Controller
          control={control}
          name="weight"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.weight}
              type="text"
              label="وزن"
              ref={weightRef}
              parentClassName="col-span-2"
              placeholder="(kg) وزن خود را وارد کنید"
            />
          )}
        />

        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <MainInput
              {...field}
              type="text"
              error={!!errors.age}
              ref={ageRef}
              label="سن"
              parentClassName="col-span-2"
              placeholder="سن خود را وارد کنید"
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.city}
              ref={cityRef}
              parentClassName="col-span-full sm:col-span-2"
              label="شهر"
              placeholder="شهر خود را وارد کنید"
            />
          )}
        />
        {/* <section className="col-span-2 flex flex-col gap-1">
          <label
            htmlFor="city"
            className={`block text-base sm:text-lg ${
              errors.city?.message ? "text-red-600" : "text-[var(--black-blue)]"
            }`}
          >
            شهر
          </label>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <select
                {...field}
                ref={cityRef}
                className={`rounded-lg w-full outline-none   py-3 px-4 border ${
                  errors.city?.message
                    ? "border-red-600"
                    : "border-[var(--border-color)]"
                }  flex items-center gap-1 text-base bg-white `}
              >
                <option value="null">شهر</option>
                <option value="تهران">تهران</option>
                <option value="گیلان">گیلان</option>
                <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                <option value="خوزستان">خوزستان</option>
                <option value="فارس">فارس</option>
                <option value="اصفهان">اصفهان</option>
                <option value="خراسان رضوی">خراسان رضوی</option>
                <option value="قزوین">قزوین</option>
                <option value="سمنان">سمنان</option>
                <option value="قم">قم</option>
                <option value="مرکزی">مرکزی</option>
                <option value="زنجان">زنجان</option>
                <option value="مازندران">مازندران</option>
                <option value="گلستان">گلستان</option>
                <option value="اردبیل">اردبیل</option>
                <option value="آذربایجان غربی">آذربایجان غربی</option>
                <option value="همدان">همدان</option>
                <option value="کردستان">کردستان</option>
                <option value="کرمانشاه">کرمانشاه</option>
                <option value="لرستان">لرستان</option>
                <option value="بوشهر">بوشهر</option>
                <option value="کرمان">کرمان</option>
                <option value="هرمزگان">هرمزگان</option>
                <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
                <option value="یزد">یزد</option>
                <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
                <option value="ایلام">ایلام</option>
                <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
                <option value="خراسان شمالی">خراسان شمالی</option>
                <option value="خراسان جنوبی">خراسان جنوبی</option>
                <option value="البرز">البرز</option>
              </select>
            )}
          />
        </section> */}

        <Controller
          control={control}
          name="height"
          render={({ field }) => (
            <MainInput
              {...field}
              type="text"
              error={!!errors.height}
              ref={heightRef}
              label="قد"
              parentClassName="col-span-2 lg:col-span-2"
              placeholder="(cm) قد خود را وارد کنید"
            />
          )}
        />
        <section className="col-span-2 flex flex-col gap-1">
          <label
            htmlFor="gender"
            className={`block text-base sm:text-lg ${
              errors.gender?.message
                ? "text-red-600"
                : "text-[var(--black-blue)]"
            }`}
          >
            جنسیت
          </label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <select
                {...field}
                ref={genderRef}
                className={`rounded-lg w-full outline-none   py-3 px-4 border ${
                  errors.gender?.message
                    ? "border-red-600"
                    : "border-[var(--border-color)]"
                }  flex items-center gap-1 text-base bg-white `}
              >
                <option value="null">جنسیت</option>
                <option value="زن">زن</option>
                <option value="مرد">مرد</option>
              </select>
            )}
          />
        </section>
        <MainButton
          modern
          type="submit"
          className="w-full h-fit self-end py-3 col-span-full sm:col-span-2 md:col-span-full lg:col-span-2  !text-white"
          value={"ورود"}
        />
      </section>
    </form>
  );
};

export default BmiFormDiet;
