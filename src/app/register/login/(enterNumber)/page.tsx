import Link from "next/link";
import FormLogin from "@/components/FormRegisters/Login/login";
import Social from "@/components/FormRegisters/Login/social";

const LoginPage = () => {
  return (
    <>
      <div className="absolute  lg:!shadow-none lg:p-0 py-5 px-5 lg:!bg-transparent flex flex-col items-center gap-5 w-4/5 lg:w-1/3  lg:right-[7.5rem]">
        <FormLogin />
        <section className="flex gap-5 w-full flex-col items-center">
          <p className="text-xl text-[var(--text)]">ورود با</p>
          <Social />
          <Link
            href={"/register/signup"}
            className="text-xl mt-5 text-[var(--text)]"
          >
            آیا ثبت نام نکرده اید؟
            <mark className="bg-transparent text-[var(--rating-color)]">
              {" "}
              ثبت نام
            </mark>
          </Link>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
