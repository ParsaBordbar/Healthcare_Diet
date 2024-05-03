"use client";
import useBmi from "@/validations/bmi/useBmi";
import MainButton from "../MainButton";
import MainInput from "../MainInput";
import { Controller } from "react-hook-form";
import { useContext, useEffect, useRef } from "react";
// import { AllContextType, useMyContext } from "@/hooks/useContext/Context";

const BmiFormDiet = () => {
  // const { Bmi, setBmi } = useMyContext();

  const { control, handelValueInputs, register, errors, handleSubmit } =
    useBmi();
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const heightRef = useRef<HTMLInputElement | null>(null);
  const weightRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);


  const inputRefs = [
    firstNameRef,
    lastNameRef,
    phoneNumberRef,
    genderRef,
    weightRef,
    ageRef,
    heightRef,
  ];

  useEffect(() => {
    console.log(firstNameRef);
    if (errors.firstName) {
      firstNameRef.current?.focus();
    } else if (errors.lastName) {
      lastNameRef.current?.focus();
    } else if (errors.phoneNumber) {
      phoneNumberRef.current?.focus();
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
          name="firstName"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.firstName}
              parentClassName="col-span-4 md:col-span-2 lg:col-span-4"
              label="نام"
              autoFocus
              ref={firstNameRef}
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
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              {...field}
              error={!!errors.phoneNumber}
              ref={phoneNumberRef}
              // onChange={() => {
                // setBmi(phoneNumberRef.current?.value);
              // }}
              // value={Bmi.phoneNumber}
              parentClassName="col-span-2 lg:col-span-4"
              label="شماره تماس"
              placeholder="شماره تماس خود را وارد کنید"
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
                <option value="male">مرد</option>
                <option value="female">زن</option>
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
              ref={weightRef}
              // onChange={() => {
                // setBmi(weightRef.current?.value);
              // }}
              // value={Bmi.weight ? Bmi.weight : weightRef.current?.value}
              type="number"
              label="وزن"
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
              type="number"
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
              type="number"
              // onChange={() => {
                // setBmi(heightRef.current?.value);
              // }}
              // value={Bmi.height ? Bmi.height : heightRef.current?.value}
              error={!!errors.height}
              ref={heightRef}
              label="قد"
              parentClassName="col-span-2"
              placeholder="(cm) قد خود را وارد کنید"
            />
          )}
        />

        <MainButton
          gradient
          type="submit"
          className="w-full h-fit self-end py-3 col-span-2 lg:col-span-4 !text-white"
          value={"ورود"}
        />
      </section>
    </form>
  );
};

export default BmiFormDiet;
