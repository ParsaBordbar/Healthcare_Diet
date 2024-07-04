"use client";
import useBmi from "@/validations/bmi/useBmi";
import MainButton from "../MainButton";
import MainInput from "../MainInput";
import { Controller } from "react-hook-form";
import { useContext, useEffect, useRef } from "react";
import { AllContextType, useMyContext } from "@/hooks/useContext/Context";

const BmiFormDiet = () => {
  // const { Bmi, setBmi } = useMyContext();

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

  // console.log(phoneNumberRef.current?.value, "value of phone number field");

  const inputRefs = [
    nameRef,
    lastNameRef,
    phoneNumberRef,
    abdominalCircumferenceRef,
    genderRef,
    hipcircumferenceRef,
    weightRef,
    ageRef,
    cityRef,
    heightRef,
  ];

  useEffect(() => {
    // console.log(errors, !Bmi, Bmi);
    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.lastName) {
      lastNameRef.current?.focus();
    } else if (errors.city) {
      cityRef.current?.focus();
    } else if (errors.phoneNumber) {
       phoneNumberRef.current?.focus();
    } else if (errors.abdominalCircumference) {
      abdominalCircumferenceRef.current?.focus();
    } else if (errors.hipcircumference) {
      hipcircumferenceRef.current?.focus();
    } else if (errors.gender) {
      genderRef.current?.focus();
    } else if (errors.weight) {
      weightRef.current?.focus();
    } else if (errors.age) {
      ageRef.current?.focus();
    } else if (errors.height) {
      heightRef.current?.focus();
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
      className="flex w-full gap-10 flex-col justify-center"
    >
      <h1 className="text-center font-bold text-2xl">
        اطلاعات خود را وارد کنید
      </h1>
      <section className="grid w-full grid-cols-4 gap-8">
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

	<Controller
          control={control}
          name="city"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.city}
              ref={cityRef}
              parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
              label="شهر"
              placeholder="شهر خود را وارد کنید"
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
              parentClassName="col-span-2 lg:col-span-2"
              label="شماره تماس"
              placeholder=" شماره تماس خود را وارد کنید"
            />
          )}
        />
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


        <section className="col-span-2 flex flex-col gap-1">
          <label
            htmlFor="gender"
            className={`block  text-lg font-medium ${
              errors.gender?.message ? "text-red-600" : "text-black"
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
                }  flex items-center gap-1  bg-white `}
              >
                <option value="null" selected>
                  جنسیت
                </option>
                <option value="مرد">مرد</option>
                <option value="زن">زن</option>
              </select>
            )}
          />
        </section>

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
          name="height"
          render={({ field }) => (
            <MainInput
              {...field}
              type="text"
              error={!!errors.height}
              ref={heightRef}
              label="قد"
              parentClassName="col-span-2"
              placeholder="(cm) قد خود را وارد کنید"
            />
          )}
        />

        <MainButton
          modern
          type="submit"
          className="w-full h-fit self-end py-3 col-span-2 lg:col-span-4 !text-white"
          value={"ورود"}
        />
      </section>
    </form>
  );
};

export default BmiFormDiet;
