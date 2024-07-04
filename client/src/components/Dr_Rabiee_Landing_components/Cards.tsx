import React from "react";
import CustomCard from "./CustomCard";

const cardsData = [
  {
    id: 1,
    title: "پکیج اول رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: "/images/PackageOne.png",
  },
  {
    id: 2,
    title: "پکیج دوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: "/images/PackageTwo.png",
  },
  {
    id: 3,
    title: "پکیج سوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: "/images/PackageThree.png",
  },
];

function CardsSection() {
  return (
    <div className="flex flex-col items-center my-20 bg-[#FEFDF9] overflow-auto relative" dir="rtl">
      <div className="container mt-10">
        <h1 className="text-4xl font-extrabold text-[#3A3A97] text-center mb-3">
          برنامه های سلامتی
        </h1>
        <p className="text-lg text-black text-center mb-1">
          شما می توانید برنامه های رژیمی مختلف را مشاهده کرده و خریداری نمایید.
        </p>
        <div className="flex justify-center gap-4 mb-20">
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
      
    </div>
  );
}

export default CardsSection;
