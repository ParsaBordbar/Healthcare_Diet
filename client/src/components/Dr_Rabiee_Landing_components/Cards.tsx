import React from "react";
import CustomCard from "./CustomCard";

const cardsData = [
  {
    id: 1,
    title: "پکیج اول رژیم",
    oldPrice: "۲۵۰.۰۰۰ تومان", 
    newPrice: "۲۵۰.۰۰۰ تومان", 
    imageUrl: "/images/PackageOne.png",
  },
  {
    id: 2,
    title: "پکیج دوم رژیم",
    oldPrice: "۲۵۰.۰۰۰ تومان", 
    newPrice: "۲۵۰.۰۰۰ تومان",     
    imageUrl: "/images/PackageTwo.png",
  },
  {
    id: 3,
    title: "پکیج سوم رژیم",
    oldPrice: "۲۵۰.۰۰۰ تومان", 
    newPrice: "۲۵۰.۰۰۰ تومان",     
    imageUrl: "/images/PackageThree.png",
  },
];

function CardsSection() {
  return (
    <div className="flex flex-col items-center justify-center lg:bg-Card-bg overflow-auto relative bg-none" dir="rtl">
      <div className="container">
        <h1 className="md:text-4xl text-xl font-extrabold text-[#3A3A97] text-center mb-3">
          برنامه های سلامتی
        </h1>
        <p className="md:text-lg text-base px-16 md:px-0 text-black text-center mb-1">
          شما می توانید برنامه های رژیمی مختلف را مشاهده کرده و خریداری نمایید.
        </p>
        <div className="flex justify-center items-center gap-4 mb-20">
          <div className="grid md:grid-cols-3 grid-cols-1">
          {cardsData.map((card) => (
            <div key={card.id} className="flex flex-col items-center justify-center">
              <CustomCard
                title={card.title}
                oldPrice={card.oldPrice}
                newPrice={card.newPrice}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default CardsSection;