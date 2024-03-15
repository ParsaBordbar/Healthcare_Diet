import HeroButton from "../HeroButton";
import HeroArt from "/public/svg/pngwing 2.svg"
import Styles from "./styles.module.css"
import Background from '/public/svg/HeroBackground.svg'

const Hero = () => {
    return(
        <>
            <div className="z-0 relative flex justify-center items-center w-full">
                <Background className="scale-x-125"/>
                <div className="grid grid-cols-9 px-10 absolute z-10 mx-10">
                <div className="col-span-3 flex justify-start pt-24 ps-28 flex-col items-center">
                    <div className="flex items-end flex-col gap-11">
                        <h2 className="flex flex-row py-2 items-center text-5xl gap-4">
                            <div className="flex flex-col justify-center items-baseline gap-4">
                                <p className="text-[var(--text-important)] font-bold text-7xl">سالم</p>
                                <p>ساده شد!</p>  
                            </div>
                            <p className="pb-10">زندگی کردن،</p>
                        </h2>
                        <p className="text-xl ps-9">
                        برنامه شخصی سازشده خود را دریافت کنید،متخصصین ما در هر مرحله با شما!
                        </p>
                        <HeroButton text="ثبت نام کنید" />
                    </div>
                </div>
    
                <div className="col-span-6 flex justify-center flex-col items-center mt-11">
                    <HeroArt/>
                </div>  
                
            </div>
            </div>
            
        </>
    )
};
export default Hero;