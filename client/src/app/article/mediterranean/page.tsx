import Image from 'next/image';
import OilPIc from '/public/images/articleHeaderPic.jpg'
import PyramidPic from '/public/images/articles/py.png'
import MapPic from '/public/images/articles/2.png'
import HeaderPic from '/public/images/articles/header.png'
import PersianDishPic from '/public/images/articles/6.png'
import Writer from '@/components/ArticlesComponents/Writer';


const Article = () => {
    return(
        <>
            <h1 className="md:text-5xl sm:text-2xl text-xl font-extrabold text-center md:text-right">
                رژيم مديترانه اى چيست؟  
            </h1>
            <Writer />
            <Image
                src={HeaderPic}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 col-span-3  object-cover"
                width={5000}    
                height={5000}
            />
            <div className="flex flex-col gap-3">
                <p className="text-black md:text-lg text-justify text-sm py-6">
                امروزه در مطالعات به الگوهای غذایی توجه می شود 
                .یکی از این الگوهای غذایی، الگوی غذایی مدیترانه ای می باشد
                رژیم غذایی مدیترانه‌ای از نوع تغذیه سنتی مردم یونان، اسپانیا، ایتالیا، ترکیه، سوریه و مراكش الهام گرفته شده است.
                اساس این رژیم بر مصرف نسبتاً بالای روغن زیتون، حبوبات، غلات كامل، میوه‌ها و سبزیجات، مصرف متوسط ماهی و محصولات لبنی بخصوص ماست و پنیر، و نیز مصرف بسیار كم گوشت و محصولات گوشتی استوار است.
                </p>
                <Image
                    src={MapPic}
                    alt="What's Mediterranean Diet?"
                    className="flex col-start-3 col-span-3  object-cover"
                    width={900}    
                    height={900}
                 />
                <p className="text-black md:text-lg text-justify text-sm py-6">
                در بین کشورهای مختلف حوزه مدیترانه، به دلیل تنوع قومی، فرهنگی، اقتصادی و مذهبی، تفاوت­هایی در رژیم غذایی این کشور­ها وجود دارد و همچنین تعریف یکنواختی از رژیم غذایی مدیترانه‌ای در مطالعات منتشر شده وجود ندارد. 
                با این حال، اصول کلی رژیم مدیترانه‌ای که علاوه بر فعالیت بدنی منظم، اجزای اصلی این نوع الگوی زندگی، و نسبت و اولویت مصرف مواد غذایی را شامل می­شود، در هرم رژیم غذایی مدیترانه‌ای نشان داده شده است.
                </p>
                <p className="text-black md:text-lg text-justify text-sm py-6">
                    هرم زیر به منظور پیروی از یک رژیم غذایی سالم و متعادل، دستورالعمل‌های روزانه، هفتگی و گاه به گاه رژیم را تعیین می‌کند:
                </p>
                <Image
                    src={PyramidPic}
                    alt="What's Mediterranean Diet?"
                    className="flex col-start-3 col-span-3  object-cover"
                    width={900}    
                    height={900}
                />
                <p className="text-black md:text-lg text-justify text-sm py-6">
                    یکی از اصلی ترین مؤلفه­‌های تقویت کننده سلامتی این رژیم زیتون و روغن زیتون است.
                    مصرف منظم روغن زیتون ممکن است باعث کاهش مرگ و میر و خطر ابتلا به سرطان، CVD، بازسازی اعصاب، عصب زایی و کاهش چندین بیماری مزمن دیگر شود. 
                </p>
                <Image
                    src={OilPIc}
                    alt="What's Mediterranean Diet?"
                    className="flex col-start-3 col-span-3  object-cover"
                    width={900}    
                    height={900}
                />
                <p className="text-black md:text-lg text-justify text-sm">
                نگاهی به الگوی غذایی مدیترانه نشان میدهد الگوی غذایی مدیترانه ای با فرهنگ مردم ایران بیگانه نمی باشد به دلیل شرایط جغرافیایی و آب و هوایی، مواد غذایی نظیر زیتون، روغن زیتون، ماهی و فرآورده های دریایی، میوه ها و سبزیجات در دسترس مردم این منطقه از جهان می باشد.
                </p>
                <p className="text-black text-justify md:text-lg text-sm font-extrabold pt-8">مثال غذای ایرانی:</p>
                <ul className='md:text-lg text-sm text-justify md:px-10 px-4'>
                    <li className='list-disc text-justify'>خورشت قیمه بادمجان (با مرغ) + برنج سبوسدار + سالاد شیرازی با روغن زیتون</li>
                    <li className='list-disc text-justify'>نان سنگگ + تخم مرغ + گوجه فرنگی + زیتون یا روغن زیتون</li>
                    <li className='list-disc text-justify'>خوراک عدسی + روغن زیتون + نان سنگک + فلفل دلمه</li>
                    <li className='list-disc text-justify'>ماهی شوریده + برنج رنگی + ترشی سیر + زیتون</li>
                    <li className='list-disc text-justify'>میرزا قاسمی + روغن زیتون + نان سنگک</li>
                </ul>
                <Image
                    src={PersianDishPic}
                    alt="What's Mediterranean Diet?"
                    className="flex col-start-3 col-span-3 py-4 object-cover"
                    width={900}    
                    height={900}
                />
                <p className="text-black text-justify md:text-lg text-sm font-extrabold pt-3">
                سالاد مدیترانه ای :
                </p>
                <ul className='md:text-lg text-sm text-justify md:px-10 px-2 pb-3'>
                    <li className='list-disc text-justify'>سالاد سزار + روغن زیتون</li>
                    <li className='list-disc text-justify'>سالاد یونانی + روغن زیتون</li>
                    <li className='list-disc text-justify'>سالاد یونانی + روغن زیتون</li>
                </ul>
                <p className="text-black text-justify md:text-lg text-sm py-6">
                    در یک کار آزمایی بالینی مایر و همکاران به بررسی اثر 6 ماهه دو رژیم مدیترانه ای و کم چرب بر شاخص های التهاب و بیماری های قلبی-عروقی پرداختند. نتایج این کارآزمایی نشان داد که
                    رژیم غذایی مدیترانه ای به نسبت رژیم کم چرب سطوح فاکتورهای التهابی کاهش بیشتری داشت 
                </p>
            </div>
        </>
    )
}
export default Article;