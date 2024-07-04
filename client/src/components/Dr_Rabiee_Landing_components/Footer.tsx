import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import DrGroupLogo from "/public/images/logo-footer.svg"


const Footer = () => {
  return (
    <div className="bg-[#3233F2] text-white py-4">
      <div className="container mx-2 flex justify-between items-center">

      <div className="flex flex-col justify-center items-start text-right max-w-lg">
          <h6 className="mb-1 font-extrabold text-2xl">
            زندگی سالم با رژیم مدیترانه‌ای: استراتژی‌های دکتر ربیعی
          </h6>
          <p className="leading-loose">
            در این وبسایت، ما با بهره‌گیری از دانش و تخصص دکتر محمدرضا ربیعی، متخصص تغذیه و سلامتی، به شما کمک می‌کنیم تا به یک زندگی سالم‌تر و بهتر دست یابید. هدف ما ارائه راهکارهای غذایی علمی و مبتنی بر آخرین یافته‌های پزشکی است تا هر فرد بتواند بهترین نتایج را در مسیر تناسب اندام و سلامت عمومی خود کسب کند. ما به شما اطمینان می‌دهیم که با پیروی از راهنمایی‌های دکتر محمدرضا ربیعی، شما قدم‌های موثری در جهت بهبود کیفیت زندگی‌تان خواهید داشت.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start text-right">
          <h6 className=" mb-1">دسترسی آسان</h6>
          <p className="">درباره ما</p>
          <p className="">مقالات</p>
          <p className="">تماس با ما</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <DrGroupLogo />
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
      </div>
    </div>
  );
};

export default Footer;
