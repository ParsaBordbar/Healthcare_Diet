'use client'
import { Swiper } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import { ReactNode } from "react";
import React from "react";

type MySliderProps = {
  children?: any;
  anotherProp: number;
  className?:string
};

export const Slider = (props:MySliderProps) => {
  console.log(props.children , 'children]kwjg')
  return (
    <Swiper
    className={props.className}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
      spaceBetween={50}
      slidesPerView={props.anotherProp}
      loop={false}
      autoplay={{ delay: 2500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {props.children}
    </Swiper>
  );
};