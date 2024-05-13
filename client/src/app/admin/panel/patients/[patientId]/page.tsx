'use client'
import MediterraneanForm from '@/components/AdminComponents/MediterraneanForm'
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm'
import useSpecificFetchBmi from '@/hooks/useFetchName/useFetchName'
import useFetchOneMediterranean from '@/hooks/useFetchOneMediterranean'
import React from 'react'

function PatientId({
    params,
}: {
    params: {patientId: string}
}
) {
   const bmiData = useSpecificFetchBmi(params.patientId);
   const medData = useFetchOneMediterranean(params.patientId)
   console.log(medData);
   
  return (
    <main>
        <section className='flex flex-col gap-2'>
            {bmiData?<PatientBmiForm name={bmiData?.name} lastName={bmiData?.lastName} age={bmiData?.age} gender={bmiData?.gender} phoneNumber={params.patientId} bmi={bmiData?.bmi} wight={bmiData?.wight} height={bmiData?.height}/>: <h2 className='flex justify-center items-center'>Loading</h2>}
            <h2 className='text-3xl mt-10'>رژیم‌ها:</h2>
            {(medData)?<MediterraneanForm phoneNumber={params.patientId} isChecked={medData?.isChecked}  dailyFruit={medData.dailyFruit} dailyVegetable={medData.dailyVegetable} Cereals={medData.Cereals} dailyCereals={medData.dailyCereals} potatoAndStarchWeekly={medData.potatoAndStarchWeekly} oliveAndOliveOilDaily={medData.oliveAndOliveOilDaily} nutsDaily={medData.nutsDaily} dairyDaily={medData.dairyDaily} beans={medData.beans} eggWeekly={medData.eggWeekly} fishWeekly={medData.fishWeekly} chickensWeekly={medData.chickensWeekly} sugarWeekly={medData.sugarWeekly} alcoholWeekly={medData.alcoholWeekly} fermentationWeekly={medData.fermentationWeekly} supplements={medData.sugarWeekly} physicalActivity={medData.physicalActivity} diabetes={medData.diabetes} anemia={medData.anemia} bloodPressure={medData.bloodPressure} digestiveProblems={medData.digestiveProblems} selfSafety={medData.selfSafety} stroke={medData.stroke} fattyLiver={medData.fattyLiver} kidneyProblems={medData.kidneyProblems} thyroid={medData.thyroid} cancer={medData.cancer} Migraine={medData.Migraine} otherSickness={medData.otherSickness} medicine={medData.medicine}/>: <h2 className='flex justify-center items-center'>Loading</h2>}
        </section>
    </main>
  )
}

export default PatientId