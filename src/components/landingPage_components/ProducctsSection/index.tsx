import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import DietProductsBg from "/public/svg/DiietProductsBg.svg";
import Nutritionist from "../Nutritionist";
import NewSlider from "./slider";

const ProductsSection = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="flex justify-center">
        <DietProductsBg className="lg:w-full lg:relative lg:z-0 lg:flex hidden" />
        <div className="lg:absolute gap-10 z-10 flex flex-col mt-60 bg-[var(--primary)] py-10">
          <section className="flex flex-col mx-auto gap-8 justify-center items-center">
            <h1 className="text-center text-3xl sm:text-6xl">
              <mark className="bg-transparent text-[var(--text-important)] sm:text-6xl text-2xl">
                {" "}
                محصولات{" "}
              </mark>
              رژیمی
            </h1>
            <ul className="flex flex-col items-start gap-4 m-10 lg:m-0 text-center lg:text-right">
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
            <NewSlider />
            {/* <div className="flex justify-center items-center my-28 w-full">
              <LineSvg />
            </div> */}
            <Nutritionist />
          </section>
        </div>
      </div>
    </div>
  );
};
export default ProductsSection;
