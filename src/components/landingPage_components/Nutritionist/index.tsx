import ListItems from "@/components/ListItems";
import LiIcon from "/public/svg/liIcon.svg";
import Nutro from "/public/svg/NutroPic.svg"

const Nutritionist = () => {
    return(
        <section className="gird grid-cols-5 justify-start flex-col mt-10">
            <div className="flex flex-row items-center">
                <div className="bg-[var(--tittle-box)]  rounded-e-3xl gap-6 my-4 col-span-3 py-5">
                    <p className="text-4xl text-white ps-24">بهترین</p>
                    <h2 className="text-7xl text-white ps-24">متخصص   تغذ  </h2>
                </div>
                <h2 className="text-7xl text-[var(--tittle-box)] pt-8">یه</h2>
            </div>
            
            <div className="flex justify-center items-center mx-28 xl:flex-row flex-col-reverse">
                <div className="flex justify-start items-start flex-col gap-12">
                    <div className="lg:me-40 flex lg:justify-start lg:items-start text-center lg:text-right ">
                        <p className="text-lg">
                        تیم متخصصین تغذیه ما اینجا هستند تا به شما در دستیابی به اهداف سلامتی و تندرستی خود کمک کنند. متخصصان تغذیه ما متخصصان بسیار آموزش دیده و واجد شرایطی هستند که درک عمیقی از علم تغذیه و چگونگی تأثیر آن بر بدن و ذهن شما دارند.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-5">
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="نظارت بر رژییم غذامتخصص تغذیه در آکادمی تغذیه و رژیم غذایی"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="5+ سال تجربه در این زمینه"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="متخصص در مدیریت وزن، پیشگیری از بیماری های مزمن و تغذیه ورزشی"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="ماهر در  تهیه دستور العمل ها و برنامه های غذایی "
                        />
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="مشتاق برای  کمک به مردم برای داشتن زندگی سالم و رضایت بخش"
                        />
                        <ListItems
                        icon={LiIcon}
                        className="gap-6"
                        desc="متعهد به به روز ماندن با آخرین تحقیقات و روندهای تغذیه"
                        />
                    </ul>
                </div>
                <div col-span-2>
                    <Nutro />
                </div>
            </div>
        </section>
    )
};
export default Nutritionist;