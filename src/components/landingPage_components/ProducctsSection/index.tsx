import ListItems from "@/components/ListItems";
import Tick from "/public/svg/tttick.svg";
import ProteinWhey from "/public/svg/Rectangle 27.svg";

const ProductsSection = () => {
    return(
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
    )
};
export default ProductsSection;