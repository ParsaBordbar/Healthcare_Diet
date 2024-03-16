import QuestionMark from "/public/svg/ques mark.svg";
import MainButton from "@/components/LoginButton";

const LoginNowBox = () => {
    return(
        <div className="flex w-1/3 shadow-lg drop-shadow-md mx-auto py-9 px-14 rounded-3xl bg-[var(--box-bg)] justify-between">
          <section className="w-9/12 flex flex-col justify-between">
            <p className="text-xl font-normal text-right">
              نمی‌دونید وعده غذایی درست و برنامه غذایی مناسب شما چی هست؟
            </p>
            <MainButton
              standard
              className="py-4 w-2/3"
              value={"همین حالا ثبت نام کنید"}
            />
          </section>
          <QuestionMark />
        </div>
    )
};
export default LoginNowBox;