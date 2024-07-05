import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import DrGroupLogo from "/public/images/logo-footer.svg";
import MainButton from "../MainButton";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#3233F2] text-white py-10 ">
      <div className="grid lg:grid-cols-4 grid-cols-5 px-10 gap-10">
        <section className="grid grid-cols-3 lg:col-span-3 col-span-4 gap-4 lg:pr-16">
          <div className="min-[910px]:flex hidden flex-col min-[910px]:col-span-full lg:col-span-2 justify-start ">
            <h6 className="mb-1 font-extrabold text-2xl ">
              زندگی سالم با رژیم مدیترانه‌ای: استراتژی‌های دکتر ربیعی
            </h6>
            <p className=" text-justify w-full">
              در این وبسایت، ما با بهره‌گیری از دانش و تخصص دکتر محمدرضا ربیعی،
              متخصص تغذیه و سلامتی، به شما کمک می‌کنیم تا به یک زندگی سالم‌تر و
              بهتر دست یابید. هدف ما ارائه راهکارهای غذایی علمی و مبتنی بر آخرین
              یافته‌های پزشکی است تا هر فرد بتواند بهترین نتایج را در مسیر تناسب
              اندام و سلامت عمومی خود کسب کند. ما به شما اطمینان می‌دهیم که با
              پیروی از راهنمایی‌های دکتر محمدرضا ربیعی، شما قدم‌های موثری در جهت
              بهبود کیفیت زندگی‌تان خواهید داشت.
            </p>
          </div>
          <form action="" className="flex col-span-full sm:col-span-2 gap-2.5 flex-col min-[910px]:hidden">
            <h1 className="font-bold text-xl">عضویت در سایت</h1>
            <div className="rounded-full w-full flex items-center border border-white">
              <input
                type="text"
                className="bg-transparent outline-none w-2/3 pr-4 py-2 "
                placeholder="شماره همراه خود را وارد کنید"
              />
              <MainButton
                modern
                className="border w-1/3 [&>span]:text-base py-2 !rounded-full border-white"
                value={"دریافت رژيم"}
              />
            </div>
          </form>
          <div className="flex min-[910px]:p-0 pr-5 min-[910px]:flex-row lg:flex-col gap-6 lg:justify-center min-[910px]:justify-between items-center text-right col-span-full lg:col-span-1 ">
            <h6 className="text-xl min-[910px]:inline-block hidden font-extrabold">
              دسترسی آسان
            </h6>
            <ul className="flex lg:flex-col flex-col min-[910px]:flex-row lg:gap-3 gap-2.5 min-[910px]:gap-16  ">
              <li className="text-xl font-extrabold list-disc">درباره ما</li>
              <li className="text-xl font-extrabold list-disc">مقالات</li>
              <li className="text-xl font-extrabold list-disc">تماس با ما</li>
            </ul>
          </div>
        </section>
        <div className="flex flex-col items-center text-center col-span-1 mt-4">
          <DrGroupLogo />
          <div className="flex gap-3 mt-10">
            <a href="#" className="text-white">
              <TelegramIcon className="text-4xl" />
            </a>
            <a href="#" className="text-white">
              <InstagramIcon className="text-4xl" />
            </a>
            <a href="#" className="text-white">
              <LinkedInIcon className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
