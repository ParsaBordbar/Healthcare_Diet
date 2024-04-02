"use client";
import {
  ButtonHTMLAttributes,
  FunctionComponent,
  useCallback,
  useMemo,
} from "react";
type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
  iconSrc?: FunctionComponent;
  standard?: boolean;
  simple?: boolean;
  trasparent?: boolean;
  gradient?:boolean
};

const MainButton = (props: TButton) => {
  const declearModleOfButton = useMemo(() => {
    if (props.standard) {
      return "bg-gradient-to-t to-[var(--hero-btn)] from-[var(--logo-bg)] shadow-lg bg-[var(--hero-btn)]";
    } else if (props.trasparent) {
      return " border  border-[var(--tittle-box)]";
    }else if(props.gradient){
      return "gradient-third-green";
    }
  }, []);
  const checkIcon = useCallback(() => {
    if (props.iconSrc) return <props.iconSrc />;
  }, []);
  return (
    <button
      className={`${props.className} ${declearModleOfButton} ${
        props.iconSrc && "flex items-center gap-2"
      } text-center rounded-lg`}
    >
      {checkIcon()}
      <span className="!text-black font-medium  text-base ">{props.value}</span>
    </button>
  );
};
export default MainButton;
