"use client";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import useBmiLanding from "@/validations/bmi/useBmiLanding";
import { useRef, useEffect } from "react";
import { Controller } from "react-hook-form";

const BmiForm = () => {
  const { control, errors, handelValueInputs, handleSubmit, register } =
    useBmiLanding();

  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const heightRef = useRef<HTMLInputElement | null>(null);
  const weightRef = useRef<HTMLInputElement | null>(null);

  const inputRefs = [weightRef, heightRef, phoneNumberRef];

  useEffect(() => {
    console.log(errors);
    if (errors.weight) {
      weightRef.current?.focus();
    } else if (errors.height) {
      heightRef.current?.focus();
    } else if (errors.phoneNumber) {
      phoneNumberRef.current?.focus();
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
    <div className="flex justify-center items-center flex-col bg-[var(--soft-blue)] rounded-2xl my-12 px-10">
      <div className="flex justify-center items-center flex-col w-full my-10">
        <h3 className="lg:text-3xl text-xl my-7 text-[var(--black-blue)] font-extrabold">همین حالا شروع کنید!</h3>
        <form
          onSubmit={handleSubmit(handelValueInputs)}
          onKeyDown={handleEnter}
          action="submit"
          className="flex justify-center items-center flex-col"
        >
          <ul className="grid flex-row gap-2 md:grid-cols-2 grid-cols-1">
            <li>
              <Controller
                control={control}
                name="weight"
                render={({ field }) => (
                  <MainInput
                    {...field}
                    error={!!errors.weight}
                    ref={weightRef}
                    type="number"
                    label="وزن"
                    parentClassName="col-span-2"
                    placeholder="(kg) وزن خود را وارد کنید"
                    className="text-base md:text-lg"
                  />
                )}
              />{" "}
            </li>
            <li>
              <Controller
                control={control}
                name="height"
                render={({ field }) => (
                  <MainInput
                    {...field}
                    type="number"
                    error={!!errors.height}
                    ref={heightRef}
                    label="قد"
                    parentClassName="col-span-2 "
                    placeholder="(cm) قد خود را وارد کنید"
                    className="text-base md:text-lg"
                  />
                )}
              />{" "}
            </li>
          </ul>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <MainInput
                {...field}
                error={!!errors.phoneNumber}
                ref={phoneNumberRef}
                parentClassName="col-span-2 lg:col-span-4 mt-4"
                label="شماره تماس"
                placeholder="شماره تماس خود را وارد کنید"
                className="text-base md:text-base"
              />
            )}
          />
          <MainButton
            type="submit"
            className="w-full my-10 py-3 !text-white bg-[var(--secondary-blue)] md:text-2xl text-sm font-extrabold"
            value={"همین حالا رژیم خود را دریافت کنید"}
          />
        </form>
      </div>
    </div>
  );
};

export default BmiForm;
