import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider } from "../slider";
import { DataStory } from "@/data";
import { TextBoxType } from "@/types";
import StoryBox from "../landingPage_components/StoryBox";

function ArticleSlider() {
  return (
    <div className="flex-col  mx-auto gap-10 flex items-center">
      <section className="flex flex-col items-center gap-4 w-3/4">
        <h1 className="text-[var(--black-blue)] text-4xl font-extrabold">
          مقالات
        </h1>
        {/* <p className="text-[#424242] sm:text-base text-sm text-center">
          با دستور العمل های ایجاد شده (و آزمایش شده) توسط تیم داخلی ما از
          سرآشپزها و متخصصان تغذیه، می توانیم به شما قول بدهیم که تغذیه سالم
          خوشمزه است!
        </p> */}
      </section>
      <Slider className="!py-10 !w-[75%] sm:!w-[65%] flex flex-col items-center" anotherProp={3}>
        {DataStory.map((items: TextBoxType) => {
          return (
            // <SwiperSlide className="!w-fit !m-0" key={items.id} {...items}>
            <StoryBox key={items.id}
              id={items.id}
              title={items.title}
              bodyText={items.bodyText}
              img={items.img}
              url={items.url}
            />
            // </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
}

export default ArticleSlider;
