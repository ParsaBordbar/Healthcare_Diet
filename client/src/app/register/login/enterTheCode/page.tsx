import Link from "next/link";
import FormLogin from "@/components/FormRegisters/Login/login";
import Social from "@/components/FormRegisters/Login/social";
import UserIdentifyForm from "@/components/UserIdentifierForm";

const EnterTheCodePage = () => {
  return (
    <>
      <div className="absolute  lg:!shadow-none lg:p-0 py-5 px-5 lg:!bg-transparent flex flex-col items-center gap-5 w-4/5 lg:w-1/3  lg:right-[7.5rem] ">
        <UserIdentifyForm/>
      </div>
    </>
  );
};

export default EnterTheCodePage;
