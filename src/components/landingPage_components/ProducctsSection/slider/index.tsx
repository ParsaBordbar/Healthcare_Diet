'use client'
import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import DietProductsBg from "/public/svg/DiietProductsBg.svg";
import ProductBox from "@/components/ProductBox";
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
const NewSlider = () => {
    return(
        <main className="flex gap-10 w-full justify-center">
              <Slider
                className="!w-[41%]"
                anotherProp={1}
                children={
                  <>
                    {" "}
                    <SwiperSlide className="!w-fit !m-0">
                      <ProductBox
                        desc="وزن : 1.7kg"
                        img={ProteinWhey}
                        title="اسم سخت یک داروی مرتبط و 
                کاملا واقعی"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="!w-fit !m-0">
                      <ProductBox
                        desc="وزن : 1.7kg"
                        img={ProteinWhey}
                        title="اسم سخت یک داروی مرتبط و 
                کاملا واقعی"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="!w-fit !m-0">
                      <ProductBox
                        desc="وزن : 1.7kg"
                        img={ProteinWhey}
                        title="اسم سخت یک داروی مرتبط و 
                کاملا واقعی"
                      />
                    </SwiperSlide>
                  </>
                }
              />
            </main>
    )
}

export default NewSlider