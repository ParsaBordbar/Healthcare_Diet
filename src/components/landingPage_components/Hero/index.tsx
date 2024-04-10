import HeroArt from "/public/svg/pngwing 2.svg";
import Background from "/public/svg/HeroBackground.svg";
import MainButton from "@/components/MainButton";

const Hero = () => {
  return (
    <>
      <div className="lg:z-0 lg:relative flex justify-center items-center bg-[var(--primary)] xl:bg-transparent w-full  pb-10">
        <Background className="w-full hidden xl:flex"/>
        <div className="xl:grid xl:grid-cols-9 lg:grid-cols-4 xl:px-10 xl:absolute xl:z-10 xl:mx-10 flex justify-center items-center flex-col">
          
          <div className="col-span-3 flex justify-center md:justify-start pt-24 lg:ps-16 ps-0 flex-col items-center">
            <div className="flex lg:items-start 
            items-center flex-col justify-center gap-11 ">
              <h2 className="flex flex-row items-center md:text-5xl sm:text-3xl text-2xl xl:text-3xl lg:text-6xl md:ps-0"><mark className="bg-transparent text-[var(--text-important)] lg:text-6xl md:text-5xl sm:text-4xl font-bold text-2xl xl:text-3xl">سالم</mark> {" "}زندگی کردن،
                ساده شد!{" "} 
                </h2>
                <p className="flex justify-center items-center sm:ps-14 ps-6 pe-2 md:ps-0">
                برنامه شخصی سازشده خود را دریافت کنید،متخصصین ما در هر مرحله با شما!
                </p>
              <MainButton
                standard
                className="text-2xl px-20 py-3"
                value="ثبت نام کنید"
              />
            </div>
          </div>

          <div className="xl:col-span-6 col-span-4 justify-center flex-col items-center mt-11 scale-95 flex">
            <HeroArt className="md:flex w-full "/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
