import ListItems from "@/components/ListItems";
import ImageGridElement1 from "/public/svg/Rectangle 4.svg";
import ImageGridElement2 from "/public/svg/Rectangle 6.svg";
import ImageGridElement3 from "/public/svg/Rectangle 7.svg";
import Tick from "/public/svg/tttick.svg";

const WhyHealthySection = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 xl:gap-64 lg:gap-16 gap-9 md:my-14 my-10 grid-cols-2 flex flex-col-reverse px-6">
      <div className="lg:col-span-2 col-span-full flex justify-start items-center flex-col gap-10">
        <h2 className="font-bold lg:text-4xl text-5xl lg:mb-28 mb-8">چرا سالم؟</h2>
        <ul className="flex flex-col gap-12 items-start">
          <ListItems icon={Tick} className="gap-4" desc="ارتقای سلامت فیزیکی" />
          <ListItems icon={Tick} className="gap-4" desc="سلامت روان بهتر" />
          <ListItems icon={Tick} className="gap-4" desc="طاقت پذیری بیشتر" />
          <ListItems icon={Tick} className="gap-4" desc="کنترل وزن" />
          <ListItems
            icon={Tick}
            className="gap-4"
            desc="ارتقای اعتماد به نفس"
          />
          <ListItems icon={Tick} className="gap-4" desc="کاهش استرس" />
        </ul>
      </div>
      <div className="lg:col-span-3 col-span-full grid grid-cols-2 scale-90 md:scale-100">
        <div className="col-span-1 flex justify-end items-end m-2">
          <ImageGridElement2 />
        </div>
        <div className="col-span-1 flex justify-end items-end m-2">
          <ImageGridElement1 />
        </div>
        <div className="col-span-2 flex justify-end items-end m-2">
          <ImageGridElement3 />
        </div>
      </div>
    </div>
  );
};
export default WhyHealthySection;
