import ListItems from "@/components/ListItems";
import Orange from "/public/svg/oranges.svg";
import PNGwing9 from "/public/svg/pngwing 9.svg";
import LiIcon from "/public/svg/liIcon.svg";

const WhatIsYourHealthyBite = () => {
    return(
        <div className="flex items-center lg:justify-between justify-center my-10">
          <div className="flex flex-col w-10/12 md:gap-24 my-16">
            <h1 className="lg:mx-auto gap-3 flex justify-center items-center lg:text-6xl md:text-4xl sm:text-xl text-sm">
              چه چیزی
              <mark className="bg-transparent text-[var(--text-important)] lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                {" "}
                گاز سلامتی{" "}
              </mark>
              شماست
            </h1>
            <section className="flex lg:justify-around lg:w-11/12 w-full flex-col justify-center items-center xl:flex-row">
              <PNGwing9 className="2xl:scale-150 md:scale-100 sm:scale-75 scale-50"/>
              <ul className="flex flex-col gap-9 justify-center mt-8">
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
          <Orange className="hidden lg:flex lg:scale-100"/>
        </div>
    )
};
export default WhatIsYourHealthyBite;