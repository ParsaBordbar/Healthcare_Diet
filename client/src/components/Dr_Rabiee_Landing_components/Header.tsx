import Logo from "/public/images/logo-nav.svg"
import Link from 'next/link'
import InputIcon from "@mui/icons-material/Input";

function Header() {
  return (
    <header className="bg-[#FEFDF9] text-[var(--black-blue)] px-[42px] py-0 mt-5">
      <div className="flex justify-between items-center h-[64px]">

        {/* Right-side Box containing buttons and the logo */}
        <div className="flex items-center gap-4">
          <Logo/>
          <Link
            href={"/"}
            className="mx-2 font-extrabold text-[var(--black-blue)] text-sm hover:text-[#FFA301] transition-colors duration-300 "
          >
            صفحه اصلی
          </Link>
          <Link
            href="#article"
            className="mx-2 font-extrabold text-[var(--black-blue)] text-sm hover:text-[#FFA301] transition-colors duration-300 "
          >
            بلاگ ها
          </Link>
          <Link
            href="#about"
            className="mx-2 font-extrabold text-[var(--black-blue)] text-sm hover:text-[#FFA301] transition-colors duration-300 "
          >
            درباره ما
          </Link>
          
        </div>
        {/* Left-side Button with specific styling */}
        <Link
          href="/register/login/enterNumber"
          className="flex items-center border border-[#FFA301] rounded-[10px] shadow-md px-[36px] py-[8px] text-[var(--black-blue)] font-extrabold hover:bg-[#FFA301] hover:text-white transition-colors duration-300"
        >
          <InputIcon className="ml-2" />
          ورود
        </Link>
      </div>
    </header>
  );
}

export default Header;
