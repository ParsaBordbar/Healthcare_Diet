import { FunctionComponent, InputHTMLAttributes } from "react";

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  iconFisrt?: FunctionComponent;
  iconEnd?: FunctionComponent;
  inputClassName?: string;
  parentClassName?: string;
};
const MainInput = (props: TInput) => {
  return (
    <div className="flex w-full flex-col gap-1 ">
      <label htmlFor="" className="text-lg">
        {props.label}
      </label>
      <section
        className={`${props.parentClassName} rounded-lg py-3 px-4 border border-[var(--border-color)] flex items-center gap-1  bg-white `}
      >
        {props.iconFisrt && <props.iconFisrt />}
        <input
          className={`${props.inputClassName} placeholder:text-[var(--border-color)] w-full border-none outline-none bg-transparent`}
          {...props}
          type="text"
        />
        {props.iconEnd && <props.iconEnd />}
      </section>
    </div>
  );
};

export default MainInput;
