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
import React, { useCallback, useMemo, useState } from "react";

function PatientId({ params }: { params: { patientId: string } }) {
  const bmiData = useSpecificFetchBmi(params.patientId);
  const medData = useFetchOneMediterranean(params.patientId);
  const commentData = useFetchPatientComments(params.patientId);

  console.log(commentData);

  const [accordions, setAccordions] = useState<any[]>([]);
  const [accordionsMessage, setAccordionsMessage] = useState<any[]>([]);

  const accordionData = useMemo(() => {
    return medData.map((form) => ({
      key: form.phoneNumber,
      title: "رژیم مدیترانه ای",
      data: form,
      isOpen: false,
    }));
  }, [medData]);

  const accordionMessagesData = useMemo(() => {
    return commentData.map((comment) => ({
      key: comment.createdAtJalali,
      title: "پیام‌ها",
      data: comment,
      isOpen: false,
    }));
  }, [commentData]);

  const toggleAccordion = (accordionKey: string) => {
    setAccordions((prev) =>
      prev.map((accordion) =>
        accordion.key === accordionKey
          ? { ...accordion, isOpen: !accordion.isOpen }
          : accordion
      )
    );
    setAccordionsMessage((prev) =>
      prev.map((accordion) =>
        accordion.key === accordionKey
          ? { ...accordion, isOpen: !accordion.isOpen }
          : accordion
      )
    );
  };

  const renderAccordions = useCallback(() => {
    return accordionData.map((accordionData) => (
      <Accordion
        key={accordionData.key}
        title={accordionData.title}
        data={
          <MediterraneanForm
            {...accordionData.data}
            phoneNumber={params.patientId}
          />
        }
        isOpen={accordionData.isOpen}
        toggleAccordion={() => toggleAccordion(accordionData.key)}
      />
    ));
  }, [accordionData, toggleAccordion, params.patientId]);

  const renderAccordionMessages = useCallback(() => {
    return accordionMessagesData.map((accordionData: any) => (
      <Accordion
        key={accordionData.key}
        title={accordionData.title}
        data={
          <CommentBox
            {...accordionData.data}
            isDoctor={true}
          />
        }
        isOpen={accordionData.isOpen}
        toggleAccordion={() => toggleAccordion(accordionData.key)}
      />
    ));
  }, [accordionMessagesData, toggleAccordion]);

  return (
    <main>
      <section className="flex flex-col gap-2">
        {bmiData ? (
          <>
            <PatientCard
              name={bmiData.name}
              lastName={bmiData.lastName}
              city={bmiData.city}
              phoneNumber={bmiData.phoneNumber}
              gender={bmiData.gender}
              autoIncrementId={bmiData.autoIncrementId}
            />
            <h2 className="text-3xl mt-8">فرم BMI:</h2>
            <PatientBmiForm
              name={bmiData?.name}
              lastName={bmiData?.lastName}
              autoIncrementId={bmiData?.autoIncrementId}
              city={bmiData?.city}
              age={bmiData?.age}
              gender={bmiData?.gender}
              phoneNumber={params.patientId}
              bmi={bmiData?.bmi}
              whr={bmiData?.whr}
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
            <div className="bg-gray-200 h-5 me-6 mt-7 mb-2 w-1/12 animate-pulse"></div>
            <PatientBmiFormLazy />
          </>
        )}

        <h2 className="text-3xl mt-8">رژیم‌ها:</h2>
        {renderAccordions()}

        <h2 className="text-3xl mt-8">پیام‌های ارسال شده:</h2>
        {renderAccordionMessages()}

        <ReplyBox receiver={params.patientId} />
      </section>
    </main>
  );
}

export default PatientId;
