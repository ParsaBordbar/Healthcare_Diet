import MediIsBetter from '/public/images/articles/7.png'
import MediIsBetter2 from '/public/images/articles/8.png'
import InternalPic from '/public/images/articles/9.png'
import Image from 'next/image';
import Writer from '@/components/ArticlesComponents/Writer';

const ProfessionalArticles = () => {
    return(
        <>
        <h1 className="md:text-5xl sm:text-2xl text-xl font-extrabold text-center md:text-right">
            مقالات تخصصی        
        </h1>
        <Writer />
            <p className="text-black text-justify md:text-lg text-sm py-6">
                در یک کار آزمایی بالینی مایر و همکاران به بررسی اثر 6 ماهه دو رژیم مدیترانه ای و کم چرب بر شاخص های التهاب و بیماری های قلبی-عروقی پرداختند. نتایج این کارآزمایی نشان داد که
                رژیم غذایی مدیترانه ای به نسبت رژیم کم چرب سطوح فاکتورهای التهابی کاهش بیشتری داشت 
            </p>
            <Image
                src={MediIsBetter}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 rounded-lg col-span-3  object-cover"
                width={5000}    
                height={5000}
            />
            <p className="text-black text-justify md:text-lg text-sm py-6">
            همچنین در یک کارآزمایی بالینی ویتاله و همکاران، متشکل از 2568 فرد دیابتی نوع 2، نشان داده شد افرادی که بیشتر از الگوی غذایی مدیترانه ای تبعیت می کنند، میزان پایین تری از پروفایل لیپیدی، هموگلوبین HbA1C و شاخص توده بدنی برخوردار هستند
            </p>
            <Image
                src={MediIsBetter2}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 rounded-lg col-span-3  object-cover"
                width={5000}    
                height={5000}
            />

            <p className="text-black text-justify md:text-lg text-sm py-6">
            در مطالعه ربیعی و همکاران بر روی 47 زن، دارای اضافه وزن و چاق
            8 هفته مداخله رژیم غذایی مدیترانه ای  و فعالیت ورزشی HIIT 
            باعث کاهش توده چربی بدن در گروه ترکیب رژیم غذایی مدیترانه ای و فعالیت ورزشی شد  
            </p>
            <Image
                src={InternalPic}
                alt="What's Mediterranean Diet?"
                className="flex col-start-3 rounded-lg col-span-3  object-cover"
                width={5000}    
                height={5000}
            />
        </>
    )
}
export default ProfessionalArticles;