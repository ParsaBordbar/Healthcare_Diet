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
        <div className="bg-white py-10 ">
          <h1 className="text-3xl text-center">
            یک سال کامل
            <mark className="bg-transparent text-[var(--text-important)] text-5xl">
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
          <nav className="flex justify-evenly items-center">
            <ListItems className="cursor-pointer" desc="درباره ما" />
            <ListItems className="cursor-pointer" desc="خدمات" />
            <ListItems className="cursor-pointer" desc="بلاگ ها" />
            <ListItems className="cursor-pointer" desc="غذا" />
            <ListItems className="cursor-pointer" desc="رسپی ها" />
            <ListItems className="cursor-pointer" desc="بررسی ها" />
            <ListItems className="cursor-pointer" desc="ورود" />
          </nav>
          <div className="self-center">
            <LineSvg />
          </div>
          <div className="flex justify-center gap-10">
            <FaceBookLogo />
            <InstagramLogo />
            <TwitterLogo />
            <PinterestLogo />
            <YoutubeLogo />
            <EmailLogo />
          </div>
          <p className="text-center text-xl">
            {" "}
            .2023 Cornea clinic PVT. LTD. All Rights Reserved&copy;
          </p>
        </section>
      </footer>
    )
}

export default Footer