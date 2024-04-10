import NewSlider from "./slider";

const FoodStorySection = () => {

  return (
    <section className="flex justify-center items-center m-16 flex-col">
      <div className="flex md:flex-row gap-1 flex-col justify-center items-center">
        <h3 className="sm:text-3xl text-2xl font-bold text-[var(--text-important)] justify-center items-center flex">
          داستان‌های غذایی
        </h3>
        <h3 className="text-3xl">جدید و تازه</h3>
      </div>
      <p className="text-base text-center pt-4 pb-12 md:w-1/2 w-full">
        با دستور العمل های ایجاد شده (و آزمایش شده) توسط تیم داخلی ما از
        سرآشپزها و متخصصان تغذیه، می توانیم به شما قول بدهیم که تغذیه سالم
        خوشمزه است!
      </p>
      <NewSlider/>
    </section>
  );
};
export default FoodStorySection;
