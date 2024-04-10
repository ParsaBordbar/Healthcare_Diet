import HeroArt from "/public/svg/pngwing 2.svg";
import Background from "/public/svg/HeroBackground.svg";
import MainButton from "@/components/MainButton";

const Hero = () => {
  return (
    <>
      <div className="lg:z-0 lg:relative flex justify-center items-center bg-[var(--primary)] lg:bg-transparent">
        <Background className="w-full hidden lg:flex"/>
        <div className="lg:grid xl:grid-cols-9 lg:grid-cols-4 lg:px-10 lg:absolute lg:z-10 lg:mx-10 flex justify-center items-center flex-col">
          <div className="col-span-3 flex justify-start pt-24 lg:ps-28 flex-col items-center">
            <div className="flex lg:items-end items-start flex-col gap-11">
              <h2 className="flex flex-row py-2 items-center text-5xl gap-4">
                <div className="flex flex-col justify-center items-baseline gap-4">
                  <p className="text-[var(--text-important)] font-bold text-7xl">
                    سالم
                  </p>
                  <p>ساده شد!</p>
                </div>
                <p className="pb-10">زندگی کردن،</p>
              </h2>
              <p className="text-xl lg:ps-9">
                برنامه شخصی سازشده خود را دریافت کنید،متخصصین ما در هر مرحله با
                شما!
              </p>
              <MainButton
                standard
                className="text-2xl px-20 py-3"
                value="ثبت نام کنید"
              />
            </div>
          </div>

          <div className="xl:col-span-6 col-span-4 justify-center flex-col items-center mt-11 scale-95 flex">
            <HeroArt className="hidden md:flex w-full"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
