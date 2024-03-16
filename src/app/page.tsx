import Hero from "@/components/landingPage_components/Hero";
import Navbar from "@/components/landingPage_components/Navbar";
import PlanBox from "@/components/landingPage_components/PlanBox";
import WhyHealthySection from "@/components/landingPage_components/whyHealthySection";
import Strawberries from "/public/svg/strawberries.svg";
import TextBoxSection from "@/components/landingPage_components/TextBoxSection";
import Orange from "/public/svg/oranges.svg";
import PNGwing9 from "/public/svg/pngwing 9.svg";
import LiIcon from "/public/svg/liIcon.svg";
import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import ProteinWhey from "/public/svg/Rectangle 27.svg";
import LoginNowBox from "@/components/landingPage_components/LoginNowBox";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1">
        <div className="sticky top-0 shadow-sm z-20 col-span-full">
          <Navbar />
        </div>
        <div className="flex bg-[var(--primary)] h-5/6 col-span-full">
          <Hero />
        </div>
        <div className="flex justify-center items-center col-span-full">
          <WhyHealthySection />
        </div>
        <div className="flex items-center my-9 gap-14 justify-end col-span-full">
          <Strawberries className="z-0" />
          <PlanBox />
        </div>
        <div className="col-span-full">
          <TextBoxSection />
        </div>
        <div className="flex items-center justify-center col-span-full">
          <LoginNowBox />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-10/12 gap-24">
            <h1 className="mx-auto text-3xl">
              چه چیزی
              <mark className="bg-transparent text-[var(--text-important)] text-6xl">
                {" "}
                گاز سلامتی{" "}
              </mark>
              شماست
            </h1>
            <section className="flex justify-around w-11/12">
              <PNGwing9 />
              <ul className="flex flex-col gap-9 ">
                <ListItems
                  icon={LiIcon}
                  className="gap-6"
                  desc="نظارت بر رژیم غذایی"
                />
                <ListItems
                  icon={LiIcon}
                  className="gap-6"
                  desc="بهترین پیشنهادات تغذیه"
                />
                <ListItems
                  icon={LiIcon}
                  className="gap-6"
                  desc="پروتال تمرینات"
                />
                <ListItems
                  icon={LiIcon}
                  className="gap-6"
                  desc="برنامه ریز وعده‌های غذایی"
                />
                <ListItems
                  icon={LiIcon}
                  className="gap-6"
                  desc="پایگاه داده‌ای از ریسپی‌ها"
                />
                <ListItems
                  className="gap-6"
                  icon={LiIcon}
                  desc="خرید یک پایانه‌ای محصولات تعذیه‌ای  "
                />
                <ListItems className="gap-6" icon={LiIcon} desc="جامعه" />
              </ul>
            </section>
          </div>
          <Orange />
        </div>
        <div className="w-full py-10 bg-[var(--secondry-color)]">
          <section className="flex w-1/2 flex-col mx-auto gap-8">
            <h1 className="text-center text-3xl">
              <mark className="bg-transparent text-[var(--text-important)] text-6xl">
                {" "}
                محصولات{" "}
              </mark>
              رژیمی
            </h1>
            <ul className="flex self-center flex-col  items-start gap-4">
              <p>
                <mark className="bg-transparent font-bold w-full">
                  گاز سلامتی
                </mark>{" "}
                به شما این امکان را می‌دهد که عرضه محصولات رژیمی خود را از همان
                پلتفرم نیز به راحتی دریافت کنید
              </p>
              <ListItems icon={Tick} desc="در یک رنج بزرگ جستجو کنید" />
              <ListItems
                icon={Tick}
                desc="بهترین توصیه را از دکتر تغذیه دریافت کنید  "
              />
            </ul>
          </section>
          <main>
            <div className="bg-white rounded-lg px-10 py-4">
              <ProteinWhey />
              <section>
                p
              </section>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
