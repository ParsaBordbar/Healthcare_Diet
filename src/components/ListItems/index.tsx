<<<<<<< HEAD
import { TListItems } from "@/types";
=======
import { FunctionComponent } from "react";

type TListItems = {
  icon?: FunctionComponent;
  desc?: string;
  className?: string;
};
>>>>>>> 6dfcff9b00e8e9914881e07cfa10239867063f49

const ListItems = (props: TListItems) => {
  return (
    <li className={`${props.className} text-xl flex items-center`}>
      {props.icon && <props.icon />}
      <p>{props.desc}</p>
    </li>
  );
};

export default ListItems;
