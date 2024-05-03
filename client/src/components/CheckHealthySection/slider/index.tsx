"use client";
import CheckHealthBox, { TCheckHealth } from "@/components/CheckHealthBox";
import { Slider } from "@/components/slider";
import { SwiperSlide } from "swiper/react";
import CheckHealth from "/public/svg/Rectangle 17.svg";
import { DataCheck } from "@/data";

const SlideCheckHealthySection = () => {
  return (
    <main className="flex gap-10  w-full justify-center">
      <Slider className="!w-full !py-10" anotherProp={1}>
        {DataCheck.map((items: TCheckHealth) => {
          return (
            <SwiperSlide className="!w-fit !m-0" key={items.id} {...items}>
              <CheckHealthBox
                img={items.img}
                title={items.title}
                desc={items.desc}
                datePlan={items.datePlan}
                name={items.name}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </main>
  );
};

export default SlideCheckHealthySection;
