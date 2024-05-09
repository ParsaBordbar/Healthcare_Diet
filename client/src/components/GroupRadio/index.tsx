import { InputHTMLAttributes } from "react";

export type TGroupRadio = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  header: Boolean;
};
const GroupRadio = (props: TGroupRadio) => {
  return (


    <label>
      <input {...props} />
      {props.value}
    </label>
  );
};

export default GroupRadio;
