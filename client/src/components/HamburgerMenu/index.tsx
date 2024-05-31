"use client";
import React, { useCallback, useMemo, useState } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import NavElement from "../landingPage_components/NavElement";
import MainButton from "../MainButton";
import LogoSvg from "/public/svg/Logo.svg";
import Link from "next/link";
import { link } from "fs";

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
        <Link href={Links.link} key={Links.value}>
          <motion.li variants={listItemVariants}>
            <MainButton simple value={Links.value} />
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
    <div className="lg:hidden shadow-lg">
      <div
        className={` ${Styles.navbar}  ${
          burgerMenuActive ? Styles.active : ""
        }`}
      >
        <div className={`${Styles.navigation} ${props.className}`}>
          <div
            className={Styles.burgerMenuContainer}
            onClick={() => toggleBurgerMenu()}
          >
            <div className={Styles.burgerMenuTrigger}></div>
            <div className={Styles.burgerMenu}></div>
          </div>
          {OptionGenerate}
        </div>
        <div className={Styles.content}>
          <motion.ul
            animate={burgerMenuActive ? "open" : "closed"}
            variants={motionVariants}
          >
            {LinkGenerate()}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
