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
  const medData = useFetchOneMediterranean(params.patientId).toReversed();
  const commentData = useFetchPatientComments(params.patientId);

  return (
    <main>
      <section className="flex flex-col gap-2">
        {bmiData ? (
          <>
            <PatientCard
              key={bmiData.autoIncrementId}
              name={bmiData.name}
              lastName={bmiData.lastName}
              phoneNumber={bmiData.phoneNumber}
              gender={bmiData.gender}
              autoIncrementId={bmiData.autoIncrementId}
              linkTo={""}
            />
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-8">فرم BMI:</h2>
            <PatientBmiForm
              key={bmiData.autoIncrementId}
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
              autoIncrementId={bmiData.autoIncrementId}
              linkTo={""}
              city={bmiData.city}
              whr={bmiData.whr}
              hipcircumference={bmiData.hipcircumference}
            />
          </>
        ) : (
          <>
            <PatientCardLazy/>
            <div className="bg-gray-200 h-5 me-6 mt-7 mb-2 w-1/12 animate-pulse"></div>
            <PatientBmiFormLazy />
          </>
        )}

        <h2 className="text-xl md:text-2xl lg:text-3xl mt-8">رژیم‌ها:</h2>
        {medData.length > 0 ? (
          medData.map((form) => (
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
              foodAllergies={form.foodAllergies}
              pregnancyWeeks={form.pregnancyWeeks}
              breastfeeding={form.breastfeeding}
              weightBeforePregnancy={form.weightBeforePregnancy}
              createdAtJalali={form.createdAtJalali}
              files={form.files}
              redMeatWeekly={form.redMeatWeekly}
              dietBmi={form.dietBmi}
              payment={form.payment}
              _id={form._id}
            />
          ))
        ) : (
          <p className="text-xl text-center">رژیم ندارد</p>
        )}
        <h2 className="text-xl md:text-2xl lg:text-3xl mt-8">
          پیام‌های ارسال شده:
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {commentData ? (
            commentData.map((comment) => (
              <div className="lg:col-span-1 col-span-full" key={comment._id}>
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
              </div>
            ))
          ) : (
            <p>هنوز پیامی وجود ندارد</p>
          )}
        </div>
        <ReplyBox receiver={params.patientId} />
      </section>
    </main>
  );
}

export default PatientId;
