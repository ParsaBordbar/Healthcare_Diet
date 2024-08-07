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
  progress?:boolean;
};


const MainButton = (props: TButton) => {
  const declearModleOfButton = useMemo(() => {
    if (props.standard) {
      return "bg-gradient-to-t to-[var(--new-green)] from-[var(--logo-bg)] shadow-lg bg-[var(--new-green)]";
    } else if (props.trasparent) {
      return " border-2  border-[var(--new-green)]";
    } else if (props.gradient) {
      return "gradient-third-green";
    } else if (props.modern) {
      return `bg-[var(--orange)] hover:bg-[var(--new-green)] !text-white transition-all ease-in-out duration-200`;
    }else if(props.progress){
      return '[&>span]:relative [&>span]:text-[var(--black-blue)] cta [&>span]:pb-1'
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
      <span className={`${props.progress && 'progress-style '} font-medium md:font-semibold`}>
        {props.value}
      </span>
    </button>
  );
};
export default MainButton;
