"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import React, { useCallback, useState } from "react";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import { chunkingArray } from "@/hooks/chunkingArray";
import { MediterraneanFormType } from "@/types";
import Pagination from "@/components/Pagination";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function UnvisitedDiets() {
  const mediterraneanForms = useFetchMediterranean("/sort?sort=unVisited");
  const newArray = chunkingArray(mediterraneanForms, 2);
  console.log("medi array", mediterraneanForms);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = newArray.length;

  return (
    <>
      <main>
        <section className="flex items-center gap-2 mb-6">
          <DocumentIcon className="[&>path]:stroke-black " />
          <h1 className="text-xl break-words md:text-2xl lg:text-3xl">
            فرم‌های رژیم مدیترانه‌ای پاسخ داده نشده
          </h1>
        </section>
        {newArray.length > 0 &&
          newArray[currentPage - 1].map((form: MediterraneanFormType) => {
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
                supplements={form.supplements}
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
                appetite={form.appetite}
                physicalActivityHours={form.physicalActivityHours}
                sport={form.sport}
                preferredDrink={form.preferredDrink}
              />
            );
          })}
      </main>
      <div className="mb-6">
        <ResponsivePagination
          linkHref="omit"
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}

export default UnvisitedDiets;
