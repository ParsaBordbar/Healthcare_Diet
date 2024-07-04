import React from "react";
import DocPhoto from "../../../public/images/dr.jpeg";
import Image from "next/image";
import Check from "/public/svg/check.svg";
function InformationSection() {
  return (
    <section className="relative h-screen p-5 bg-[#FEFDF9]">
      <div className="absolute top-20 right-0 flex items-center w-1/6 h-16 bg-[#3531F2] text-white p-2 rounded-l-full border-t border-white rtl">
        <h6 className="font-bold w-full text-xl text-center">متخصص تغذیه</h6>
      </div>
      <div className="flex justify-between items-center mx-24 my-24">
        <article className="w-1/2 flex flex-col gap-4 rtl">
          <h3 className="text-lg text-justify">
            دکتر محمدرضا ربیعی فارغ التحصیل رشته تغذیه از دانشگاه شهید بهشتی با
            شماره نظام پزشکی ت-1118 با پنج سال سابقه کاری موفق و همکاری با
            هنرمندان و ورزشکاران است. محمدرضا ربیعی دارای بالاترین درصد رضایت
            مردمی در صفحه اینستاگرام خود و بیش از ۱۰۰۰ تجربه موفق از مراجعین خود
            دارد.
          </h3>
          <ul className="text-justify flex flex-col gap-1 pl-5">
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
          </ul>
        </article>
        <div className="flex flex-col h-[545px] items-center w-1/2 ">
          <div className="w-2/3 overflow-hidden  rounded-2xl shadow-md">
            <Image
              src={DocPhoto}
              alt="Doctor Information"
              className="w-full h-full object-cover"
              width={5000}
              height={5000}
            />
          </div>
          <section className="flex flex-col mt-4 gap-2 items-center">
            <p>چهارمین کنگره ی بین المللی و شانزدهمین سراسری تغذیه ی ایران</p>
            <p>اسفند ۱۴۰۲</p>
          </section>
        </div>
        {/* <div className="w-1/2 h-[545px] flex flex-col gap-3 items-center  shadow-md">
          <Image
            src={DocPhoto}
            alt="Doctor Information"
            className="w-full h-full rounded-2xl object-cover"
            width={5000}
            height={5000}
          />
          <p>چهارمین کنگره ی بین المللی و شانزدهمین سراسری تغذیه ی ایران</p>
          <p>اسفند ۱۴۰۲</p>
        </div> */}
      </div>
    </section>
  );
}

export default InformationSection;
