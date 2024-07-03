import React from "react";
import Image from 'next/image';

function CustomCard({ title, description, imageUrl }) {
  return (
    <div className="max-w-xs m-2 bg-[#3531F2] rounded-3xl p-4 text-white">
      <Image
        src={imageUrl}
        alt={title}
        className="rounded-full w-full mb-4"
        width={5000} 
        height={5000}
      />
      <div className="text-center">
        <h5 className="text-2xl font-extrabold mb-2">{title}</h5>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}

export default CustomCard;
