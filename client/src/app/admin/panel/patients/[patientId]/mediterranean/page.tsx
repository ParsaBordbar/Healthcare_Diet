"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import Pagination from "@/components/Pagination";
import { chunkingArray } from "@/hooks/chunkingArray";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import { MediterraneanFormType } from "@/types";
import { useCallback, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const MediterraneanPatientPage = ({
  params,
}: {
  params: { patientId: string };
}) => {
  const medData = useFetchOneMediterranean(params.patientId).toReversed();
  const newArrayMedi = chunkingArray(medData, 2);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = newArrayMedi.length;

  return (
    <div className="flex flex-col mb-6 gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">رژیم‌ها:</h2>
      {newArrayMedi[currentPage - 1]?.length > 0 ? (
        newArrayMedi[currentPage - 1].map((form: MediterraneanFormType) => {
          console.log(form);
          return (
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
              appetite={form.appetite}
              physicalActivityHours={form.physicalActivityHours}
              sport={form.sport}
              preferredDrink={form.preferredDrink}
            />
          );
        })
      ) : (
        <p className="text-xl text-center">رژیم ندارد</p>
      )}
      <div className="mb-6">
        <ResponsivePagination
          linkHref="omit"
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MediterraneanPatientPage;
