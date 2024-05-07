import { InputHTMLAttributes } from "react";
import { Formik, Field, Form } from "formik";

export type TGroupRadio = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  header: Boolean;
};
const GroupRadio = (props: TGroupRadio) => {
  return (
    <div className="flex flex-col gap-2">
      <section
        className="flex items-center justify-between"
        role="group"
        aria-labelledby="my-radio-group"
      >
        <label>
          <Field {...props} type="radio" value={props.value} />
          {props.value}
        </label>
      </section>
    </div>
  );
};

export default GroupRadio;
