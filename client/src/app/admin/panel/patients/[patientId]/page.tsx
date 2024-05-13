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
        <h1>This is the route {params.patientId}</h1>
        <section>
            <PatientBmiForm name={bmiData?.name || ""} lastName={bmiData?.lastName || ""} age={bmiData?.age || ""} gender={bmiData?.gender} phoneNumber={params.patientId} bmi={bmiData?.bmi || ""} wight={bmiData?.wight} height={bmiData?.height}/>

            {/* <MediterraneanForm dailyFruit={medData.dailyFruit} dailyVegetable={medData.dailyVegetable} Cereals={medData.Cereals} dailyCereals={medData.dailyCereals} potatoAndStarchWeekly={medData.potatoAndStarchWeekly} oliveAndOliveOilDaily={medData.oliveAndOliveOilDaily} nutsDaily={medData.nutsDaily} dairyDaily={medData.dairyDaily} beans={medData.beans} eggWeekly={medData.eggWeekly} fishWeekly={medData.fishWeekly} chickensWeekly={medData.chickensWeekly} sugarWeekly={medData.sugarWeekly} alcoholWeekly={medData.alcoholWeekly} fermentationWeekly={medData.fermentationWeekly} supplements={medData.sugarWeekly} physicalActivity={medData.physicalActivity} diabetes={medData.diabetes} anemia={medData.anemia} bloodPressure={medData.bloodPressure} digestiveProblems={medData.digestiveProblems} selfSafety={medData.selfSafety} stroke={medData.stroke} fattyLiver={medData.fattyLiver} kidneyProblems={medData.kidneyProblems} thyroid={medData.thyroid} cancer={medData.cancer} Migraine={medData.Migraine} otherSickness={medData.otherSickness} medicine={medData.medicine} phoneNumber={params.patientId} isChecked={medData.isChecked} /> */}
            <MediterraneanForm phoneNumber={params.patientId} isChecked={false} />
        </section>
    </main>
  )
}

export default PatientId