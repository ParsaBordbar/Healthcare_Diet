import LogoSvg from "/public/svg/Logo.svg";
import ListItems from "@/components/ListItems";
import LineSvg from "/public/svg/NutLiine.svg";
import FaceBookLogo from "/public/svg/facebook.svg";
import InstagramLogo from "/public/svg/instagram.svg";
import TwitterLogo from "/public/svg/twitter.svg";
import PinterestLogo from "/public/svg/pinterest.svg";
import YoutubeLogo from "/public/svg/youtube.svg";
import EmailLogo from "/public/svg/email.svg";

const Footer = () => {
    return(
        <footer className="mt-10 flex flex-col w-full items-center">
        <div className="bg-white py-10">
          <h1 className="md:text-2xl lg:text-2xl text-center sm:text-5xl text-xl px-9 md:px-0 sm:px-10">
            یک سال کامل
            <mark className="bg-transparent text-[var(--text-important)] sm:text-5xl text-xl">
              {" "}
              گاز سلامتی{" "}
            </mark>
            قیمت برابری <br></br>با یک ساعت مشاوره با متخصص تغذیه دارد
          </h1>
        </div>
        <section className="flex w-full gap-14 flex-col bg-[var(--bg-footer-color)] py-12 ">
          <div className="self-center">
            <LogoSvg />
          </div>
          <nav className="flex md:justify-evenly items-center justify-center sm:px-10 sm:gap-2 md:gap-0 md:px-0 sm:flex-row flex-col gap-4">
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="درباره ما" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="خدمات" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="بلاگ ها" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="غذا" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="رسپی ها" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="بررسی ها" />
            <ListItems className="cursor-pointer sm:text-base text-xl" desc="ورود" />
          </nav>
          {/* <div className="self-center">
            <LineSvg />
          </div> */}
          <div className="flex justify-center md:gap-10 sm:p-10 sm:gap-4 flex-wrap gap-x-12 gap-y-3">
            <FaceBookLogo/>
            <InstagramLogo />
            <TwitterLogo />
            <PinterestLogo />
            <YoutubeLogo />
            <EmailLogo />
          </div>
          <p className="text-center sm:text-xl ">
            {" "}
            .2023 Cornea clinic PVT. LTD. All Rights Reserved&copy;
          </p>
        </section>
      </footer>
    )
}

export default Footer