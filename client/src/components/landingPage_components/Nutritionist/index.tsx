import ListItems from "@/components/ListItems";
import LiIcon from "/public/svg/liIcon.svg";
import Nutro from "/public/svg/NutroPic.svg"

const Nutritionist = () => {
    return(
        <section className="lg:gird lg:grid-cols-5 lg:justify-start mt-10 flex flex-col justify-center items-start">
            <div className="flex flex-row items-center">
                <div className="bg-[var(--tittle-box)] rounded-e-3xl gap-6 my-4 col-span-3 py-5 ps-4">
                    <p className="text-4xl text-white md:ps-24">بهترین</p>
                    <h2 className="md:text-7xl text-5xl text-white md:ps-24">متخصص   تغذ  </h2>
                </div>
                <h2 className="md:text-7xl text-5xl text-[var(--tittle-box)] pt-8">یه</h2>
            </div>
            
            <div className="flex justify-center items-center md:mx-28 xl:flex-row flex-col-reverse">
                <div className="flex md:justify-start md:items-start flex-col md:gap-12 justify-center items-center">
                    <div className="xl:me-40 flex mt-8 lg:justify-start lg:items-start text-center xl:text-right ">
                        <p className="md:text-lg text:sm py-8 px-6 ">
                        تیم متخصصین تغذیه ما اینجا هستند تا به شما در دستیابی به اهداف سلامتی و تندرستی خود کمک کنند. متخصصان تغذیه ما متخصصان بسیار آموزش دیده و واجد شرایطی هستند که درک عمیقی از علم تغذیه و چگونگی تأثیر آن بر بدن و ذهن شما دارند.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-5 md:scale-100 scale-90 justify-start ">
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="نظارت بر رژییم غذامتخصص تغذیه در آکادمی تغذیه و رژیم غذایی"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="5+ سال تجربه در این زمینه"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="متخصص در مدیریت وزن، پیشگیری از بیماری های مزمن و تغذیه ورزشی"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="ماهر در  تهیه دستور العمل ها و برنامه های غذایی "
                        />
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="مشتاق برای  کمک به مردم برای داشتن زندگی سالم و رضایت بخش"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="lg:gap-6"
                        desc="متعهد به به روز ماندن با آخرین تحقیقات و روندهای تغذیه"
                        />
                    </ul>
                </div>
                <div className="lg:col-span-2 justify-center hidden md:flex">
                    <Nutro className="scale-50 md:scale-100"/>
                </div>
            </div>
        </section>
    )
};
export default Nutritionist;