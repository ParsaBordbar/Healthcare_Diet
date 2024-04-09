import Icon1 from "/public/svg/icon1.svg";
import Icon2 from "/public/svg/icon2.svg";
import Icon3 from "/public/svg/icon3.svg";

const PlanBox = () => {
    return(
        <div className="w-full bg-[var(--box-bg)] flex flex-col md:items-end xl:pe-52 lg:py-12 md:rounded-s-3xl shadow-2xl lg:pe-28 py-16 gap-2">
            <div className="flex justify-center items-center flex-col xl:pe-52 md:pe-11 sm:gap-0 gap-2">
                <h3 className="lg:text-2xl font-bold lg:mb-4 sm:text-lg">
                    برای شما برنامه‌ داریم
                </h3>
                <p className="lg:mb-8 sm:text-base text-sm mb-4 sm:mb-0">
                    عادات سالم‌تری بسازید با برنامه‌های شخصی سازی شده ما      
                </p>
            </div>
            <hr/>
            <ul className="flex sm:flex-row flex-col sm:justify-center sm:items-center items-start px-8 sm:px-0 xl:gap-32 m-3 md:gap-1 sm:gap-0">
                <li className="flex justify-center items-center lg:text-xl md:text-base sm:text-xs sm:flex-row flex-row-reverse">
                    <p>حفظ وزن</p>
                    <Icon1 className="md:scale-75 scale-50"/>
                </li>
                <li className="flex justify-center items-center lg:text-xl md:text-base sm:text-xs sm:flex-row flex-row-reverse">
                    <p>اضافه کردن وزن</p>
                    <Icon2 className="md:scale-75 scale-50"/>
                </li>
                <li className="flex justify-center items-center lg:text-xl md:text-base sm:text-xs sm:flex-row flex-row-reverse">
                    <p>کاهش وزن</p>
                    <Icon3 className="md:scale-75 scale-50"/>
                </li>
            </ul>
        </div>
    )
};
export default PlanBox;