"use client";
import {
  FunctionComponent,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import CloseEye from "/public/svg/eye-slash.svg";
import OpenEye from "/public/svg/eye.svg";
type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  iconFirst?: FunctionComponent;
  iconEnd?: FunctionComponent;
  inputClassName?: string;
  parentClassName?: string;
};
const MainInput = (props: TInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const FirstIcon = useCallback(() => {
    if (props.type === "password") {
      return (
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <CloseEye className="opacity-50" />
          ) : (
            <OpenEye className="opacity-50" />
          )}
        </div>
      );
    } else {
      return props.iconFirst && <props.iconFirst />;
    }
  }, [showPassword]);

  return (
    <div className={`${props.parentClassName} flex w-full flex-col gap-1 `}>
      <label htmlFor="" className="text-lg">
        {props.label}
      </label>
      <section
        className={` rounded-lg py-3 px-4 border border-[var(--border-color)] flex items-center gap-1  bg-white `}
      >
        {FirstIcon()}
        <input
          className={`${props.inputClassName} placeholder:text-[var(--border-color)] w-full border-none outline-none bg-transparent`}
          {...props}
          type={showPassword ? "text" : props.type}
        />
      </section>
    </div>
  );
};

export default MainInput;
