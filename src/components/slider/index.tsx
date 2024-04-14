"use client";
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
  children?: ReactNode[];
  anotherProp: number;
  className?: string;
};

export const Slider: React.FC<MySliderProps> = ({
  children,
  className,
  anotherProp,
}) => {
  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
      spaceBetween={10}
      slidesPerView={anotherProp}
      loop={true}
      autoplay={{ delay: 2500, reverseDirection: true }}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      draggable={false}
      allowTouchMove={false}
    >
      {children}
    </Swiper>
  );
};