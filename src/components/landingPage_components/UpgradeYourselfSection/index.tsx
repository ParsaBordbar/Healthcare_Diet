import ListItems from "@/components/ListItems";
import MainButton from "@/components/MainButton";
import Tick from "/public/svg/tttick.svg";

const UpgradeYourselfSection = () => {
  return (
    <section className="py-12 my-10 flex justify-center items-center flex-col bg-[var(--upgrade-box)] gap-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl">روی خودت سرمایه گذاری کن و</p>
        <h3 className="text-4xl">
          {" "}
          ارتقا بده سلامتی, بدن و اعتماد به نفس‌ت رو
        </h3>
      </div>
      <MainButton gradient className="py-4 w-1/6" value={"امروز شروع کنید"} />
      <ul className="flex gap-52">
        <ListItems
          icon={Tick}
          desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
        />
        <ListItems
          icon={Tick}
          desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
        />
        <ListItems
          icon={Tick}
          desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
        />
      </ul>
    </section>
  );
};
export default UpgradeYourselfSection;
