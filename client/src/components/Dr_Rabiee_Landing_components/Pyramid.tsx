import React from "react";
import PyramidImage from "../../../public/images/pyramid.png";
import Image from 'next/image';

const Pyramid = () => {
  return(
    <section className="relative p-5 bg-[#FEFDF9]">
    <div className="flex justify-center gap-28 items-center">
    <div className="absolute left-0 top-5 h-20 bg-[#3531F2] text-white p-2 rounded-r-full border-t border-white rtl flex w-fit px-6 ">
      <h6 className="font-extrabold text-xl flex items-center">
      به سلامتی خود، با هر لقمه، نزدیک‌تر شوید.</h6>
    </div>
    <div className="mt-40">
        <Image
          src={PyramidImage}
          alt="Mediterranean Diet Pyramid"
          className="object-cover object-center rounded-[110px_0_110px_0] shadow-md"
          width={500}
          height={500}
        />
      </div>
      <article className="flex w-2/5 justify-center items-start rtl flex-col mt-28 mx-14">
      <h3 className="text-2xl my-7 font-extrabold text-[var(--black-blue)]">هرم غذایی رژیم مدیترانه‌ای</h3>
      <p className="text-lg">
      رژیم غذایی مدیترانه‌ای، الگویی غذایی است که از سنت‌های غذایی مردمان نواحی زیتون‌خیز حوزه مدیترانه در دهه‌های ۱۹۵۰ و ۱۹۶۰ الهام گرفته و شامل مصرف بالای روغن زیتون، حبوبات، غلات کامل، میوه‌ها، سبزی‌ها و ماهی است، در حالی که مصرف گوشت قرمز محدود می‌شود. این رژیم به کاهش خطر بیماری‌های قلبی-عروقی و سایر بیماری‌های مزمن کمک می‌کند. تفاوت‌های فرهنگی و اقتصادی در کشورهای مدیترانه‌ای باعث شده تا تنوعی در این رژیم غذایی وجود داشته باشد. اصول کلی این رژیم در هرم غذایی مدیترانه‌ای نشان داده شده که شامل دستورالعمل‌های روزانه، هفتگی و گاه به گاه برای یک زندگی سالم‌تر است.
      </p>
      </article>
      
    </div>
  </section>
  )
}
export default Pyramid;