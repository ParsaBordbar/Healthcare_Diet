import Logo from "/public/images/logo-nav.svg";
import Link from "next/link";
import InputIcon from "@mui/icons-material/Input";
import MainButton from "../MainButton";
import HomeIcon from "/public/svg/Dr_Rabiee_Landing/home.svg"
import AboutUsICon from "/public/svg/Dr_Rabiee_Landing/aboutUs.svg"
import Blogs from "/public/svg/Dr_Rabiee_Landing/blogs.svg"
import LoginIcon from "/public/svg/Dr_Rabiee_Landing/profile.svg"


function Header() {
  return (
    <header className="bg-[#FEFDF9] text-[var(--black-blue)] px-[42px] py-0 mt-5">
      <div className="flex justify-between items-center h-[64px]">
        {/* Right-side Box containing buttons and the logo */}
        <div className="flex items-center gap-6">
          <Logo />
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <HomeIcon/>
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"صفحه اصلی"}
            />
          </Link>
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <Blogs/>
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"بلاگ ها"}
            />
          </Link>
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <AboutUsICon />
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"درباه ما"}
            />
          </Link>
        </div>
        {/* Left-side Button with specific styling */}
        <Link
          href="/register/login/enterNumber"
        >
          <MainButton className="py-2 px-[36px]" modern value={'ورود'} iconSrc={InputIcon}/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
