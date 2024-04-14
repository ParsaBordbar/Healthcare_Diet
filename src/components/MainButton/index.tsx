"use client";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 6dfcff9b00e8e9914881e07cfa10239867063f49
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
<<<<<<< HEAD
  gradient?: boolean;
  url?: String;
=======
  gradient?:boolean
>>>>>>> 6dfcff9b00e8e9914881e07cfa10239867063f49
};

const MainButton = (props: TButton) => {
  const declearModleOfButton = useMemo(() => {
    if (props.standard) {
      return "bg-gradient-to-t to-[var(--hero-btn)] from-[var(--logo-bg)] shadow-lg bg-[var(--hero-btn)]";
    } else if (props.trasparent) {
      return " border  border-[var(--tittle-box)]";
<<<<<<< HEAD
    } else if (props.gradient) {
=======
    }else if(props.gradient){
>>>>>>> 6dfcff9b00e8e9914881e07cfa10239867063f49
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
<<<<<<< HEAD
      } text-center rounded-lg text-base`}
    >
      <Link href={`${props.url}`}>
      {checkIcon()}
        <span className="font-medium">{props.value}</span>
      </Link>
=======
      } text-center rounded-lg`}
    >
      {checkIcon()}
      <span className="!text-black font-medium  text-base ">{props.value}</span>
>>>>>>> 6dfcff9b00e8e9914881e07cfa10239867063f49
    </button>
  );
};
export default MainButton;
