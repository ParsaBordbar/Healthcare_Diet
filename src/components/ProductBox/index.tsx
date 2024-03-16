import { FunctionComponent } from "react";
import Rating from "../Rating";
import ProteinWhey from "/public/svg/Rectangle 27.svg";

type TProduct = {
  img: FunctionComponent;
  title: string;
  desc: string;
};

const ProductBox = (props: TProduct) => {
  return (
    <div className="bg-white shadow-xl drop-shadow-lg flex justify-between rounded-3xl px-10 py-4">
      <props.img />
      <div className="flex justify-between items-end flex-col py-[2.125rem] pr-12 border-r  border-[var(--border-color)]">
        <section className="flex gap-4 flex-col ">
          <h1 className="text-2xl">{props.title}</h1>
          <p className="text-xl">{props.desc}</p>
        </section>
        <Rating />
      </div>
    </div>
  );
};

export default ProductBox;
