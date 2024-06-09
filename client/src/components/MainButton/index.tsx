"use client";
import {
  ButtonHTMLAttributes,
  FunctionComponent,
  useCallback,
  useMemo,
} from "react";
type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
  className?: string;
  iconSrc?: FunctionComponent;
  standard?: boolean;
  simple?: boolean;
  trasparent?: boolean;
  url?: string;
  gradient?: boolean;
  modern?: boolean;
};

const MainButton = (props: TButton) => {
  const declearModleOfButton = useMemo(() => {
    if (props.standard) {
      return "bg-gradient-to-t to-[var(--hero-btn)] from-[var(--logo-bg)] shadow-lg bg-[var(--hero-btn)]";
    } else if (props.trasparent) {
      return " border  border-[var(--new-green)]";
    } else if (props.gradient) {
      return "gradient-third-green";
    } else if (props.modern) {
      return `bg-[var(--orange)] hover:bg-[var(--new-green)] transition-all ease-in-out duration-200`;
    }
  }, []);
  const checkIcon = useCallback(() => {
    if (props.iconSrc) return <props.iconSrc />;
  }, []);
  return (
    <button
      {...props}
      className={`${
        props.className
      }  ${declearModleOfButton} ${
        props.iconSrc && "flex  items-center gap-2"
      } text-center rounded-lg text-base md:text-xl ` }
    >
      {checkIcon()}
      <span className=" font-medium md:font-semibold">
        {props.value}
      </span>
    </button>
  );
};
export default MainButton;
