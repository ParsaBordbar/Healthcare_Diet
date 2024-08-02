"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import { MediterraneanFormType } from "@/types";
import { useCallback, useState } from "react";

const MediterraneanPatientPage = ({
  params,
}: {
  params: { patientId: string };
}) => {
  const medData = useFetchOneMediterranean(params.patientId).toReversed();
  const [arrayItemsMedi, setArrayItemsMedi] = useState<number>(0);
  let sperateArray: MediterraneanFormType[] = [];

  const chunkingArray = (
    data: MediterraneanFormType[],
    chunk: number,
    functionFetch: any
  ) => {
    let array: MediterraneanFormType[][] = [];
    console.log(
      "this is the data.lnght / chunk",
      Math.floor(data.length / chunk)
    );
    let count = 0;
    if (functionFetch.toReversed().length % 2 == 0) {
      count = functionFetch.toReversed().length / 2 + 1;
    } else {
      count = functionFetch.toReversed().length / 2 + 1;
    }
    console.log("this is count ", count);
    for (let i = 0; i < count; i++) {
      sperateArray = data.splice(0, chunk);
      console.log("sperate array in for loop", sperateArray);
      array.push(sperateArray);
    }
    return array;
  };

  const newArrayMedi = chunkingArray(
    medData,
    4,
    useFetchOneMediterranean(params.patientId)
  );

  const paginationMedi = useCallback(() => {
    return newArrayMedi.map((item, index) => {
      return (
        item.length > 0 &&
        newArrayMedi[1]?.length > 0 && (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              console.log(e.target);
              setArrayItemsMedi(index);
            }}
            className="p-4 hover:underline focus:underline font-medium text-[var(--new-green)] bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] focus:bg-[var(--new-green)] focus:text-[var(--milky-white)] "
          >
            {index + 1}
          </button>
        )
      );
    });
  }, [newArrayMedi]);

  return (
    <div className="flex flex-col mb-6 gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">رژیم‌ها:</h2>
      {newArrayMedi[arrayItemsMedi]?.length > 0 ? (
        newArrayMedi[arrayItemsMedi].map((form) => (
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
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationMedi()}
      </div>
    </div>
  );
};

export default MediterraneanPatientPage;
