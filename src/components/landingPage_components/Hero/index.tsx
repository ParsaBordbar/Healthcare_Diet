
const Hero = () => {
    return(
        <div className="grid grid-cols-9 m-10">
            <div className="col-span-6 flex justify-center flex-col items-center">
                HeroImage
            </div>
            <div className="col-span-3 flex justify-center flex-col items-center">
                <h2>
                سالم زندگی کردن،
                    ساده شد!
                </h2>
                <p>
                برنامه شخصی سازشده خود را دریافت کنید،متخصصین ما در هر مرحله با شما!
                </p>
                <button>
                ثبت نام کنید
                </button>
            </div>
            
        </div>
    )
};
export default Hero;