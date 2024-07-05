import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import DrGroupLogo from "/public/images/logo-footer.svg"


const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#3233F2] text-white py-10">
      <div className="container grid grid-cols-4 gap-10">

        <div className="flex flex-col justify-start col-span-2">
          <h6 className="mb-1 font-extrabold text-2xl pb-10 ps-20">
            زندگی سالم با رژیم مدیترانه‌ای: استراتژی‌های دکتر ربیعی
          </h6>
          <p className="text-right px-20">
            در این وبسایت، ما با بهره‌گیری از دانش و تخصص دکتر محمدرضا ربیعی، متخصص تغذیه و سلامتی، به شما کمک می‌کنیم تا به یک زندگی سالم‌تر و بهتر دست یابید. هدف ما ارائه راهکارهای غذایی علمی و مبتنی بر آخرین یافته‌های پزشکی است تا هر فرد بتواند بهترین نتایج را در مسیر تناسب اندام و سلامت عمومی خود کسب کند. ما به شما اطمینان می‌دهیم که با پیروی از راهنمایی‌های دکتر محمدرضا ربیعی، شما قدم‌های موثری در جهت بهبود کیفیت زندگی‌تان خواهید داشت.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-right col-span-1">
          <h6 className="text-xl font-extrabold mb-10">دسترسی آسان</h6>
          <ul className="flex flex-col gap-3">
            <li className="text-xl font-extrabold list-disc">درباره ما</li>
            <li className="text-xl font-extrabold list-disc">مقالات</li>
            <li className="text-xl font-extrabold list-disc">تماس با ما</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center col-span-1 mt-4">
          <DrGroupLogo />
          <div className="flex gap-3 mt-10">
            <a href="#" className="text-white">
              <TelegramIcon className="text-4xl"/>
            </a>
            <a href="#" className="text-white">
              <InstagramIcon className="text-4xl"/>
            </a>
            <a href="#" className="text-white">
              <LinkedInIcon className="text-4xl"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
