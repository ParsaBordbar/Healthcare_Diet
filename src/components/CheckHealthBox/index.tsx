import { FunctionComponent } from "react";

export type TCheckHealth = {
  id?: string;
  img: string;
  title: string;
  desc: string;
  datePlan: string;
  name: string;
};

const CheckHealthBox = (props: TCheckHealth) => {
  return (
    <div className="flex shadow-lg drop-shadow-lg mx-auto w-full rounded-[20px]  bg-white items-center ">
      <section className="flex  w-full px-20 items-center flex-col gap-12">
        <h1 className="text-4xl text-[var(--rating-color)] font-bold">
          10 کیلوگرم در 3 هفته
        </h1>
        <p className=" text-lg text-justify">
          این پلتفرم مانند بهترین اتفاقی است که برای سلامتی من افتاده است. من
          شوکه شده بودم که چگونه هوس هایم بعد از چند روز از بین رفت و نخواستن
          بین وعده های غذایی واقعاً کمکم کرد. از دست دادن 6 کیلوگرم تنها در 3
          هفته فوق العاده است، اما بهترین بخش بهبود سلامتی است.
        </p>
        <section className="flex flex-col gap-1 items-center">
          <p className="font-bold text-4xl">Anshuman Khuranna</p>
          <p className="text-lg">برنامه غذایی 3 هفته ای کاهش وزن</p>
        </section>
      </section>
      {/* <props.img /> */}
      <img
        className="w-full h-full overflow-hidden bg-cover"
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default CheckHealthBox;
