import QuestionAndAnswerMediForm from "@/components/QAMediForm";
import { BmiType } from "@/types";
import React from "react";

function DietBmi({
  age,
  height,
  hipcircumference,
  weight,
  bmi,
  abdominalCircumference,
  autoIncrementId,
}: BmiType) {
  return (
    <div className="grid grid-cols-12 pr-6 gap-4">
      <QuestionAndAnswerMediForm
        question={":BMI "}
        className={
          "min-[1000px]:col-span-full justify-center col-span-full gap-1 flex flex-row-reverse text-[var(--black-blue)] w-fit "
        }
        answer={bmi}
      />
      <QuestionAndAnswerMediForm
        question={"سن:"}
        className={
          "min-[1000px]:col-span-2 md:col-span-6 justify-center [&>p]:!text-black text-sm sm:text-base  col-span-full gap-1 flex  w-fit "
        }
        answer={age}
      />
      <QuestionAndAnswerMediForm
        question={"قد:"}
        className={
          "min-[1000px]:col-span-2 md:col-span-6 justify-center [&>p]:!text-black text-sm sm:text-base  col-span-full gap-1 flex w-fit "
        }
        answer={height}
      />
      <QuestionAndAnswerMediForm
        question={"وزن:"}
        className={
          "min-[1000px]:col-span-2 md:col-span-6 justify-center [&>p]:!text-black text-sm sm:text-base  col-span-full gap-1 flex w-fit "
        }
        answer={weight}
      />
      <QuestionAndAnswerMediForm
        question={"دور شکم:"}
        className={
          "min-[1000px]:col-span-2 md:col-span-6 justify-center [&>p]:!text-black text-sm sm:text-base  col-span-full gap-1 flex w-fit "
        }
        answer={abdominalCircumference}
      />
      <QuestionAndAnswerMediForm
        question={"دور باسن:"}
        className={
          "min-[1000px]:col-span-2 md:col-span-6 justify-center [&>p]:!text-black text-sm sm:text-base  col-span-full gap-1 flex w-fit "
        }
        answer={hipcircumference}
      />
    </div>
  );
}
export default DietBmi;
