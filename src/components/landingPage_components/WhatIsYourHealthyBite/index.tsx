import ListItems from "@/components/ListItems";
import Orange from "/public/svg/oranges.svg";
import PNGwing9 from "/public/svg/pngwing 9.svg";
import LiIcon from "/public/svg/liIcon.svg";

const WhatIsYourHealthyBite = () => {
    return(
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
    )
};
export default WhatIsYourHealthyBite;