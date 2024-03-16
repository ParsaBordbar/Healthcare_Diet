import ListItems from "@/components/ListItems";
import LiIcon from "/public/svg/liIcon.svg";
import Nutro from "/public/svg/NutroPic.svg"

const Nutritionist = () => {
    return(
        <section className="gird grid-cols-5 justify-start flex-col ">
            <div className="bg-[var(--tittle-box)] w-2/6 rounded-e-3xl gap-6 my-4 col-span-3 py-5">
                <p className="text-4xl text-white ps-32">بهترین</p>
                <h2 className="text-7xl text-white ps-80">متخصص</h2>
            </div>
            <div className="flex justify-center items-center mx-28">
                <div className="flex justify-start items-start flex-col gap-12">
                    <div className="pe-32">
                        <p className="text-lg ">
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