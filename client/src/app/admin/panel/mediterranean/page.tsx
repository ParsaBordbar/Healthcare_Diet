"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";

const MediterraneanFormsPage = () => {
  const mediterraneanForms = useFetchMediterranean();
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <DocumentIcon className="[&>path]:stroke-black [&>path]:stroke-2" />
        <h1 className="text-3xl">فرم‌های رژیم مدیترانه‌ای:</h1>
      </div>
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
          />
        );
      })}
    </section>
  );
};

export default MediterraneanFormsPage;
