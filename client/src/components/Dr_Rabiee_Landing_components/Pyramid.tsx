import React from "react";
import PyramidImage from "../../../public/images/pyramid.png";
import Image from 'next/image';

const Pyramid = () => {
  return(
    <section className="relative p-5 bg-[#FEFDF9]">
    <div className="flex justify-center  items-center">
    <div className="absolute left-0 top-5 h-20 bg-[#3531F2] text-white p-2 rounded-r-full border-t border-white rtl flex w-fit px-6 ms-10 sm:ms-0">
      <h6 className="flex items-center font-bold w-full text-xl text-start">
      به سلامتی خود، با هر لقمه، نزدیک‌تر شوید.</h6>
    </div>
    <div className="xl:grid xl:grid-cols-2 flex flex-col-reverse justify-center items-center">
      <div className="lg:mt-40 mt-10 flex justify-center items-center col-span-1">
          <Image
            src={PyramidImage}
            alt="Mediterranean Diet Pyramid"
            className="object-cover object-center rounded-[110px_0_110px_0] shadow-md md:w-[520px] md:min-h-[500px] sm:w-[320px] sm:h-[300px] w-[260px] h-[275px]"
            width={500}
            height={500}
          />
        </div>
        <article className="col-span-1 flex justify-center items-start rtl flex-col xl:pt-28 md:px-24 lg:px-36 mt-28  lg:text-right text-center">
        <h3 className="xl:text-2xl md:text-xl text-center my-7 font-extrabold text-[var(--black-blue)] mb-10 sm:px-0 md:px-36 lg:px-0 text-2xl">هرم غذایی رژیم مدیترانه‌ای</h3>
        <p className="text-lg md:text-right text-center">
        هرم غذایی رژیم مدیترانه‌ای را مشاهده میکنید که بر اساس مواد غذایی سالم و مغذی ساخته شده است. در پایه‌ی این هرم، میوه‌های تازه‌ای چون سیب، پرتقال و انگور قرار دارند که منبع غنی از ویتامین‌ها و آنتی‌اکسیدان‌ها هستند. لایه‌ی بعدی شامل آب و لیوان‌های آب است که اهمیت هیدراتاسیون را در این رژیم غذایی تأکید می‌کند. در میانه‌ی هرم، غذاهای دریایی مانند سالمون کبابی، میگو و صدف به عنوان منابع اصلی پروتئین و اسیدهای چرب امگا-۳ معرفی شده‌اند. لایه‌ی بالاتر، انواع سبزیجات تازه از جمله اسفناج، فلفل دلمه‌ای و زیتون کالاماتا را شامل می‌شود. در نهایت، در رأس هرم، دانه‌های کامل و حبوبات نظیر جو، نخود فرنگی و لوبیا سیاه قرار دارند که منبع عالی فیبر و پروتئین گیاهی به شمار می‌روند. این هرم غذایی به خوبی تنوع و تعادل مواد غذایی در رژیم مدیترانه‌ای را به تصویر می‌کشد و بر اهمیت یک رژیم غذایی متعادل و متنوع تأکید دارد.
        </p>
        </article>
      </div>
    </div>
  </section>
  )
}
export default Pyramid;