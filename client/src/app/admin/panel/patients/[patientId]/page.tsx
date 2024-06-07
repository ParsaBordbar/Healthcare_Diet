'use client';

import CommentBox from '@/components/AdminComponents/CommentBox';
import PatientBmiFormLazy from '@/components/AdminComponents/lazyLoadingComponents/PatientBmiForm';
import PatientCardLazy from '@/components/AdminComponents/lazyLoadingComponents/PatientCardLazy';
import MediterraneanForm from '@/components/AdminComponents/MediterraneanForm';
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm';
import PatientCard from '@/components/AdminComponents/PatientCard';
import ReplyBox from '@/components/AdminComponents/ReplyBox';
import useSpecificFetchBmi from '@/hooks/useFetchName/useFetchName';
import useFetchOneMediterranean from '@/hooks/useFetchOneMediterranean';
import useFetchPatientComments from '@/hooks/useFetchPatientComments/useFetchPatientComments';
import React from 'react';

function PatientId({ params }: { params: { patientId: string } }) {
  const bmiData = useSpecificFetchBmi(params.patientId);
  const medData = useFetchOneMediterranean(params.patientId);
  const commentData = useFetchPatientComments(params.patientId);
  console.log(commentData);
   
  return (
    <main>
      <section className='flex flex-col gap-2'>            
        {bmiData ? (
          <>
            <PatientCard 
              name={bmiData.name} 
              lastName={bmiData.lastName} 
              phoneNumber={bmiData.phoneNumber} 
              gender={bmiData.gender} 
            />
            <h2 className='text-3xl mt-8'>فرم BMI:</h2>
            <PatientBmiForm 
              name={bmiData?.name} 
              lastName={bmiData?.lastName} 
              age={bmiData?.age} 
              gender={bmiData?.gender} 
              phoneNumber={params.patientId} 
              bmi={bmiData?.bmi} 
              weight={bmiData?.weight} 
              height={bmiData?.height} 
              abdominalCircumference={bmiData?.abdominalCircumference}
              joinedAtJalali={bmiData?.joinedAtJalali}
            />
          </>
        ) : (
          <>
            <PatientCardLazy /> 
            <div className='bg-gray-200 h-5 me-6 mt-7 mb-2 w-1/12 animate-pulse'></div>
            <PatientBmiFormLazy />
          </>
        )}

        <h2 className='text-3xl mt-8'>رژیم‌ها:</h2>
        {medData ? (
          <MediterraneanForm 
            phoneNumber={params.patientId} 
            isChecked={medData?.isChecked} 
            dailyFruit={medData.dailyFruit} 
            dailyVegetable={medData.dailyVegetable} 
            Cereals={medData.Cereals} 
            dailyCereals={medData.dailyCereals} 
            potatoAndStarchWeekly={medData.potatoAndStarchWeekly} 
            oliveAndOliveOilDaily={medData.oliveAndOliveOilDaily} 
            nutsDaily={medData.nutsDaily} 
            dairyDaily={medData.dairyDaily} 
            beans={medData.beans} 
            eggWeekly={medData.eggWeekly} 
            fishWeekly={medData.fishWeekly} 
            chickensWeekly={medData.chickensWeekly} 
            sugarWeekly={medData.sugarWeekly} 
            alcoholWeekly={medData.alcoholWeekly} 
            fermentationWeekly={medData.fermentationWeekly} 
            supplements={medData.sugarWeekly} 
            physicalActivity={medData.physicalActivity} 
            diabetes={medData.diabetes} 
            anemia={medData.anemia} 
            bloodPressure={medData.bloodPressure} 
            digestiveProblems={medData.digestiveProblems} 
            selfSafety={medData.selfSafety} 
            stroke={medData.stroke} 
            fattyLiver={medData.fattyLiver} 
            kidneyProblems={medData.kidneyProblems} 
            thyroid={medData.thyroid} 
            cancer={medData.cancer} 
            Migraine={medData.Migraine} 
            otherSickness={medData.otherSickness} 
            medicine={medData.medicine} 
          />
        ) : (
          <h2 className='flex justify-center items-center'>
            <p className='text-3xl flex col-span-full justify-start'>رژیمی ندارد</p>
          </h2>
        )}
        <h2 className='text-3xl mt-8'>پیام‌های ارسال شده:</h2>
        {commentData ? commentData.map((comment) => 
        <CommentBox key={comment.receiver} sender={comment.sender} body={comment.body} receiver={comment.receiver} createdAtJalali={comment.createdAtJalali} isDoctor={true} files={comment.files} /> ) : <p>هنوز پیامی وجود ندارد</p>}
        <ReplyBox receiver={params.patientId} />
      </section>
    </main>
  );
}

export default PatientId;
