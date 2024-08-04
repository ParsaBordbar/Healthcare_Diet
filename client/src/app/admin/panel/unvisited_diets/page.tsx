"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import React, { useCallback, useState } from "react";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import { chunkingArray } from "@/hooks/chunkingArray";
import { MediterraneanFormType } from "@/types";

function UnvisitedDiets() {
  const mediterraneanForms = useFetchMediterranean("/sort?sort=unVisited");
  const [arrayItemsComment, setArrayItemsComment] = useState<number>(0);
  console.log("medi array", mediterraneanForms);

  const paginationComment = useCallback(() => {
    return mediterraneanForms.map((item: any, index: number) => {
      return (
        item.length > 0 &&
        mediterraneanForms[1]?.length > 0 && (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              console.log(e.target);
              setArrayItemsComment(index);
            }}
            className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
              arrayItemsComment + 1 == index + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } `}
          >
            {index + 1}
          </button>
        )
      );
    });
  }, [mediterraneanForms]);

  // const renderMedi = useCallback(() => {
  //   return (
  //     mediterraneanForms.length > 0 &&
  //     mediterraneanForms[arrayItemsComment].map(
  //       (form: MediterraneanFormType) => {
  //         return (
  //           <MediterraneanForm
  //             dailyFruit={form.dailyFruit}
  //             dailyVegetable={form.dailyVegetable}
  //             Cereals={form.Cereals}
  //             dailyCereals={form.dailyCereals}
  //             potatoAndStarchWeekly={form.potatoAndStarchWeekly}
  //             oliveAndOliveOilDaily={form.oliveAndOliveOilDaily}
  //             nutsDaily={form.nutsDaily}
  //             dairyDaily={form.dairyDaily}
  //             beans={form.beans}
  //             eggWeekly={form.eggWeekly}
  //             fishWeekly={form.fishWeekly}
  //             chickensWeekly={form.chickensWeekly}
  //             sugarWeekly={form.sugarWeekly}
  //             alcoholWeekly={form.alcoholWeekly}
  //             fermentationWeekly={form.fermentationWeekly}
  //             supplements={form.sugarWeekly}
  //             physicalActivity={form.physicalActivity}
  //             diabetes={form.diabetes}
  //             anemia={form.anemia}
  //             bloodPressure={form.bloodPressure}
  //             digestiveProblems={form.digestiveProblems}
  //             selfSafety={form.selfSafety}
  //             stroke={form.stroke}
  //             fattyLiver={form.fattyLiver}
  //             kidneyProblems={form.kidneyProblems}
  //             thyroid={form.thyroid}
  //             cancer={form.cancer}
  //             Migraine={form.Migraine}
  //             otherSickness={form.otherSickness}
  //             medicine={form.medicine}
  //             phoneNumber={form.phoneNumber}
  //             key={form.phoneNumber}
  //             isChecked={form.isChecked}
  //             files={form.files}
  //             redMeatWeekly={form.redMeatWeekly}
  //             createdAtJalali={form.createdAtJalali}
  //             payment={form.payment}
  //             dietBmi={form.dietBmi}
  //             foodAllergies={form.foodAllergies}
  //             pregnancyWeeks={form.pregnancyWeeks}
  //             breastfeeding={form.breastfeeding}
  //             _id={form._id}
  //             weightBeforePregnancy={form.weightBeforePregnancy}
  //           />
  //         );
  //       }
  //     )
  //   );
  // }, [arrayItemsComment]);

  return (
    <>
      <main>
        <section className="flex items-center gap-2 mb-6">
          <DocumentIcon className="[&>path]:stroke-black " />
          <h1 className="text-xl break-words md:text-2xl lg:text-3xl">
            فرم‌های رژیم مدیترانه‌ای پاسخ داده نشده
          </h1>
        </section>
        {mediterraneanForms.length > 0 &&
          mediterraneanForms[arrayItemsComment].map(
            (form: MediterraneanFormType) => {
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
            }
          )}
      </main>
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationComment()}
      </div>
    </>
  );
}

export default UnvisitedDiets;
