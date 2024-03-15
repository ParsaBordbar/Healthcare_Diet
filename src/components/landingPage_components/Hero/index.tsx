import HeroButton from "../HeroButton";
import HeroArt from "/public/svg/pngwing 2.svg"

const Hero = () => {
    return(
        <div className="grid grid-cols-9">
            
            <div className="col-span-3 flex justify-start pt-24 ps-28 flex-col items-center gap-9">
                <h2 className="flex flex-row py-2 items-center text-5xl gap-4">
                    <div className="flex flex-col justify-center items-baseline gap-4">
                        <p className="text-[var(--text-important)] font-bold text-7xl">سالم</p>
                        <p>ساده شد!</p>  
                    </div>
                    <p className="pb-10">زندگی کردن،</p>
                </h2>
                <p className="text-xl ps-20">
                برنامه شخصی سازشده خود را دریافت کنید،متخصصین ما در هر مرحله با شما!
                </p>
                <HeroButton text="ثبت نام کنید" />
            </div>

            <div className="col-span-6 flex justify-center flex-col items-center mt-11">
                <HeroArt/>
            </div>  
            
        </div>
    )
};
export default Hero;