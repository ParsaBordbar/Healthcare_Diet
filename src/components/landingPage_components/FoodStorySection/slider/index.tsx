"use client";
import { SwiperSlide } from "swiper/react";
import StoryBox from "../../StoryBox";
import { Slider } from "@/components/slider";
import StoryBoxSvg from "/public/svg/StoryBoxSvg.svg";

const NewSlider = () => {
  return (
    <main className="flex gap-10 w-full justify-center">
      <Slider className="!w-[22%]" anotherProp={1}>
        <SwiperSlide className="!w-fit !m-0">
          <StoryBox
            tittle={"رژیم و فیتنس"}
            bodyText={
              "تمام پروتئین مورد نیاز خود را با یک رژیم غذایی گیاهی دریافت کنید"
            }
            img={<StoryBoxSvg />}
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !m-0">
          <StoryBox
            tittle={"رژیم و فیتنس"}
            bodyText={
              "تمام پروتئین مورد نیاز خود را با یک رژیم غذایی گیاهی دریافت کنید"
            }
            img={<StoryBoxSvg />}
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !m-0">
          <StoryBox
            tittle={"رژیم و فیتنس"}
            bodyText={
              "تمام پروتئین مورد نیاز خود را با یک رژیم غذایی گیاهی دریافت کنید"
            }
            img={<StoryBoxSvg />}
          />
        </SwiperSlide>
      </Slider>
    </main>
  );
};

export default NewSlider;
