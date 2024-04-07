import { FunctionComponent } from "react";

type TListItems = {
  icon?: FunctionComponent;
  desc?: string;
  className?: string;
};

const ListItems = (props: TListItems) => {
  return (
    <li className={`${props.className} lg:text-xl flex items-center text-2xl`}>
      {props.icon && <props.icon />}
      <p>{props.desc}</p>
    </li>
  );
};

export default ListItems;
