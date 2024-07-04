import Logo from "/public/images/logo-nav.svg";
import Link from "next/link";
import InputIcon from "@mui/icons-material/Input";
import MainButton from "../MainButton";

function Header() {
  return (
    <header className="bg-[#FEFDF9] text-[var(--black-blue)] px-[42px] py-0 shadow-md mt-5">
      <div className="flex justify-between items-center h-[64px]">
        {/* Right-side Box containing buttons and the logo */}
        <div className="flex items-center gap-6">
          <Logo />
          <Link href={"/"}>
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"صفحه اصلی"}
            />
          </Link>
          <Link href={"/"}>
            <MainButton
              className="[&>span]:text-sm"
              progress
              value={"بلاگ ها"}
            />
          </Link>
          <Link href={"/"}>
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
