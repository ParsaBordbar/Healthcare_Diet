"use client";
import Link from "next/link";
import { FunctionComponent, ReactNode, useEffect, useMemo } from "react";

type TSideBarItems = {
  value: string;
  href: string;
  className?:string
  icon: FunctionComponent;
  router?: string;
  onClick?: () => void;
};

const SideBarItems = (props: TSideBarItems) => {
  console.log(props.router, props.href);
  const SelectionStyles = useMemo(() => {
    if (props.router == props.href && props.value == "رژیم ها") {
      return true;
    }
    if (props.router == props.href && props.value == "پروفایل شخصی") {
      return true;
    }
    if (props.router == props.href && props.value == "خانه") {
      return true;
    }
    if (props.router == props.href && props.value == "پنل اصلی") {
      return true;
    }
    if (props.router == props.href && props.value == "سوابق بیمارها") {
      return true;
    }
    if (props.router == props.href && props.value == "فرم های BMI") {
      return true;
    }
    if (
      props.router == props.href &&
      props.value == "فرم های رژیم مدیترانه ای"
    ) {
      return true;
    }
    if (props.router == props.href && props.value == "فرم های پاسخ داده نشده") {
      return true;
    }
    if (props.router == props.href && props.value == "برنامه های شما") {
      return true;
    }
    if (props.router == props.href && props.value == "پیام های شما") {
      return true;
    }
    return false; // Add this line to handle the default case
  }, [props.router, props.value]);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Link href={props.href} passHref>
      <label
        onClick={handleClick} 
        className={`group [&>svg>path]:stroke-[var(--new-green)] hover:bg-[var(--new-green)] font-extrabold [&>svg>path]:hover:stroke-white text-xl ${
          SelectionStyles && " [&>svg>path]:!stroke-white bg-[var(--new-green)]"
        } cursor-pointer ease-in-out transition-all duration-200 p-3 flex items-center gap-2  rounded-md`}
      >
        <input
          className="hidden peer items-center gap-3 checked:hidden text-white text-[var(--new-green)]"
          type="radio"
          name="radio"
        />
        {<props.icon />}
        <p
          className={`text-[var(--black-blue)] ${props.className} ${
            SelectionStyles && "!text-white"
          } group-hover:text-white`}
        >
          {props.value}
        </p>
      </label>
    </Link>
  );
};

export default SideBarItems;
