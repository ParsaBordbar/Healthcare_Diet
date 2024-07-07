import React from "react";
import DocPhoto from "../../../public/images/dr.jpg";
import Image from "next/image";
import Check from "/public/svg/check.svg";

function InformationSection() {
  return (
    <section className="relative p-5 bg-[#FEFDF9]">
      <div className="absolute xl:top-20 top-0  right-0 flex items-center xl:w-1/6 md:w-2/6 w-3/6 h-20 bg-[#3531F2] text-white p-2 rounded-l-full border-t border-white rtl">
        <h6 className="font-bold w-full text-xl text-center">متخصص تغذیه</h6>
      </div>
      <div className="flex justify-evenly min-[1109px]:gap-0 gap-4 min-[1109px]:flex-row flex-col-reverse items-center  mt-24">
        <article className="min-[1109px]:w-1/3 w-3/3 min-[1109px]:m-0 mx-auto flex flex-col gap-4 rtl">
          <h3 className="text-lg text-justify">
          دکتر محمدرضا ربیعی، کارشناس تغذیه از دانشگاه علوم پزشکی شیراز، کارشناس ارشد تغذیه ورزشی و دکتری بیوشیمی و متابولیسم ورزشی از دانشگاه شیراز فارغ التحصیل شده است. وی دارای شماره نظام پزشکی ت-1118 و با پنج سال سابقه کاری موفق و همکاری با هنرمندان و ورزشکاران است. محمدرضا ربیعی دارای بالاترین درصد رضایت مردمی در صفحه اینستاگرام خود و بیش از ۱۰۰۰ تجربه موفق از مراجعین خود دارد.
          </h3>
          <ul className="text-justify [&>li]:sm:text-base min-[321px]:[&>li]:text-sm [&>li]:text-[0.755rem] flex min-[1109px]:w-full  mx-auto min-[1109px]:m-0 flex-col gap-2 md:pl-5">
            <li className="flex items-center gap-2">
              <Check />
              <p>کارشناس تغذیه از دانشگاه علوم پزشکی شیراز</p>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <p>کارشناس ارشد تغذیه ورزشی از دانشگاه شیراز </p>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <p>دکتری بیوشیمی و متابولیسم ورزشی از دانشگاه شیراز </p>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <p>عضو هیات مدیره انجمن تغذیه استان فارس</p>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <p>مدرس دانشگاه زند شیراز</p>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <p>عضو بنیاد ملی نخبگان</p>
            </li>
          </ul>
        </article>
        <div className="flex flex-col md:h-[545px] min-[321px]:h-[345px] h-[245px] sm:h-[345px] items-center min-[1109px]:w-1/3 sm:w-3/5 w-4/5 ">
          <div className="w-5/6 overflow-hidden group rounded-2xl hover:shadow-md shadow-md">
            <Image
              src={DocPhoto}
              alt="Doctor Information"
              className="w-full transition-all scale-125 group-hover:scale-[1.5] sm:scale-100 duration-200 ease-in-out sm:group-hover:scale-110 object-cover"
              width={5000}
              height={5000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
