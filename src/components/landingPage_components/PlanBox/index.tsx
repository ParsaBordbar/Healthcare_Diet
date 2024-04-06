import Icon1 from "/public/svg/icon1.svg";
import Icon2 from "/public/svg/icon2.svg";
import Icon3 from "/public/svg/icon3.svg";

const PlanBox = () => {
    return(
        <div className="w-full bg-[var(--box-bg)] flex flex-col items-end xl:pe-52 lg:py-12 rounded-s-3xl shadow-2xl lg:pe-28 py-20">
            <div className="flex justify-center items-center flex-col xl:pe-52 pe-11">
                <h3 className="lg:text-2xl font-bold lg:mb-4 text-lg">
                    برای شما برنامه‌ داریم
                </h3>
                <p className="lg:mb-8">
                    عادات سالم‌تری بسازید با برنامه‌های شخصی سازی شده ما      
                </p>
            </div>
            <hr/>
            <ul className="flex flex-row justify-center items-center xl:gap-32 m-3 gap-1">
                <li className="flex justify-center items-center lg:text-xl text-base">
                    <p>حفظ وزن</p>
                    <Icon1 className="scale-75"/>
                </li>
                <li className="flex justify-center items-center lg:text-xl text-base">
                    <p>اضافه کردن وزن</p>
                    <Icon2 className="scale-75"/>
                </li>
                <li className="flex justify-center items-center lg:text-xl text-base">
                    <p>کاهش وزن</p>
                    <Icon3 className="scale-75"/>
                </li>
            </ul>
        </div>
    )
};
export default PlanBox;