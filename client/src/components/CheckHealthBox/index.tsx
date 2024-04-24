import { FunctionComponent } from "react";

export type TCheckHealth = {
  id?: string;
  img: string;
  title: string;
  desc: string;
  datePlan: string;
  name: string;
};
import FatGuy from "/public/svg/Rectangle 17.svg";
const CheckHealthBox = (props: TCheckHealth) => {
  return (
    <div className="flex flex-col-reverse p-6 xl:p-0 xl:flex-row shadow-lg drop-shadow-lg mx-auto w-[97%] xl:w-auto gap-12 xl:gap-0 rounded-[20px] bg-white items-center ">
      <section className="flex xl:px-20 justify-center gap-6  w-full items-center flex-col ">
        <h1 className="md:text-4xl text-3xl text-[var(--rating-color)] font-bold">
          10 کیلوگرم در 3 هفته
        </h1>
        <p className="text-lg text-center xl:text-justify">
          این پلتفرم مانند بهترین اتفاقی است که برای سلامتی من افتاده است. من
          شوکه شده بودم که چگونه هوس هایم بعد از چند روز از بین رفت و نخواستن
          بین وعده های غذایی واقعاً کمکم کرد. از دست دادن 6 کیلوگرم تنها در 3
          هفته فوق العاده است، اما بهترین بخش بهبود سلامتی است.
        </p>
        <section className="flex flex-col gap-1 items-center">
          <p className="font-bold  text-2xl  xl:text-2xl min-[1481px]:text-4xl text-center">
            Anshuman Khuranna
          </p>
          <p className="text-base md:text-lg">
            برنامه غذایی 3 هفته ای کاهش وزن
          </p>
        </section>
      </section>
      {/* <props.img /> */}
      {/* <FatGuy className="rounded-2xl xl:rounded-none xl:rounded-l-2xl [&_path]:rounded-2xl w-3/4 lg:w-[85%] xl:[&_path]:rounded-none lg:[&_path]:rounded-2xl" /> */}
      <img
        className="xl:w-2/4 lg:w-3/4 w-10/12 rounded-2xl xl:rounded-l-2xl"
        src={"/svg/Rectangle 17.svg"}
        width={100}
        alt=""
      />
    </div>
  );
};

export default CheckHealthBox;
