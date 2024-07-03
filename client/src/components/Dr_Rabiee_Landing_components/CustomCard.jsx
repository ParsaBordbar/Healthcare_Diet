import React from "react";

function CustomCard({ title, description, imageUrl }) {
  return (
    <div className="max-w-xs m-2 bg-[#3531F2] rounded-3xl p-4 text-white">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-full w-full mb-4"
      />
      <div className="text-center">
        <h5 className="text-xl font-[YekanBakhBold] mb-2">{title}</h5>
        <p className="text-base font-[YekanBakh]">{description}</p>
      </div>
    </div>
  );
}

export default CustomCard;
