import React from "react";
import PyramidImage from "../../../public/images/pyramid.png";
import Image from 'next/image';

const Pyramid = () => {
  return(
    <section className="relative p-5 bg-[#FEFDF9]">
    <div className="absolute top-20 right-0 w-1/6 h-16 bg-[#3531F2] text-white p-2 rounded-l-full border-t border-white rtl flex">
      <h6 className="font-bold flex items-center">
      هرم غذایی رژیم مدیترانه‌ای
      </h6>
    </div>
    <div className="flex justify-between items-center">
    <div>
        <Image
          src={PyramidImage}
          alt="Mediterranean Diet Pyramid"
          className="object-cover object-center rounded-[110px_0_110px_0] shadow-md"
          width={500}
          height={500}
        />
      </div>
      <article className="w-1/2 ml-5 rtl">
        <h3 className="text-lg">
        رژیم غذایی مدیترانه‌ای، الگویی غذایی است که از سنت‌های غذایی مردمان
      نواحی زیتون‌خیز حوزه مدیترانه در دهه‌های ۱۹۵۰ و ۱۹۶۰ الهام گرفته و
      شامل مصرف بالای روغن زیتون، حبوبات، غلات کامل، میوه‌ها، سبزی‌ها و ماهی
      است، در حالی که مصرف گوشت قرمز محدود می‌شود. این رژیم به کاهش خطر
      بیماری‌های قلبی-عروقی و سایر بیماری‌های مزمن کمک می‌کند. تفاوت‌های
      فرهنگی و اقتصادی در کشورهای مدیترانه‌ای باعث شده تا تنوعی در این رژیم
      غذایی وجود داشته باشد. اصول کلی این رژیم در هرم غذایی مدیترانه‌ای نشان
      داده شده که شامل دستورالعمل‌های روزانه، هفتگی و گاه به گاه برای یک
      زندگی سالم‌تر است.
        </h3>
        <ul className="list-disc pl-5">
          <li>کارشناس تغذیه از دانشگاه علوم پزشکی شیراز</li>
          <li>کارشناس ارشد تغذیه ورزشی از دانشگاه شیراز</li>
          <li>دکتری بیوشیمی و متابولیسم ورزشی از دانشگاه شیراز</li>
          <li>عضو هیات مدیره انجمن تغذیه استان فارس</li>
          <li>مدرس دانشگاه زند شیراز</li>
        </ul>
      </article>
      
    </div>
  </section>
  )
}
export default Pyramid;