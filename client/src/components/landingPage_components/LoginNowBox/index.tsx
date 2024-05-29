import QuestionMark from "/public/svg/ques mark.svg";
import MainButton from "@/components/MainButton";
import Link from "next/link";

const LoginNowBox = () => {
    return(
        <div className="flex xl:1/3 lg:w-2/3 shadow-lg drop-shadow-md py-9 px-14 xl:w-2/5 lg:rounded-3xl bg-[var(--box-bg)] w-full justify-center">
          <section className="w-9/12 flex flex-col justify-between pt-8">
            <p className="lg:text-xl font-normal sm:text-right md:text-xl sm:text-base text-sm">
              نمی‌دونید وعده غذایی درست و برنامه غذایی مناسب شما چی هست؟
            </p>
            <Link href={'register/login/enterNumber'}>
              <MainButton
                standard
                className="py-4 lg:w-2/3 md:w-1/3 sm:w-2/4 w-full mt-6"
                value={"رژیم خود را دریافت کنید"}
              />
            </Link>
            
          </section>
          <QuestionMark className="scale-75 md:scale-90 -ml-8 lg:scale-100"/>
        </div>
    )
};
export default LoginNowBox;