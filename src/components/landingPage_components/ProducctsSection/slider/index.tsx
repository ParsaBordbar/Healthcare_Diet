"use client";
import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import DietProductsBg from "/public/svg/DiietProductsBg.svg";
import ProductBox, { TProduct } from "@/components/ProductBox";
import ProteinWhey from "/public/svg/Rectangle 27.svg";
import LineSvg from "/public/svg/NutLiine.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slider } from "@/components/slider";
import { DataProduct } from "@/data";
import { useEffect, useState } from "react";

const NewSlider = () => {
  return (
    <main className="flex w-full gap-10 ">
      <Slider className="!py-10" anotherProp={2}>
        {DataProduct?.map((items: TProduct) => {
          return (
            <SwiperSlide className="!w-fit !m-0" {...items} key={items.id}>
              <ProductBox
                img={items.img}
                title={"uiviweg" + items.id}
                desc={items.desc}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </main>
  );
};

export default NewSlider;
