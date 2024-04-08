import { FunctionComponent } from "react";

type TListItems = {
  icon?: FunctionComponent;
  desc?: string;
  className?: string;
};

const ListItems = (props: TListItems) => {
  return (
    <li className={`${props.className} lg:text-xl flex md:text-2xl text-base`}>
      {props.icon && <props.icon />}
      <p>{props.desc}</p>
    </li>
  );
};

export default ListItems;