"use client";
import { Swiper } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import { ReactNode } from "react";
import React from "react";

type MySliderProps = {
  children?: ReactNode[];
  anotherProp: number;
};

export const Slider: React.FC<MySliderProps> = ({ children, anotherProp }) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Grid,
        A11y,
        Autoplay,
        Mousewheel,
      ]}
      spaceBetween={10}
      slidesPerView={anotherProp}
      loop={true}
      autoplay={{ delay: 2500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};
