import {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useState,
} from "react";

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
            <img src="/svg/eye-slash.svg" alt="Close Eye" className="opacity-50" />
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
          className={`${props.error ? "text-red-600" : "text-black"} text-lg`}
        >
          {props.label}
        </label>
        <section
          className={` rounded-lg py-3 px-4 border ${
            props.error ? "border-red-600" : "border-[var(--border-color)]"
          }  flex items-center gap-1  bg-white `}
        >
          {FirstIcon()}
          <input
            {...props.register}
            className={`${props.inputClassName} placeholder:text-[var(--border-color)] w-full border-none outline-none bg-transparent`}
            {...props}
            ref={ref}
            type={showPassword ? "text" : props.type}
          />
        </section>
      </div>
    </>
  );
});

MainInput.displayName = 'MainInput';

export default MainInput;
