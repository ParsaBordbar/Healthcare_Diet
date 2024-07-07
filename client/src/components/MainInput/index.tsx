"use client";
import {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useState,
} from "react";
import MainButton from "../MainButton";

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  iconFirst?: FunctionComponent;
  iconEnd?: FunctionComponent;
  inputClassName?: string;
  error?: boolean;
  register?: any;
  parentClassName?: string;
};

const MainInput = forwardRef<
  HTMLInputElement,
  TInput & { onChange?: (event: ChangeEvent<HTMLInputElement>) => void }
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const FirstIcon = useCallback(() => {
    if (props.type === "password") {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <img
              src="/svg/eye-slash.svg"
              alt="Close Eye"
              className="opacity-50"
            />
          ) : (
            <img src="/svg/eye.svg" alt="Open Eye" className="opacity-50" />
          )}
        </div>
      );
    } else {
      return props.iconFirst && <props.iconFirst />;
    }
  }, [showPassword]);

  return (
    <>
      <div className={`flex w-full flex-col gap-1 ${props.parentClassName}`}>
        <label
          htmlFor=""
          className={`${props.error ? "text-red-600" : "text-[var(--black-blue)]"}  text-base sm:text-lg`}
        >
          {props.label}
        </label>
        <section
          className={` rounded-lg  justify-between py-3 px-4 border ${
            props.error ? "border-red-600" : "border-[var(--border-color)]"
          }  ${props.type == 'search' ? 'sm:flex-row !gap-4 flex-col sm:items-center ' : ' items-center'} flex gap-2  bg-white `}
        >
          <div className="flex flex-grow items-center gap-2">
            {FirstIcon()}
            <input
              {...props.register}
              className={`${props.inputClassName} placeholder:text-xs w-full sm:placeholder:text-[var(--border-color)] border-none outline-none bg-transparent`}
              {...props}
              ref={ref}
              autoComplete="off"
              type={showPassword ? "text" : props.type}
            />
          </div>
         {props.type == 'search' && <MainButton
            modern
            type="submit"
            className="!text-sm  px-4 py-2 sm:py-3"
            value={"جست و جو"}
          />}
        </section>
      </div>
    </>
  );
});

MainInput.displayName = "MainInput";

export default MainInput;
