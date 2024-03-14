'use client'
import NavElement from "../NavElement";
import Logo from "/public/svg/logo.svg"

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center flex-row m-11">
            {/* <Logo /> */}
            <ul className="flex justify-between items-center flex-row gap-12">
                <li> <NavElement text="خدمات"/> </li>
                <li> <NavElement text="بلاگ‌ها" /> </li>
            </ul>
            {/* <div className="flex flex-row gap-2 justify-center items-center">
                <LoginButton />
                <LoginButton />
            </div> */}
        </nav>
    )
};
export default Navbar;