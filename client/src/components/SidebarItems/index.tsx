"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useEffect, useMemo } from "react";
type TSideBarItems = {
  value: string;
  href: string;
  icon: FunctionComponent;
  router?: string;
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
  }, [props.router, props.value]);

  return (
    <Link href={props.href}>
      <label
        className={`group [&>svg>path]:hover:stroke-[var(--new-green)] [&>svg>path]:stroke-white  [&>svg>path]:stroke-2  text-xl ${
          SelectionStyles && "bg-white [&>svg>path]:!stroke-[var(--new-green)]"
        } cursor-pointer hover:bg-white   ease-in-out transition-all duration-150 p-4 flex items-center gap-2  rounded-s-md`}
      >
        <input
          className="hidden peer items-center gap-3 checked:hidden text-white group-hover:text-[var(--new-green)]"
          type="radio"
          name="radio"
        />
        {<props.icon />}
        <p
          className={`group-hover:text-[var(--new-green)] ${
            SelectionStyles && "!text-[var(--new-green)]"
          } text-white`}
        >
          {props.value}
        </p>
      </label>
    </Link>
  );
};

export default SideBarItems;
