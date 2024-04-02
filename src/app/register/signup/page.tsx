import Link from "next/link";
import Social from "@/components/FormRegisters/Login/social";
import FormSignUp from "@/components/FormRegisters/Signup/signup";

const SignUpPage = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center gap-5  w-1/3 top-[9.375rem] right-[7.5rem]">
        <FormSignUp />
        <Link href={"/register/login"} className="text-[var(--text)] text-xl">آیا حساب دارید؟ ثبت نام</Link>
      </div>
    </>
  );
};

export default SignUpPage;
