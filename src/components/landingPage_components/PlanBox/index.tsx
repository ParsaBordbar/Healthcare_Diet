import Icon1 from "/public/svg/icon1.svg";
import Icon2 from "/public/svg/icon2.svg";
import Icon3 from "/public/svg/icon3.svg";

const PlanBox = () => {
    return(
        <div className="w-5/6 bg-[var(--box-bg)] flex flex-col items-end pe-52 py-12 rounded-s-3xl shadow-2xl` px-16">
            <div className="flex justify-center items-center flex-col pe-32">
                <h3 className="text-2xl font-bold mb-4">
                    برای شما برنامه‌ داریم
                </h3>
                <p className="mb-8">
                    عادات سالم‌تری بسازید با برنامه‌های شخصی سازی شده ما      
                </p>
            </div>
            <hr/>
            <ul className="flex flex-row justify-center items-center gap-14 m-3 ">
                <li className="flex justify-center items-center text-xl">
                    <p>حفظ وزن</p>
                    <Icon1 />
                </li>
                <li className="flex justify-center items-center text-xl">
                    <p>اضافه کردن وزن</p>
                    <Icon2 />
                </li>
                <li className="flex justify-center items-center text-xl">
                    <p>کاهش وزن</p>
                    <Icon3 />
                </li>
            </ul>
        </div>
    )
};
export default PlanBox;