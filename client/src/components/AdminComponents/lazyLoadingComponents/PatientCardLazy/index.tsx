const PatientCardLazy = () => {
  return (
    <div className="flex col-span-full bg-gray-50  px-4 sm:px-8 gap-8 py-4 rounded-lg shadow-md ">
    
        <div className="flex flex-col gap-4 w-full animate-pulse">
          <div className="flex justify-start items-center pt-2.5 animate-pulse">
          <div className="bg-white rounded-full p-10 animate-pulse"></div>
          <div className="flex flex-col w-full gap-7 ">
            <h2 className="bg-gray-200 w-1/6 h-4 mx-10 mt-1 animate-pulse"></h2>
            <div className="bg-gray-200 w-1/12 h-3 mx-10 mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientCardLazy;
