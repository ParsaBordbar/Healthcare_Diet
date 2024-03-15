import Icon1 from "/public/svg/icon1.svg";
import Icon2 from "/public/svg/icon2.svg";
import Icon3 from "/public/svg/icon3.svg";


const PlanBox = () => {
    return(
        <div className="w-5/6 bg-[var(--box-bg)] px-40 py-12 rounded-s-3xl border-4">
            <div className="flex justify-center items-center flex-col ms-32 ">
                <h3 className="text-xl font-bold">
                    برای شما برنامه‌ داریم
                </h3>
                <p>
                    عادات سالم‌تری بسازید با برنامه‌های شخصی سازی شده ما      
                </p>
            </div>
            <hr />
            <ul className="flex flex-row justify-center items-center gap-14 m-3 ">
                <li className="flex justify-center items-center text-xl">
                حفظ وزن
                    <Icon1 />
                </li>
                <li className="flex justify-center items-center text-xl">
                اضافه کردن وزن
                    <Icon2 />
                </li>
                <li className="flex justify-center items-center text-xl">
                کاهش وزن
                    <Icon3 />
                </li>
            </ul>
        </div>
    )
};
export default PlanBox;