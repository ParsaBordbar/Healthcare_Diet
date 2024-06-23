"use client";
import { useCallback, useMemo, useState } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import LogoSvg from "/public/svg/Logo.svg";
import Link from "next/link";
import SideBarBanner from "/public/svg/sideBarBanner.svg";

type THamMenu = {
  logo?: boolean;
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
};

const HamburgerNavbar = (props: THamMenu) => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

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

  const ValueArray: { value: string; link: string }[] = [
    { value: props.valueOne, link: props.linkOne },
    { value: props.valueTwo, link: props.linkTwo },
    { value: props.valueThree ?? "", link: props.linkThree ?? "" },
    { value: props.valueFour ?? "", link: props.linkFour ?? "" },
    { value: props.valueFive ?? "", link: props.linkFive ?? "" },
    { value: props.valueSix ?? "", link: props.linkSix ?? "" },
  ];

  const LinkGenerate = useCallback(() => {
    return ValueArray.map((Links) => {
      if (!Links.value || !Links.link) return;
      return (
        <Link
          className="group"
          href={Links.link}
          onClick={() => toggleBurgerMenu()}
          key={Links.value}
        >
          <motion.li className="!p-0" variants={listItemVariants}>
            <p className="group-hover:text-[var(--new-green)]">{Links.value}</p>
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
        className={`  h-screen fixed  ${Styles.navbar} z-50  ${
          burgerMenuActive ? Styles.active : ""
        }`}
      >
        <div
          className={`${Styles.navigation}  ${
            burgerMenuActive && ` !bg-[var(--milky-white)]` 
          } ${props.className}`}
        >
          <div
            className={Styles.burgerMenuContainer}
            onClick={() => toggleBurgerMenu()}
          >
            <div className={Styles.burgerMenuTrigger}></div>
            <div className={Styles.burgerMenu}></div>
          </div>
          {OptionGenerate}
        </div>
        <div className={Styles.content + ''}>
          <motion.ul
            className="flex  gap-6"
            animate={burgerMenuActive ? "open" : "closed"}
            variants={motionVariants}
          >
            <SideBarBanner className="h-[300px] rounded-2xl" width={40} />
            <div className="flex flex-col gap-6">{LinkGenerate()}</div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
