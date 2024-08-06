import { useMemo } from "react";

type TQuestionAndAnswer = {
  question: string;
  className: string;
  answer: String | [] | undefined | boolean | number | string | any;
};

const QuestionAndAnswerMediForm = ({
  answer,
  question,
  className,
}: TQuestionAndAnswer) => {
  const renderTheAnswer = useMemo(() => {
    console.log(parseInt(answer));
    if (Number.isInteger(answer)) {
      return <p className="text-[var(--black-blue)]  ">{answer}</p>;
    }

    if (answer == true) {
      return <p className="text-[var(--black-blue)]  ">دارد</p>;
    } else if (answer == false) {
      return <p className="text-[var(--black-blue)]  ">ندارد</p>;
    }
    if (Array.isArray(answer) && !Number.isInteger(answer)) {
      answer.map((ans) => {
        return <p className="text-[var(--black-blue)] ">{ans}</p>;
      });
    } else {
      return <p className="text-[var(--black-blue)]  ">{answer}</p>;
    }
  }, []);
  return (
    !!answer && (
      <li className={className}>
        <span className="">{question}</span>
        {renderTheAnswer}
      </li>
    )
  );
};

export default QuestionAndAnswerMediForm;
