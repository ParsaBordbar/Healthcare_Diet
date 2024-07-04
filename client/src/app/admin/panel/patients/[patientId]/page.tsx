"use client";

import Accordion from "@/components/Accordion";
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
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { boolean, number } from "yup";

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
              city={bmiData.city}
              phoneNumber={bmiData.phoneNumber} 
              gender={bmiData.gender} 
            />
            <h2 className='text-3xl mt-8'>فرم BMI:</h2>
            <PatientBmiForm 
              name={bmiData?.name} 
              lastName={bmiData?.lastName}
              city={bmiData?.city} 
              age={bmiData?.age} 
              gender={bmiData?.gender} 
              phoneNumber={params.patientId} 
              bmi={bmiData?.bmi} 
              weight={bmiData?.weight} 
              height={bmiData?.height} 
              abdominalCircumference={bmiData?.abdominalCircumference}
              hipcircumference={bmiData?.hipcircumference}
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

  type typeMediterranealFormDataAccordion = {
    key: string;
    title: string;
    data: ReactNode;
    isOpen: boolean;
  };
  let [accordions, setAccordion] = useState<any[]>([]);
  let [accordionsMassege, setAccordionMassege] = useState<any[]>([]);
  let ArrayOfData: any[] = [];
  let ArrayOfData1: any[] = [];
  let ArrayOfData2: any[] = [];
  let ArrayOfData3: any[] = [];

  commentData.map((comment) => {
    let CommentFormData = (
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
    );
    const ObjectAccordionMassege = {
      key: comment.createdAtJalali,
      title: "پیام ها",
      data: CommentFormData.props,
    };
    ArrayOfData1.push(ObjectAccordionMassege);
  });

  accordionsMassege = useMemo(() => {
    ArrayOfData1.map((Form) => {
      // setAccordion({ ...Form, data: Form.data })
      console.log("render", Form);
      ArrayOfData3.push(Form);
    });
    return ArrayOfData3;
  }, [ArrayOfData]);

  medData.map((form) => {
    let MediterranealFormData = (
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
    );

    console.log(MediterranealFormData.props, "form data");

    const ObjectAccordion = {
      key: form.phoneNumber,
      title: "رژیم مدیترانه ای",
      data: MediterranealFormData.props,
    };

    ArrayOfData.push(ObjectAccordion);
    console.log(ArrayOfData, "after push");
  });
  accordions = useMemo(() => {
    ArrayOfData.map((Form) => {
      // setAccordion({ ...Form, data: Form.data })
      console.log("render", Form);
      ArrayOfData2.push(Form);
    });
    return ArrayOfData2;
  }, [ArrayOfData]);

  const toggleAccordion = (accordionkey: any) => {
    const updatedAccordions = accordions.map((accord: any) => {
      return { ...accord, isOpen: true };
    });
    const updatedAccordionsMassege = accordionsMassege.map((accord: any) => {
      return { ...accord, isOpen: true };
    });
    setAccordionMassege(updatedAccordionsMassege)
    setAccordion(updatedAccordions);
  };

  const renderAccordion = useCallback(() => {
    return ArrayOfData2.map((accordionData) => {
      return (
        <Accordion
          key={accordionData.key}
          title={accordionData.title}
          data={
            <MediterraneanForm
              key={accordionData._id}
              phoneNumber={params.patientId}
              isChecked={accordionData?.isChecked}
              dailyFruit={accordionData.dailyFruit}
              dailyVegetable={accordionData.dailyVegetable}
              Cereals={accordionData.Cereals}
              dailyCereals={accordionData.dailyCereals}
              potatoAndStarchWeekly={accordionData.potatoAndStarchWeekly}
              oliveAndOliveOilDaily={accordionData.oliveAndOliveOilDaily}
              nutsDaily={accordionData.nutsDaily}
              dairyDaily={accordionData.dairyDaily}
              beans={accordionData.beans}
              eggWeekly={accordionData.eggWeekly}
              fishWeekly={accordionData.fishWeekly}
              chickensWeekly={accordionData.chickensWeekly}
              sugarWeekly={accordionData.sugarWeekly}
              alcoholWeekly={accordionData.alcoholWeekly}
              fermentationWeekly={accordionData.fermentationWeekly}
              supplements={accordionData.sugarWeekly}
              physicalActivity={accordionData.physicalActivity}
              diabetes={accordionData.diabetes}
              anemia={accordionData.anemia}
              bloodPressure={accordionData.bloodPressure}
              digestiveProblems={accordionData.digestiveProblems}
              selfSafety={accordionData.selfSafety}
              stroke={accordionData.stroke}
              fattyLiver={accordionData.fattyLiver}
              kidneyProblems={accordionData.kidneyProblems}
              thyroid={accordionData.thyroid}
              cancer={accordionData.cancer}
              Migraine={accordionData.Migraine}
              otherSickness={accordionData.otherSickness}
              medicine={accordionData.medicine}
              createdAtJalali={accordionData.createdAtJalali}
              files={accordionData.files}
              redMeatWeekly={accordionData.redMeatWeekly}
              dietBmi={accordionData.dietBmi}
              payment={accordionData.payment}
              _id={accordionData._id}
            />
          }
          isOpen={accordionData.isOpen}
          toggleAccordion={() => toggleAccordion(accordionData.phoneNumber)}
        />
      );
    });
  }, [ArrayOfData2]);

  const renderAccordionMassege = useCallback(() => {
    return ArrayOfData3.map((accordionData) => {
      console.log(accordionData);
      return (
        <Accordion
          key={accordionData.key}
          title={accordionData.title}
          data={
            <CommentBox
              key={accordionData.data.receiver}
              sender={accordionData.data.sender}
              body={accordionData.data.body}
              receiver={accordionData.data.receiver}
              createdAtJalali={accordionData.data.createdAtJalali}
              isDoctor={true}
              files={accordionData.data.files}
              _id={accordionData.data._id}
            />
          }
          isOpen={accordionData.isOpen}
          toggleAccordion={() => toggleAccordion(accordionData.phoneNumber)}
        />
      );
    });
  }, [ArrayOfData3]);

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
            />
            <h2 className="text-3xl mt-8">فرم BMI:</h2>
            <PatientBmiForm
            className="[&>div]:!flex-row"
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
            <div className="bg-gray-200 h-5 me-6 mt-7 mb-2 w-1/12 animate-pulse"></div>
            <PatientBmiFormLazy />
          </>
        )}

        <h2 className="text-3xl mt-8">رژیم‌ها:</h2>
        {/* {medData ? (
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
        )} */}
        {renderAccordion()}
        <h2 className="text-3xl mt-8">پیام‌های ارسال شده:</h2>
        {renderAccordionMassege()}
        {/* {commentData ? (
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
        )} */}
        <ReplyBox receiver={params.patientId} />
      </section>
    </main>
  );
}

export default PatientId;
