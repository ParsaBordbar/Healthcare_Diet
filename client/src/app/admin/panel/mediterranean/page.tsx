'use client'
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchMediterranean from '@/hooks/useFetchMediterranean';
import useFetchName from '@/hooks/useFetchName/useFetchName';


const MediterraneanFormsPage = () => {
    const mediterraneanForms = useFetchMediterranean();
    const bmiForms = useFetchName();    

    return(
        <section>
        <h1 className='text-4xl mb-6'>فرم‌های رژیم مدیترانه‌ای:</h1>
        {mediterraneanForms.map(form => {
        return <MediterraneanForm dailyFruit={form.dailyFruit} dailyVegetable={form.dailyVegetable} Cereals={form.Cereals} dailyCereals={form.dailyCereals} potatoAndStarchWeekly={form.potatoAndStarchWeekly} oliveAndOliveOilDaily={form.oliveAndOliveOilDaily} nutsDaily={form.nutsDaily} dairyDaily={form.dairyDaily} beans={form.beans} eggWeekly={form.eggWeekly} fishWeekly={form.fishWeekly} chickensWeekly={form.chickensWeekly} sugarWeekly={form.sugarWeekly} alcoholWeekly={form.alcoholWeekly} fermentationWeekly={form.fermentationWeekly} supplements={form.sugarWeekly} physicalActivity={form.physicalActivity} diabetes={form.diabetes} anemia={form.anemia} bloodPressure={form.bloodPressure} digestiveProblems={form.digestiveProblems} selfSafety={form.selfSafety} stroke={form.stroke} fattyLiver={form.fattyLiver} kidneyProblems={form.kidneyProblems} thyroid={form.thyroid} cancer={form.cancer} Migraine={form.Migraine} otherSickness={form.otherSickness} medicine={form.medicine} phoneNumber={form.phoneNumber} key={1}/>
    })}
        </section>
    )
}

export default MediterraneanFormsPage;