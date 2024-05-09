import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";

const MediterraneanFormsPage = () => {
    return(
        <section>
            <h1 className='text-4xl mb-6'>فرم‌های رژیم مدیترانه‌ای:</h1>
            <MediterraneanForm dailyFruit={"parsa"} dailyVegetable={undefined} Cereals={undefined} dailyCereals={undefined} potatoAndStarchWeekly={undefined} oliveAndOliveOilDaily={undefined} nutsDaily={' ko? ni! khhhhhhh'} dairyDaily={undefined} beans={undefined} eggWeekly={undefined} fishWeekly={undefined} chickensWeekly={undefined} sugarWeekly={undefined} alcoholWeekly={undefined} fermentationWeekly={undefined} supplements={undefined} physicalActivity={undefined} diabetes={undefined} anemia={undefined} bloodPressure={undefined} digestiveProblems={undefined} selfSafety={undefined} stroke={undefined} fattyLiver={undefined} kidneyProblems={undefined} thyroid={undefined} cancer={false} Migraine={false} otherSickness={undefined} medicine={undefined} phoneNumber={undefined} />
        </section>
    )
}

export default MediterraneanFormsPage;