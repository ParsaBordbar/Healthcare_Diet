import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="bg-[#3233F2] text-white py-4 font-[YekanBakh]">
      <div className="container mx-auto flex justify-between">
        {/* First Column - Logo and Social Icons */}
        <div className="flex flex-col items-center text-center">
          <img src="logo-footer.svg" alt="Logo" className="h-24 mb-2" />
          <div className="flex gap-2 mt-2">
            <a href="#" className="text-white">
              <LinkedInIcon />
            </a>
            <a href="#" className="text-white">
              <InstagramIcon />
            </a>
            <a href="#" className="text-white">
              <TelegramIcon />
            </a>
          </div>
        </div>

        {/* Second Column - Quick Access Links */}
        <div className="flex flex-col justify-center items-start text-right">
          <h6 className="font-[YekanBakh] mb-1">دسترسی آسان</h6>
          <p className="font-[YekanBakh]">درباره ما</p>
          <p className="font-[YekanBakh]">مقالات</p>
          <p className="font-[YekanBakh]">تماس با ما</p>
        </div>

        {/* Third Column - Text Content */}
        <div className="flex flex-col justify-center items-start text-right max-w-lg">
          <h6 className="font-[YekanBakh] mb-1 font-bold">
            زندگی سالم با رژیم مدیترانه‌ای: استراتژی‌های دکتر ربیعی
          </h6>
          <p className="font-[YekanBakh] leading-loose">
            در این وبسایت، ما با بهره‌گیری از دانش و تخصص دکتر محمدرضا ربیعی، متخصص تغذیه و سلامتی، به شما کمک می‌کنیم تا به یک زندگی سالم‌تر و بهتر دست یابید. هدف ما ارائه راهکارهای غذایی علمی و مبتنی بر آخرین یافته‌های پزشکی است تا هر فرد بتواند بهترین نتایج را در مسیر تناسب اندام و سلامت عمومی خود کسب کند. ما به شما اطمینان می‌دهیم که با پیروی از راهنمایی‌های دکتر محمدرضا ربیعی، شما قدم‌های موثری در جهت بهبود کیفیت زندگی‌تان خواهید داشت.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
