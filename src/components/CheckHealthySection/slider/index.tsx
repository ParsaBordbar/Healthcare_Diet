"use client";
import CheckHealthBox from "@/components/CheckHealthBox";
import { Slider } from "@/components/slider";
import { SwiperSlide } from "swiper/react";
import CheckHealth from "/public/svg/Rectangle 17.svg";

const SlideCheckHealthySection = () => {
  return (
    <main className="flex gap-10 w-full justify-center">
      <Slider className="!w-full" anotherProp={1}>
        <SwiperSlide className="!w-fit !m-0">
          <CheckHealthBox
            img={CheckHealth}
            title="10 کیلوگرم در 3 هفته"
            desc=" این پلتفرم مانند بهترین اتفاقی است که برای سلامتی من افتاده
                است. من شوکه شده بودم که چگونه هوس هایم بعد از چند روز از بین
                رفت و نخواستن بین وعده های غذایی واقعاً کمکم کرد. از دست دادن
                6 کیلوگرم تنها در 3 هفته فوق العاده است، اما بهترین بخش بهبود
                سلامتی است."
            name="Anshuman Khuranna"
            datePlan="برنامه غذایی 3 هفته ای کاهش وزن"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !m-0">
          <CheckHealthBox
            img={CheckHealth}
            title="10 کیلوگرم در 3 هفته"
            desc=" این پلتفرم مانند بهترین اتفاقی است که برای سلامتی من افتاده
                است. من شوکه شده بودم که چگونه هوس هایم بعد از چند روز از بین
                رفت و نخواستن بین وعده های غذایی واقعاً کمکم کرد. از دست دادن
                6 کیلوگرم تنها در 3 هفته فوق العاده است، اما بهترین بخش بهبود
                سلامتی است."
            name="Anshuman Khuranna"
            datePlan="برنامه غذایی 3 هفته ای کاهش وزن"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !m-0">
          <CheckHealthBox
            img={CheckHealth}
            title="10 کیلوگرم در 3 هفته"
            desc=" این پلتفرم مانند بهترین اتفاقی است که برای سلامتی من افتاده
                است. من شوکه شده بودم که چگونه هوس هایم بعد از چند روز از بین
                رفت و نخواستن بین وعده های غذایی واقعاً کمکم کرد. از دست دادن
                6 کیلوگرم تنها در 3 هفته فوق العاده است، اما بهترین بخش بهبود
                سلامتی است."
            name="Anshuman Khuranna"
            datePlan="برنامه غذایی 3 هفته ای کاهش وزن"
          />
        </SwiperSlide>
      </Slider>
    </main>
  );
};

export default SlideCheckHealthySection;
