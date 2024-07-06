'use client'
import Link from "next/link";
import MainButton from "../MainButton";
import HomeIcon from "/public/svg/Dr_Rabiee_Landing/home.svg";
import AboutUsIcon from "/public/svg/Dr_Rabiee_Landing/aboutUs.svg";
import Blogs from "/public/svg/Dr_Rabiee_Landing/blogs.svg";
import LoginIcon from "/public/svg/Dr_Rabiee_Landing/profile.svg";
import HamburgerNavbar from "../HamburgerMenu";
import DrLogoMobile from "/public/svg/Dr_Rabiee_Landing/mobileNavLogo.svg"
import userProfile from "/public/svg/Dr_Rabiee_Landing/person.crop.circle.fill.svg";

function Header() {
  const user = localStorage.getItem('user')
  let userPanel = "/register/login/enterNumber"
  if(user){
     userPanel = `/user/${user}/panel`
  }

  return (
    <header className="bg-[#FEFDF9] text-[var(--black-blue)] px-[42px] py-0 mt-5">
      <div className="hidden md:flex justify-between items-center h-[64px]">
        
        <div className="flex items-center justify-center gap-6 mt-10">
          <DrLogoMobile className="xl:pe-3 scale-75 xl:scale-100"/>

          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <HomeIcon />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"صفحه اصلی"}
            />
          </Link>
          <Link href={"#blogs"} className="flex gap-2 items-center justify-center">
            <Blogs />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"بلاگ ها"}
            />
          </Link>
          <Link href={"#info"} className="flex gap-2 items-center justify-center">
            <AboutUsIcon />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"درباه ما"}
            />
          </Link>
        </div>
        {
          !user? (
            <Link href={userPanel}>
              <MainButton
                className="py-2 lg:px-[36px] px-4 lg:[&>span]:text-base md:[&>span]:text-sm mt-10"
                modern
                value={"ورود"}
                iconSrc={LoginIcon}
              />
            </Link>
          ):
          <Link href={userPanel}>
              <MainButton
                className="bg-transparent hover:bg-transparent "
                modern
                iconSrc={userProfile}
              />
          </Link>
        }
      </div>

        
      <div className="lg:hidden top-0">
        <HamburgerNavbar
          iconOne={HomeIcon}
          valueOne="صفحه اصلی"
          iconTwo={AboutUsIcon}
          valueTwo="درباه ما"
          iconThree={Blogs}
          valueThree="بلاگ ها"
          linkOne={"/"}
          linkTwo={"/"}
          linkThree="/"
          isLanding={true}
        />
      </div>
    </header>
  );
}

export default Header;
