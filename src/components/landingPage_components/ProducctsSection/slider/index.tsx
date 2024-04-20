"use client";
import ProductBox, { TProduct } from "@/components/ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slider } from "@/components/slider";
import { DataProduct } from "@/data";

const NewSlider = () => {
  return (
    <main className="flex w-[93%] mx-auto gap-10 ">
      <Slider className="!py-10 !px-1.5 mx-4" anotherProp={2}>
        {DataProduct?.map((items: TProduct) => {
          return (
            <SwiperSlide className="!w-fit !m-0" {...items} key={items.id}>
              <ProductBox
                img={items.img}
                title={items.title}
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
