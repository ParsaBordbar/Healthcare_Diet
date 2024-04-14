import MainButton from "@/components/MainButton";
// import NavElement from "../NavElement";
import LogoSvg from "/public/svg/Logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex px-36  justify-between items-center flex-row p-11 bg-[var(--primary)]">
      <ul className="flex justify-between items-center flex-row gap-12 ">
        <li>
          <Link href={"./"}>
            <LogoSvg />
          </Link>
        </li>
        <li>
          {" "}
          {/* <NavElement link="./" text="خدمات" />{" "} */}
        </li>
        <li>
          {" "}
          {/* <NavElement link="./" text="بلاگ‌ها" />{""} */}
        </li>
      </ul>
      <div className="flex flex-row gap-12 justify-center items-center">
        <MainButton trasparent className="py-2 px-5 " value={"ثبت نام"} />
        <MainButton simple value={"ورود"} />
      </div>
    </nav>
  );
};
export default Navbar;
