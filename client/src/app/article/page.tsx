import Header from "@/components/Dr_Rabiee_Landing_components/Header";
import Image from 'next/image';
import HeaderPic from '../../../public/images/articleHeaderPic.jpg'
import DocPhoto from "../../../public/images/dr.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
 
const Article = () => {
    return(
        <main className="grid grid-cols-7 gap-10">
            <header className="col-span-full mb-8">
                <Header/>
            </header>
            <section className="my-10 flex justify-center flex-col xl:col-start-3 xl:col-span-3 col-span-5 col-start-2 gap-8">
                <h1 className="md:text-5xl sm:text-2xl text-xl font-extrabold text-center md:text-right">
                رژيم مديترانه اى چيست؟  
                </h1>
                <div className="flex sm:flex-row flex-col md:justify-between md:items-center">
                    <div className="flex flex-row lg:gap-4 gap-2 items-center justify-start py-4 ">
                        <Image
                            src={DocPhoto}
                            alt="Doctor Information"
                            className="rounded-full md:h-12 md:w-12 w-10 h-10 object-top object-cover"
                            width={200}
                            height={200}
                        />
                            <div>
                                <p className="sm:text-sm text-xs">نویسنده:</p>
                                <h2 className="sm:text-base text-sm">
                                دکتر محمدرضا ربیعی                 
                                </h2>
                            </div>
                    </div>
                    <div className="flex gap-3 lg:mt-8 md:mt-7">
                        <a href="#" className="text-black">
                        <TelegramIcon className="text-4xl" />
                        </a>
                        <a
                        href="https://www.instagram.com/dr_rabieefitnessteam?igsh=YmhrajRzN3g0YWl4"
                        className="text-black"
                        >
                        <InstagramIcon className="text-4xl" />
                        </a>
                        <a href="#" className="text-black">
                        <LinkedInIcon className="text-4xl" />
                        </a>
                    </div>
                </div>
                <Image
                src={HeaderPic}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 col-span-3  object-cover"
                width={5000}    
                height={5000}
                />
                <div className="flex flex-col gap-3">
                    <p className="text-black md:text-lg text-justify text-sm">
                    رژيم مديترانه اى يک الگوى غذايى است كه مواد غذايى گياهى از جمله سبزيجات، ميوه ها، غلات كامل، حبوبات و مغزها بيشترين نقش را در ان دارند، دراين رژیم پروتئین از ماهى و ماكيان، و چربى هاى سالم از روغن زيتون فراهم ميشود، در اين الگوى غذایى، گوشت قرمز و شيرينى جات كمترين ميزان مصرف را دارند و خيلى كم مصرف مى شوند
                    چكونه از الگوى غذايى مديترانه اى پيروى كنيم؟
                    </p>
                    <p className="text-black md:text-lg text-justify text-sm">
                    م مصرف زياد رهر روزا، سبزيجات، ميوه ها، غلات كامل، حبوبات و مغزها م مصرف متعادل هفتكى، كوشت ماهى، ماكيان، و تخم مرغ ه كوشت قرمز و شيرينى جات در دفعات كمتر و مقادير كمتر استفاده سوند ه ازروغن زيتون به طور مرتب استفاده كنيد ه ازغناهاى فراورى شده ومصرف شكر زياد خوددارى كنيد
                    اكرتازه ميخواهيد الكوى غذايى مديترانه اى را دنبال كنيد، بهتراست كه با قدم هاى راحت تر شروع كنيدة درهفته اول روغن زيتون تهيه كنيد وآن را جايكزين روغن و كره مصرفى خود كنيد
                    درهفته بعد سعى كنيد در ا وعده غذايى خود از مامى يا غناهاى دريابى استفاده كنيد، همجنين سعي كنيد أ وعده غذايى يدون كوشت دائته باشيد، در ميان وعده هاازغذاهاى سالماز جمله ميوه هاى تازه يا ميوه هاى خشك شده و سيزيجات يا مغزها استفاده كشنيد
                    عذاهاى فرآورى شده وفست فود رااز برنامه غذايـ خود حذف كنيد، براى خيلى از ماها اين مرحله شايد سخت تربائسد ونيازبه يك روش يخت خانكى براى فست فودهاى مورد علاق قاز بيدا لن بيد لا سع زمان بيشترى داشته باشد
                    </p>
                    <p className="text-black md:text-lg text-justify text-sm">
                    بايد اساس تمامى وعده هاي غذايى اين مواد ست ند بم ال باية واساس رزيم مديترانه اي سبزيجا ات ميوه ها غلات كاما ال ا٥ حبوبات و باشند در كنار وعده هاء ٠ صلى سالاد مو سبزيجات داشته باشيد در رزيم مديترانه إي سمت أعظم اين كربوميدرات ﺍز رميود ها )ه ه ر رونا و سبزيجات 2) ة ليوان در روزا تامين مى شود، سبزيجات سته اصلى غذاما ستدو به عنوان غناهاى جانى عدد د تلقى نمى شوند.نان هاى مص رفى بايد سبوس دار باشد واز غلات كامل تهيه شده باشتد
                    لبنيات وتخم مرن رابه ميزان متعادل مصرف كنيد، مصرف متعادل لبنيات فوايد زيادى خواهد داشت،از جمله كامش خطر ديابت سندرم متابوليك،بيمارى هاى قلبى عروقى و جاقى روزانه أ-ض باراز لينيات كم جرب استفاده كنيد
                    دفتر مشاوره تغذيه ورثيم درمانى مهرا شماره تماس 36350342 ا(يـاكام
                    </p>
                </div>
            </section>
        </main>
    )
}
export default Article;