import React from "react";
import DocPhoto from "../../../public/images/dr.jpeg"
import Image from 'next/image';


function InformationSection() {
  return (
    <section className="relative h-screen p-5 bg-[#FEFDF9]">
      <div className="absolute top-20 right-0 w-1/6 h-16 bg-[#3531F2] text-white p-2 rounded-l-full border-t border-white rtl">
        <h6 className="font-bold flex items-center">
          متخصص تغذیه
        </h6>
      </div>
      <div className="flex justify-between items-center mx-24 my-24">
        
        <article className="w-1/2 ml-5 rtl">
          <h3 className="text-lg">
            دکتر محمدرضا ربیعی فارغ التحصیل رشته تغذیه از دانشگاه شهید بهشتی با
            شماره نظام پزشکی ت-1118 با پنج سال سابقه کاری موفق و همکاری با
            هنرمندان و ورزشکاران است. محمدرضا ربیعی دارای بالاترین درصد رضایت
            مردمی در صفحه اینستاگرام خود و بیش از ۱۰۰۰ تجربه موفق از مراجعین خود
            دارد.
          </h3>
          <ul className="list-disc pl-5">
            <li>کارشناس تغذیه از دانشگاه علوم پزشکی شیراز</li>
            <li>کارشناس ارشد تغذیه ورزشی از دانشگاه شیراز</li>
            <li>دکتری بیوشیمی و متابولیسم ورزشی از دانشگاه شیراز</li>
            <li>عضو هیات مدیره انجمن تغذیه استان فارس</li>
            <li>مدرس دانشگاه زند شیراز</li>
          </ul>
        </article>
        <div className="w-1/2 overflow-hidden h-[545px] rounded-2xl shadow-md">
          <Image
            src={DocPhoto}
            alt="Doctor Information"
            className="w-full h-full object-cover"
            width={5000} 
            height={5000}
          />
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
