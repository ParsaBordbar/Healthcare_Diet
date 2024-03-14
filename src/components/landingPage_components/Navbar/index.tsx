import LoginButton from "@/components/LoginButton";
import NavElement from "../NavElement";
// import LogoSvg from "/public/svg/Logo.svg"

const Navbar = () => {
    return(
        <nav className="flex top-0 px-36 sticky z-20 justify-between items-center flex-row m-11">
            <div className="flex flex-row gap-12 justify-center items-center">
                <LoginButton />
                <NavElement link="./" text="ورود" />
            </div>
            <ul className="flex justify-between items-center flex-row gap-12">
                <li> <NavElement link="./" text="خدمات"/> </li>
                <li> <NavElement link="./" text="بلاگ‌ها" /> </li>
                <li><NavElement link="./" text="LOGO"/></li>
            </ul>
            {/* <LogoSvg /> */}
        </nav>
    )
};
export default Navbar;