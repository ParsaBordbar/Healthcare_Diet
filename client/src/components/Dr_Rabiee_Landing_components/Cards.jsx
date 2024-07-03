import React from "react";
import CustomCard from "./CustomCard";
import PackageOne from "../../../public/images/PackageOne.png";
import PackageTwo from "../../../public/images/PackageTwo.png";
import PackageThree from "../../../public/images/PackageThree.png";

const cardsData = [
  {
    id: 1,
    title: "پکیج اول رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageOne,
  },
  {
    id: 2,
    title: "پکیج دوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageTwo,
  },
  {
    id: 3,
    title: "پکیج سوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageThree,
  },
];

function CardsSection() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#FEFDF9] overflow-auto relative" dir="rtl">
      <div className="container mt-8">
        <h1 className="text-4xl font-extrabold text-[#3A3A97] text-center ">
          برنامه های سلامتی
        </h1>
        <p className="text-lg text-black text-center mb-1">
          شما می توانید برنامه های رژیمی مختلف را مشاهده کرده و خریداری نمایید.
        </p>
        <div className="flex justify-center gap-4">
          {cardsData.map((card) => (
            <div key={card.id} className="flex flex-col items-center">
              <CustomCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-[60px] bg-[#3531F2] text-white px-2 border-t border-white rounded-r-full flex items-center justify-center font-extrabold text-xl">
        <h6 className="text-center">
          به سلامتی خود، با هر لقمه، نزدیک‌تر شوید.
        </h6>
      </div>
    </div>
  );
}

export default CardsSection;
