import MainButton from "@/components/MainButton";
import NavElement from "../NavElement";
import LogoSvg from "/public/svg/Logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex px-36 justify-between items-center flex-row p-11 bg-[var(--primary)]">
      <ul className="lg:flex hidden justify-between items-center flex-row gap-12 ">
        <li>
          <Link href={"/"}>
            <LogoSvg />
          </Link>
        </li>
        <li>
          {" "}
          <NavElement link="/" text="خدمات" />{" "}
        </li>
        <li>
          {" "}
          <NavElement link="/" text="بلاگ‌ها" />{" "}
        </li>
      </ul>
      <div className="lg:flex hidden flex-row gap-12 justify-center items-center">
        <Link href={'/register/signup'}>        
          <MainButton trasparent className="py-2 px-5 " value={"ثبت نام"} />
        </Link>
        <Link href={'/register/login/enterNumber'}>
          <MainButton simple value={"ورود"} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
