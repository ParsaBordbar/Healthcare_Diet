import Writer from "@/components/ArticlesComponents/Writer"
import InternalPic from '/public/images/articles/obic1.png'
import ObicPic from '/public/images/articles/obic2.png'
import Image from 'next/image';


const Obesity = () => {
    return(
        <>
            <h1 className="md:text-5xl sm:text-2xl text-xl font-extrabold text-center md:text-right">
                چاقی و بیماری‌ها
            </h1>
            <Writer />
            <Image
                src={InternalPic}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 col-span-3  object-cover"
                width={5000}    
                height={5000}
            />
            <div className="flex flex-col gap-3">
                <p className="text-black md:text-lg text-justify text-sm py-6">
                رسیدن به تناسب اندام نیازمند اصلاح شیوه زندگی است
                و
                اصلاح شیوه­ی زندگی جز با تغذیه مناسب، فعالیت بدنی و دوری از استرس حاصل نمی­شود      
                </p>
                <ul className='md:text-lg text-sm text-justify md:px-10 px-4'>
                    <li className='list-disc text-justify'>شیوع بیما‌ری‌های قلبی-عروقی در افراد چاق در مقایسه با اشخاص دارای وزن طبیعی 5 برابر بیشتر است.</li>
                    <li className='list-disc text-justify'>گزارش شده است 25 تا 35 درصد از سرطان‌های سینه، روده بزرگ و مری به دلیل عدم تحرک و چاقی است.</li>
                    <li className='list-disc text-justify'>علاوه بر این چاقی می‌تواند مشکلات دیگری از جمله بیماری کیسه صفرا و سندروم‌ متابولیک را به‌ وجود آورد.</li>
                </ul>
                
                <p className="text-black md:text-lg text-justify text-sm pt-3">
                شروع سندروم متابولیک دارای علائمی مانند:
                </p>
                <ul className='md:text-lg text-sm text-justify md:px-10 px-4'>
                    <li className='list-disc text-justify'> چاقی به ویژه چاقی شکمی (چاقی سیبی شکل)</li>
                    <li className='list-disc text-justify'>افزایش فشار خون </li>
                    <li className='list-disc text-justify'>کبد چرب</li>
                    <li className='list-disc text-justify'>سطوح افزایش یافته تری-گلیسرید (TG) و سطوح پایین کلسترول خوب (HDL) در خون </li>
                    <li className='list-disc text-justify'> مقاومت به انسولین</li>
                    <li className='list-disc text-justify'>تخمدان پلی کیستیک</li>
                </ul>
                <p className="text-black md:text-lg text-justify text-sm py-6">
                چاقی می تواند نه تنها باعث عوارض جسمی می شود بلکه باعث عوارض روانی و اجتماعی نیز منجر شود ، از جمله عزت نفس پایین و افسردگی 
                غنی بودن رژیم مدیترانه‌ای از ترکیبات فعال زیستی با تاثیرات آنتی­اکسیدان و ضد­التهابی، ممکن است باعث محافظت از سیستم  عصبی شود و آسیب اکسیداتیو و ایسکمی مغزی را کاهش دهد.
                این اثر آنتی­اکسیدانی احتمالا می­تواند در کاهش التهاب و کاهش افسردگی و اضطرابموثر باشد.
                </p>
                <Image
                src={ObicPic}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 col-span-3  object-cover"
                width={5000}    
                height={5000}
            />
            </div>
        </>
    )
}
export default Obesity