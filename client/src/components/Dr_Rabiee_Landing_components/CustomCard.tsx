import React from "react";
import Image from 'next/image';
import { CustomCardType } from "@/types";

function CustomCard({ title, oldPrice, newPrice, imageUrl }:CustomCardType) {
  return (
    <div className="mt-10 flex justify-center flex-col items-center max-w-xs mb-6 py-11 mx-2 bg-[var(--soft-blue)] rounded-3xl p-6 text-[var(--black-blue)] border border-transparent hover:ease-in-out delay-150 hover:border-[var(--secondary-blue)] cursor-pointer shadow-md transition-all col-span-1 ">
      <div className="sm:w-44 flex justify-center items-center md:w-full">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-full mb-4"
          width={120} 
          height={120}
        />
      </div>
      <div className="text-center flex justify-center items-center flex-col gap-2">
        <h5 className="md:text-xl font-extrabold mb-2 text-3xl">{title}</h5>
        <p className="md:text-sm  line-through text-lg mt-2">{oldPrice}</p>
        <p className="md:text-base font-extrabold text-lg">{newPrice} </p>
      </div>
    </div>
  );
}

export default CustomCard;
