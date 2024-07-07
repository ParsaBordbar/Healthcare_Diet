import React from "react";
import Image from 'next/image';
import { CustomCardType } from "@/types";

function CustomCard({ title, oldPrice, newPrice, imageUrl, desc }:CustomCardType) {
  return (
    <div className="mt-10 flex justify-center flex-col items-center max-w-xs mb-6 py-11 mx-2 bg-[var(--soft-blue)] rounded-3xl md:p-6 sm:p-7 p-10 text-[var(--black-blue)] border border-transparent hover:ease-in-out delay-150 hover:border-[var(--secondary-blue)] cursor-pointer shadow-md transition-all col-span-1 ">
      <div className="sm:w-44 flex justify-center items-center md:w-full pb-6">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-full mb-4"
          width={120} 
          height={120}
        />
      </div>
      <div className="text-center flex justify-center items-center flex-col gap-5 w-40 h-40 px-1">
        <h5 className="md:text-2xl font-extrabold sm:text-xl text-2xl mt-5">{title}</h5>
        <p className="md:text-sm font-extrabold sm:text-xl text-sm">{desc}</p>
        <div className="mt-1 flex justify-center items-center flex-col pb-10">
          <p className="md:text-sm line-through sm:text-lg xl:mt-2">{oldPrice}</p>
          <p className="md:text-base font-extrabold sm:text-lg">{newPrice} </p>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
