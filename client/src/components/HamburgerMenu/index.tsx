"use client";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import LogoSvg from "/public/svg/Logo.svg";
import Link from "next/link";
import MaleAvatar from "/public/svg/adminPanelSvgs/Group 108.svg";
import PhoneNumber from "/public/svg/phone.svg";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import LogOutIcon from "/public/svg/userPanelSvgs/LogOut.svg";
import MainButton from "../MainButton";
import LoginIcon from "/public/svg/Dr_Rabiee_Landing/person.crop.circle.fill.svg";
import { useRouter } from "next/navigation";

type THamMenu = {
  logo?: boolean;
  iconOne?: FunctionComponent;
  iconTwo?: FunctionComponent;
  iconThree?: FunctionComponent;
  iconFour?: FunctionComponent;
  iconFive?: FunctionComponent;
  iconSix?: FunctionComponent;
  className?: string;
  valueOne: string;
  linkOne: string;
  linkTwo: string;
  linkThree?: string;
  linkFour?: string;
  linkFive?: string;
  linkSix?: string;
  valueTwo: string;
  valueThree?: string;
  valueFour?: string;
  valueFive?: string;
  valueSix?: string;
  valueSeven?: string;
  iconSeven?: FunctionComponent;
  linkSeven?: string;
  valueEight?: string;
  iconEight?: FunctionComponent;
  linkEight?: string;
  valueNine?: string;
  iconNine?: FunctionComponent;
  linkNine?: string;
  valueTen?: string;
  iconTen?: FunctionComponent;
  linkTen?: string;
  userID?: string;
  isLanding?: boolean;
};

const HamburgerNavbar = (props: THamMenu) => {
  const user = localStorage.getItem("user");
  const [userPanel , setUserPanel] = useState('/register/login/enterNumber')
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  
  console.log(user)
  useEffect(() => {
    console.log('user' , userPanel)
    if (user) {
      setUserPanel(`/user/${user}/panel`);
    }
  }, [user , props.userID]);


  let patients = undefined;
  if (props.userID) {
    patients = useSpecificFetchBmi(props.userID);
  }

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const ValueArray: {
    value: string;
    link: string;
    icon: FunctionComponent | undefined;
  }[] = [
    { value: props.valueOne, link: props.linkOne, icon: props.iconOne },
    { value: props.valueTwo, link: props.linkTwo, icon: props.iconTwo },
    {
      value: props.valueThree ?? "",
      link: props.linkThree ?? "",
      icon: props.iconThree,
    },
    {
      value: props.valueFour ?? "",
      link: props.linkFour ?? "",
      icon: props.iconFour,
    },
    {
      value: props.valueFive ?? "",
      link: props.linkFive ?? "",
      icon: props.iconFive,
    },
    {
      value: props.valueSix ?? "",
      link: props.linkSix ?? "",
      icon: props.iconSix,
    },
    {
      value: props.valueSeven ?? "",
      link: props.linkSeven ?? "",
      icon: props.iconSeven,
    },
    {
      value: props.valueEight ?? "",
      link: props.linkEight ?? "",
      icon: props.iconEight,
    },
    {
      value: props.valueNine ?? "",
      link: props.linkNine ?? "",
      icon: props.iconNine,
    },
    {
      value: props.valueTen ?? "",
      link: props.linkTen ?? "",
      icon: props.iconTen,
    },

  ];

  const LinkGenerate = useCallback(() => {
    return ValueArray.map((Links) => {
      if (!Links.value || !Links.link) return;
      return (
        <Link
          className={`group  hover:bg-[var(--new-green)] transition-all ease-in-out duration-200 p-2 py-3 rounded-lg w-full`}
          href={Links.link}
          onClick={() => setBurgerMenuActive(false)}
          key={Links.value}
        >
          <motion.li
            className="!p-0 flex items-center [&>svg]:w-6 [&>svg]:h-6 [&>svg>path]:stroke-[var(--new-green)] group-hover:[&>svg>path]:stroke-white gap-2"
            variants={listItemVariants}
          >
            {Links.icon && <Links.icon />}
            <p className="text-[var(--black-blue)] group-hover:text-white font-bold">
              {Links.value}
            </p>
          </motion.li>
        </Link>
      );
    });
  }, []);

  const OptionGenerate = useMemo(() => {
    return (
      props.logo && (
        <button className={Styles.button}>
          <LogoSvg className="scale-75" />
        </button>
      )
    );
  }, []);

  const path = useRouter();
  const handleLogout = () => {
    path.push("/");
    localStorage.removeItem("user");
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0,
      },
    },
  };

  return (
    <div className="lg:hidden  shadow-lg">
      <div
        className={`  h-screen !fixed  ${Styles.navbar} z-50  ${
          burgerMenuActive ? Styles.active + " hidden" : ""
        }`}
      >
        <div
          className={`${
            Styles.navigation
          } w-full !fixed !right-0 !py-6 !px-6 md:!hidden  !flex justify-between items-center flex-row ${
            burgerMenuActive ? ` !bg-[var(--milky-white)] ` : "!bg-white"
          } ${props.className}`}
        >
          <div
            className={`${Styles.burgerMenuContainer}`}
            onClick={() => toggleBurgerMenu()}
          >
            <div>
              <div className={Styles.burgerMenuTrigger}></div>
              <div className={Styles.burgerMenu}></div>
              {OptionGenerate}
            </div>
          </div>
          {props.isLanding ? (
            <Link href={userPanel}>
              <MainButton
                className="bg-transparent hover:bg-transparent"
                modern
                iconSrc={LoginIcon}
              />
            </Link>
          ) : null}
        </div>

        <div
          className={
            Styles.content +
            ` w-full ${!burgerMenuActive && "!hidden"}  !flex h-[80vh]`
          }
        >
          <motion.ul
            className={`  flex w-full gap-6`}
            animate={burgerMenuActive ? "open" : "closed"}
            variants={motionVariants}
          >
            <div className={`flex flex-col justify-between w-full gap-6    `}>
              <section className="flex gap-6">
                <div className="flex flex-col w-full gap-3 pl-16">
                  {LinkGenerate()}
                </div>
              </section>
              <main
                className="p-2 pl-[4.75rem] flex flex-col gap-2
               "
              >
                {patients && <ul className="flex flex-col gap-2">
                  <li
                    onClick={handleLogout}
                    className="font-bold group cursor-pointer  hover:text-white text-[var(--black-blue)] !px-3 rounded-lg transition-all duration-200 ease-in-out flex items-center gap-2 !py-2 hover:bg-[var(--new-green)] text-base"
                  >
                    <LogOutIcon className="group-hover:[&>path]:stroke-white" />
                    <span>خروج</span>
                  </li>
                </ul>}
                {patients && (
                  <section className=" flex gap-4 items-center">
                    <MaleAvatar className="" />
                    <div className="flex flex-col">
                      <h1>{patients?.name + " " + patients?.lastName}</h1>
                      <section className="flex items-center gap-2">
                        <PhoneNumber className="[&>path]:stroke-[var(--new-green)]" />
                        <p>{patients?.phoneNumber}</p>
                      </section>
                    </div>
                  </section>
                )}
              </main>
            </div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
