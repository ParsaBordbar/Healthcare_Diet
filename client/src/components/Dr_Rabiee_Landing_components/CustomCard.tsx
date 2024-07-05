import React from "react";
import Image from 'next/image';
import { CustomCardType } from "@/types";

function CustomCard({ title, oldPrice, newPrice, imageUrl }:CustomCardType) {
  return (
    <div className="mt-10 flex justify-center flex-col items-center max-w-xs my-6 py-11 mx-2 bg-[var(--soft-blue)] rounded-3xl p-6 text-[var(--black-blue)] border border-transparent hover:ease-in-out delay-100 hover:border-[var(--secondary-blue)] cursor-pointer shadow-md transition-transform ">
      <Image
        src={imageUrl}
        alt={title}
        className="rounded-full mb-4"
        width={120} 
        height={120}
      />
      <div className="text-center">
        <h5 className="text-xl font-extrabold mb-2">{title}</h5>
        <p className="text-sm  my-3 line-through">{oldPrice}</p>
        <p className="font-extrabold my-3">{newPrice} </p>
      </div>
    </div>
  );
}

export default CustomCard;
