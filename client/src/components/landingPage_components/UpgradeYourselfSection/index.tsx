import ListItems from "@/components/ListItems";
import MainButton from "@/components/MainButton";
import Tick from "/public/svg/tttick.svg";
import BmiForm from "../BmiForm";

const UpgradeYourselfSection = () => {
  return (
    <section className="py-12 my-10 flex justify-center items-center flex-col bg-[var(--upgrade-box)] gap-16">
      <div className="flex flex-col justify-center items-center px-10 md:px-0">
        <p className="md:text-3xl sm:text-xl text-base">روی خودت سرمایه گذاری کن و</p>
        <h3 className="md:text-4xl sm:text-2xl text-xl text-center md:text-right">
          {" "}
          ارتقا بده سلامتی, بدن و اعتماد به نفس‌ت رو
        </h3>
      </div>
      <BmiForm />
      {/* <MainButton gradient className="py-4 md:w-1/6 w-2/5" value={"امروز شروع کنید"} /> */}
      <ul className="flex 2xl:gap-52 xl:gap-12 gap-11 lg:gap-5 mx-8 flex-col lg:flex-row p-8 sm:p-0">
        <ListItems
          icon={Tick}
          desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
        />
        <ListItems
          icon={Tick}
          desc="بدون تعهد - در هر زمان لغو کنید"
        />
        <ListItems
          icon={Tick}
          desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
        />
      </ul>
    </section>
  )
};
export default UpgradeYourselfSection;
