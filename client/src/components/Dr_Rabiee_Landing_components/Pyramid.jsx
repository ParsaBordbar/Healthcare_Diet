import React from "react";
import PyramidImage from "../../../public/images/pyramid.png";
import Image from 'next/image';

const Pyramid = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#FEFDF9] m-0 text-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 rtl">
          هرم غذایی رژیم مدیترانه‌ای
        </h2>
        <p className="text-base text-black rtl">
          رژیم غذایی مدیترانه‌ای، الگویی غذایی است که از سنت‌های غذایی مردمان
          نواحی زیتون‌خیز حوزه مدیترانه در دهه‌های ۱۹۵۰ و ۱۹۶۰ الهام گرفته و
          شامل مصرف بالای روغن زیتون، حبوبات، غلات کامل، میوه‌ها، سبزی‌ها و ماهی
          است، در حالی که مصرف گوشت قرمز محدود می‌شود. این رژیم به کاهش خطر
          بیماری‌های قلبی-عروقی و سایر بیماری‌های مزمن کمک می‌کند. تفاوت‌های
          فرهنگی و اقتصادی در کشورهای مدیترانه‌ای باعث شده تا تنوعی در این رژیم
          غذایی وجود داشته باشد. اصول کلی این رژیم در هرم غذایی مدیترانه‌ای نشان
          داده شده که شامل دستورالعمل‌های روزانه، هفتگی و گاه به گاه برای یک
          زندگی سالم‌تر است.
        </p>
      </div>
      <div className="flex justify-center items-center">
      <Image
        src={PyramidImage}
        alt="Mediterranean Diet Pyramid"
        className="w-4/5 h-full object-cover object-center rounded-[110px_0_110px_0] shadow-md"
        width={500} 
        height={500}
      />
    </div>
    </div>
  </div>
);

export default Pyramid;
