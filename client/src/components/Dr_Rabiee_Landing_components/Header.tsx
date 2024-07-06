'use client'
import Logo from "/public/images/logo-nav.svg";
import Link from "next/link";
import MainButton from "../MainButton";
import HomeIcon from "/public/svg/Dr_Rabiee_Landing/home.svg";
import AboutUsIcon from "/public/svg/Dr_Rabiee_Landing/aboutUs.svg";
import Blogs from "/public/svg/Dr_Rabiee_Landing/blogs.svg";
import LoginIcon from "/public/svg/Dr_Rabiee_Landing/profile.svg";
import HamburgerNavbar from "../HamburgerMenu";
import DrLogoMobile from "/public/svg/Dr_Rabiee_Landing/mobileNavLogo.svg"

function Header() {
  return (
    <header className="bg-[#FEFDF9] text-[var(--black-blue)] px-[42px] py-0 mt-5">
      <div className="hidden md:flex justify-between items-center h-[64px]">
        
        <div className="flex items-center justify-center gap-6 mt-10">
          <DrLogoMobile className="pe-3"/>

          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <HomeIcon />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"صفحه اصلی"}
            />
          </Link>
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <Blogs />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"بلاگ ها"}
            />
          </Link>
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <AboutUsIcon />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"درباه ما"}
            />
          </Link>
        </div>
        <Link href="/register/login/enterNumber">
          <MainButton
            className="py-2 lg:px-[36px] px-4 lg:[&>span]:text-base md:[&>span]:text-sm mt-10"
            modern
            value={"ورود"}
            iconSrc={LoginIcon}
          />
        </Link>
      </div>

        
      <div className="lg:hidden top-0">
        <HamburgerNavbar
          iconOne={HomeIcon}
          valueOne="صفحه اصلی"
          iconTwo={AboutUsIcon}
          valueTwo="درباه ما"
          iconThree={Blogs}
          valueThree="بلاگ ها"
          // iconFour={LoginIcon}
          linkOne={"/"}
          linkTwo={"/"}
          linkThree="/"
          // valueFour="ورود"
          // linkFour="/register/login/enterNumber"
        />
      </div>
    </header>
  );
}

export default Header;
