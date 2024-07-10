"use client";

import CommentBox from "@/components/AdminComponents/CommentBox";
import PatientBmiFormLazy from "@/components/AdminComponents/lazyLoadingComponents/PatientBmiForm";
import PatientCardLazy from "@/components/AdminComponents/lazyLoadingComponents/PatientCardLazy";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import PatientBmiForm from "@/components/AdminComponents/PatientBmiForm";
import PatientCard from "@/components/AdminComponents/PatientCard";
import ReplyBox from "@/components/AdminComponents/ReplyBox";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import React from "react";

function PatientId({ params }: { params: { patientId: string } }) {
  const bmiData = useSpecificFetchBmi(params.patientId);
  const medData = useFetchOneMediterranean(params.patientId);
  const commentData = useFetchPatientComments(params.patientId);
  console.log(commentData);

  return (
    <main>
      <section className="flex flex-col gap-2">
        {bmiData ? (
          <>
            <PatientCard
              name={bmiData.name}
              lastName={bmiData.lastName}
              phoneNumber={bmiData.phoneNumber}
              gender={bmiData.gender}
              autoIncrementId={bmiData.autoIncrementId} linkTo={""}            />
            <h2 className="text-3xl mt-8">فرم BMI:</h2>
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
              autoIncrementId={bmiData.autoIncrementId} linkTo={""}            />
          </>
        ) : (
          <>
            <PatientCardLazy />
            <div className="bg-gray-200 h-5 me-6 mt-7 mb-2 w-1/12 animate-pulse"></div>
            <PatientBmiFormLazy />
          </>
        )}

        <h2 className="text-3xl mt-8">رژیم‌ها:</h2>
        {medData ? (
          medData.reverse().map((form) => (
            <MediterraneanForm
              key={`${params.patientId} ${form.createdAtJalali}`}
              phoneNumber={params.patientId}
              isChecked={form?.isChecked}
              dailyFruit={form.dailyFruit}
              dailyVegetable={form.dailyVegetable}
              Cereals={form.Cereals}
              dailyCereals={form.dailyCereals}
              potatoAndStarchWeekly={form.potatoAndStarchWeekly}
              oliveAndOliveOilDaily={form.oliveAndOliveOilDaily}
              nutsDaily={form.nutsDaily}
              dairyDaily={form.dairyDaily}
              beans={form.beans}
              eggWeekly={form.eggWeekly}
              fishWeekly={form.fishWeekly}
              chickensWeekly={form.chickensWeekly}
              sugarWeekly={form.sugarWeekly}
              alcoholWeekly={form.alcoholWeekly}
              fermentationWeekly={form.fermentationWeekly}
              supplements={form.sugarWeekly}
              physicalActivity={form.physicalActivity}
              diabetes={form.diabetes}
              anemia={form.anemia}
              bloodPressure={form.bloodPressure}
              digestiveProblems={form.digestiveProblems}
              selfSafety={form.selfSafety}
              stroke={form.stroke}
              fattyLiver={form.fattyLiver}
              kidneyProblems={form.kidneyProblems}
              thyroid={form.thyroid}
              cancer={form.cancer}
              Migraine={form.Migraine}
              otherSickness={form.otherSickness}
              medicine={form.medicine}
              createdAtJalali={form.createdAtJalali}
              files={form.files}
              redMeatWeekly={form.redMeatWeekly}
              dietBmi={form.dietBmi}
              payment={form.payment}
              _id={form._id}
            />
          ))
        ) : (
          <p>رژیم ندارد</p>
        )}
        <h2 className="text-3xl mt-8">پیام‌های ارسال شده:</h2>
        {commentData ? (
          commentData.map((comment) => (
            <CommentBox
              key={comment.receiver}
              sender={comment.sender}
              body={comment.body}
              receiver={comment.receiver}
              createdAtJalali={comment.createdAtJalali}
              isDoctor={true}
              files={comment.files}
              _id={comment._id}
            />
          ))
        ) : (
          <p>هنوز پیامی وجود ندارد</p>
        )}
        <ReplyBox receiver={params.patientId} />
      </section>
    </main>
  );
}

export default PatientId;
