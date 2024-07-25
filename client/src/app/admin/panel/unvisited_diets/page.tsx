"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import React from "react";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";

function UnvisitedDiets() {
  const mediterraneanForms = useFetchMediterranean("/sort?sort=unVisited");

  return (
    <main>
      <section className="flex items-center gap-2 mb-6">
        <DocumentIcon className="[&>path]:stroke-black " />
        <h1 className="text-xl break-words md:text-2xl lg:text-3xl">فرم‌های رژیم مدیترانه‌ای پاسخ داده نشده</h1>
      </section>
      {mediterraneanForms.map((form) => {
        return (
          <MediterraneanForm
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
            phoneNumber={form.phoneNumber}
            key={form.phoneNumber}
            isChecked={form.isChecked}
            files={form.files}
            redMeatWeekly={form.redMeatWeekly}
            createdAtJalali={form.createdAtJalali}
            payment={form.payment}
            dietBmi={form.dietBmi}
            foodAllergies={form.foodAllergies} 
            pregnancyWeeks={form.pregnancyWeeks}
            breastfeeding={form.breastfeeding}
            _id={form._id}
            weightBeforePregnancy={form.weightBeforePregnancy}
          />
        );
      })}
    </main>
  );
}

export default UnvisitedDiets;
