"use client";
import { SwiperSlide } from "swiper/react";
import StoryBox from "../../StoryBox";
// import { Slider } from "@/components/slider";
import StoryBoxSvg from "/public/svg/StoryBoxSvg.svg";
import { DataStory } from "@/data";
import { TextBoxType } from "@/types";
import { Slider } from "@/components/slider";

const NewSlider = () => {
  return (
    <main className="flex gap-10 w-full justify-center">
      <Slider className="!py-10" anotherProp={2}>
        {DataStory.map((items: TextBoxType) => {
          return (
            <SwiperSlide className="!w-fit !m-0" key={items.id} {...items}>
              <StoryBox
                id={items.id}
                title={items.title}
                bodyText={items.bodyText}
                img={items.img}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </main>
  );
};

export default NewSlider;
