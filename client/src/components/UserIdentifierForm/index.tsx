"use client";
import { ChangeEvent, useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import MainButton from "@/components/MainButton";
import { Controller } from "react-hook-form";
import useCode from "@/validations/login/enterTheCode/useCode";

const UserIdentifyForm = () => {
  const { control, handelValueInputs, errors, handleSubmit } = useCode();

  const codeOne = useRef<HTMLInputElement>(null);
  const codeTwo = useRef<HTMLInputElement>(null);
  const codeThree = useRef<HTMLInputElement>(null);
  const codeFour = useRef<HTMLInputElement>(null);
  const codeFive = useRef<HTMLInputElement>(null);

  useEffect(() => {
    codeOne.current?.focus();
  }, [errors, codeOne.current?.value]);

  const inputRefs = [codeOne, codeTwo, codeThree, codeFour, codeFive];

  const handleEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (parseInt(event.key)) {
      for (let i = 0; i < inputRefs.length; i++) {
        if (document.activeElement === inputRefs[i].current) {
          console.log(inputRefs[i].current?.value.length);
          if (inputRefs[i + 1]?.current) {
            inputRefs[i + 1].current?.focus();
            event.preventDefault();
          }
          break;
        }
      }
    }
  };

  const handleLenght = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.maxLength, e.target.value.length);
    if (e.target.value.length > e.target.maxLength) {
      e.target.value =
        e.target.value.split("")[e.target.value.split("").length - 1];
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(handelValueInputs)}
        className="grid justify-items-center grid-cols-5  w-full pb-8 gap-6  "
        onKeyUp={handleEnter}
      >
        <Controller
          control={control}
          name="codeFive"
          render={({ field }) => (
            <MainInput
              maxLength={1}
              type="number"
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                handleLenght(e);
              }}
              className={`w-full h-12 text-center text-xl outline-none`}
              {...field}
              ref={codeFive}
            />
          )}
        />
        <Controller
          control={control}
          name="codeFour"
          render={({ field }) => (
            <MainInput
              maxLength={1}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                handleLenght(e);
              }}
              type="number"
              className={`w-full h-12 text-center text-xl outline-none`}
              {...field}
              ref={codeFour}
            />
          )}
        />
        <Controller
          control={control}
          name="codeThree"
          render={({ field }) => (
            <MainInput
              maxLength={1}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                handleLenght(e);
              }}
              type="number"
              className={`w-full h-12 text-center text-xl outline-none`}
              {...field}
              ref={codeThree}
            />
          )}
        />
        <Controller
          control={control}
          name="codeTwo"
          render={({ field }) => (
            <MainInput
              maxLength={1}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                handleLenght(e);
              }}
              type="number"
              className={`w-full h-12 text-center text-xl outline-none`}
              {...field}
              ref={codeTwo}
            />
          )}
        />
        <Controller
          control={control}
          name="codeOne"
          render={({ field }) => (
            <MainInput
              maxLength={1}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                handleLenght(e);
              }}
              type="number"
              className={`w-full h-12 text-center text-xl outline-none`}
              {...field}
              ref={codeOne}
            />
          )}
        />
        <MainButton
          type="submit"
          simple
          className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white col-span-5 w-full"
          value={"تایید"}
        />
      </form>
    </>
  );
};

export default UserIdentifyForm;
