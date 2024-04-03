import Link from "next/link";
import FormLogin from "@/components/FormRegisters/Login/login";
import Social from "@/components/FormRegisters/Login/social";

const LoginPage = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center gap-5  w-1/3  right-[7.5rem] ">
        <FormLogin type="getCode"/>
      </div>
    </>
  );
};

export default LoginPage;
