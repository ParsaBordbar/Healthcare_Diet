"use client";
import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import DietProductsBg from "/public/svg/DiietProductsBg.svg";
import ProductBox, { TProduct } from "@/components/ProductBox";
import ProteinWhey from "/public/svg/Rectangle 27.svg";
import LineSvg from "/public/svg/NutLiine.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slider } from "@/components/slider";
import { DataProduct } from "@/data";

const NewSlider = () => {
  return (
    <main className="flex gap-10 ">
      <Slider anotherProp={DataProduct.length - 1}>
        {DataProduct?.map((items: TProduct) => {
          return (
            <SwiperSlide className="!w-fit !m-0" {...items}>
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
