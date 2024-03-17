import StoryBox from "../StoryBox ";
import StoryBoxSvg from "/public/svg/StoryBoxSvg.svg"

const FoodStorySection = () => {
    return(
        <section className="flex justify-center items-center m-16 flex-col">
            <div className="flex flex-row gap-1">
                <h3 className="text-3xl font-bold text-[var(--text-important)] justify-center items-center">
                داستان‌های غذایی 
                </h3>
                <h3 className="text-3xl">
                جدید و تازه 
                </h3>
            </div>
            <p className="text-base text-center pt-4 pb-12 w-1/2">
            با دستور العمل های ایجاد شده (و آزمایش شده) توسط تیم داخلی ما از سرآشپزها و متخصصان تغذیه، می توانیم به شما قول بدهیم که تغذیه سالم خوشمزه است!
            </p>
            <StoryBox tittle={"رژیم و فیتنس"} bodyText={"تمام پروتئین مورد نیاز خود را با یک رژیم غذایی گیاهی دریافت کنید"} img={<StoryBoxSvg />} />
        </section>
    )
};
export default FoodStorySection;