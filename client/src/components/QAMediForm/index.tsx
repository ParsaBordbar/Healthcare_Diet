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
    if (typeof answer == "boolean") {
      if (answer) {
        return <p className="text-[var(--black-blue)]">دارد</p>;
      } else if (!answer) {
        return <p className="text-[var(--black-blue)]">ندارد</p>;
      }
    }
    console.log(parseInt(answer));
    if (Number.isInteger(answer)) {
      return <p className="text-[var(--black-blue)]">{answer}</p>;
    }
    
    if (typeof answer == "string") {
      if (Number.isInteger(answer)) {
        return <p className="text-[var(--black-blue)]">{answer}</p>;
      }
      return <p className="text-[var(--black-blue)]">{answer}</p>;
    }
  }, []);
  const renderArray = () => {
    if (Array.isArray(answer)) {
      const finalAnswer = answer.map((items: string) => {
        return <p className="text-[var(--black-blue)]">{items}</p>;
      });
      return finalAnswer;
    }
  };

  return (
    !!answer && (
      <li className={className}>
        <span className="">{question}</span>
        {renderTheAnswer ?? renderArray()}
      </li>
    )
  );
};

export default QuestionAndAnswerMediForm;
