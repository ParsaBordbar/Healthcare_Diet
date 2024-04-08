import QuestionMark from "/public/svg/ques mark.svg";
import MainButton from "@/components/MainButton";

const LoginNowBox = () => {
    return(
        <div className="flex xl:1/3 lg:w-2/3 shadow-lg drop-shadow-md py-9 px-14 xl:w-2/5 lg:rounded-3xl bg-[var(--box-bg)] w-full justify-center">
          <section className="w-9/12 flex flex-col justify-between pt-8">
            <p className="lg:text-xl font-normal text-right md:text-xl text-base">
              نمی‌دونید وعده غذایی درست و برنامه غذایی مناسب شما چی هست؟
            </p>
            <MainButton
              standard
              className="py-4 lg:w-2/3 md:w-1/3 w-3/4 mt-6"
              value={"همین حالا ثبت نام کنید"}
            />
          </section>
          <QuestionMark className="scale-75 md:scale-90 lg:scale-100"/>
        </div>
    )
};
export default LoginNowBox;