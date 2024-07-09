import BmiFormDiet from "@/components/bmiForms";

const DietPage = () => {
  return (
    <>
      <div className="absolute flex flex-col justify-center lg:justify-end items-center gap-5 w-4/5 lg:w-1/3 top-auto sm:top-[10%]  lg:right-[7.5rem] lg:bg-transparent">
        <BmiFormDiet />
      </div>
    </>
  );
};

export default DietPage;
