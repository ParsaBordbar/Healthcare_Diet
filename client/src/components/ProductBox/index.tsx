import { FunctionComponent } from "react";
import Rating from "../Rating";
import ProteinWhey from "/public/svg/Rectangle 27.svg";

export type TProduct = {
  id?:any;
  img: FunctionComponent | string;
  title: string;
  desc: string;
};

const ProductBox = (props: TProduct) => {
  return (
    <div className="bg-white shadow-xl drop-shadow-lg flex flex-col md:flex-row md:justify-between justify-center rounded-3xl xl:px-10 py-4 scale-100 w-fit">
      <ProteinWhey className="md:w-2/5 sm:w-3/4 w-[77%]"/>
      {/* <props.img /> */}
      <div className="flex justify-between items-end flex-col py-[2.125rem] xl:pr-12  p-4 border-r px-8 xl:pl-0 border-[var(--border-color)]">
        <section className="flex gap-2 xl:gap-4 flex-col justify-start">
          <h1 className="text-xl md:text-2xl">{props.title}</h1>
          <p className="text-xl">{props.desc}</p>
        </section>
        {/* <Rating/> */}
      </div>
    </div>
  );
};

export default ProductBox;
