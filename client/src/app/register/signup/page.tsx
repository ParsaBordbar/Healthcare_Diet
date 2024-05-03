import Link from "next/link";
import Social from "@/components/FormRegisters/Login/social";
import FormSignUp from "@/components/FormRegisters/Signup/signup";

const SignUpPage = () => {
  return (
    <>
      <div className="absolute flex flex-col justify-center lg:justify-end items-center gap-5 w-4/5 lg:w-1/3 top-[9.375rem] lg:right-[7.5rem]">
        <FormSignUp />
        <Link href={"/register/login"} className="text-[var(--text)] text-xl">
          آیا حساب دارید؟{" "}
          <mark className="bg-transparent text-[var(--rating-color)]">
            ورود
          </mark>
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
