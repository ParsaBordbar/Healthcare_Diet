import StoryBox from "../StoryBox ";
import StoryBoxSvg from "/public/svg/StoryBoxSvg.svg"

const FoodStorySection = () => {
    return(
        <section className="flex justify-center items-center m-16 flex-col">
            <h3>
            داستان‌های غذایی جدید و تازه
            </h3>
            <p>
            با دستور العمل های ایجاد شده (و آزمایش شده) توسط تیم داخلی ما از سرآشپزها و متخصصان تغذیه، می توانیم به شما قول بدهیم که تغذیه سالم خوشمزه است!
            </p>
            <StoryBox tittle={"رژیم و فیتنس"} bodyText={"تمام پروتئین مورد نیاز خود را با یک رژیم غذایی گیاهی دریافت کنید"} img={<StoryBoxSvg />} />
        </section>
    )
};
export default FoodStorySection;