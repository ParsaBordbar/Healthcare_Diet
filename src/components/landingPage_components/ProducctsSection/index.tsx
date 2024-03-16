"use client";
import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import DietProductsBg from "/public/svg/DiietProductsBg.svg";
import ProductBox from "@/components/ProductBox";
import ProteinWhey from "/public/svg/Rectangle 27.svg";
import Nutritionist from "../Nutritionist";
const ProductsSection = () => {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex justify-center">
        <DietProductsBg className="w-full relative z-0" />
        <div className="absolute gap-10 z-10 flex flex-col mt-60">
          <section className="flex flex-col mx-auto gap-8">
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
                desc="بهترین توصیه را از دکتر تغذیه دریافت کنید"
              />
            </ul>
            <ProductBox
              desc="وزن : 1.7kg"
              img={ProteinWhey}
              title="اسم سخت یک داروی مرتبط و 
                کاملا واقعی" 
            />
            <Nutritionist/>
          </section>
          {/* <main className="flex gap-7">
            <ProductBox
              desc="وزن : 1.7kg"
              img={ProteinWhey}
              title="اسم سخت یک داروی مرتبط و 
کاملا واقعی"
            />

            <ProductBox
              desc="وزن : 1.7kg"
              img={ProteinWhey}
              title="اسم سخت یک داروی مرتبط و 
کاملا واقعی"
            />
          </main> */}

        </div>
       
      </div>
    </div>
  );
};
export default ProductsSection;
