import ListItems from "@/components/ListItems";
import MainButton from "@/components/MainButton";
import Tick from "/public/svg/tttick.svg";

const UpgradeYourselfSection = () => {
  return (
    <section className="py-12 my-10 flex justify-center items-center flex-col bg-[var(--upgrade-box)] gap-16">
      <div className="flex flex-col justify-center items-center px-10 md:px-0">
        <p className="md:text-3xl text-xl">روی خودت سرمایه گذاری کن و</p>
        <h3 className="md:text-4xl text-2xl text-center md:text-right">
          {" "}
          ارتقا بده سلامتی, بدن و اعتماد به نفس‌ت رو
        </h3>
      </div>
      <MainButton gradient className="py-4 md:w-1/6 w-2/5" value={"امروز شروع کنید"} />
      <ul className="flex xl:gap-52 gap-11 flex-col lg:flex-row">
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
