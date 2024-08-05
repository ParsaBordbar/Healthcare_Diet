"use client";

import { useCallback } from "react";

type TPagination = {
  arr: any;
  itemNumber: number;
  setItemNumber: any;
  setCalc: any;
  calc: number;
  limitNumber: number;
  lastCalc: number;
};

const Pagination = ({
  arr,
  calc,
  itemNumber,
  setCalc,
  setItemNumber,
  limitNumber,
}: TPagination) => {
  const paginationComment = useCallback(() => {
    return arr.map((item: any, index: number) => {
      if (
        item.length > 0 &&
        arr[1]?.length > 0 &&
        arr.length - 1 <= limitNumber
      ) {
        return (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              console.log(e.target);
              setItemNumber(index);
            }}
            className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
              itemNumber + 1 == index + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } `}
          >
            {index + 1}
          </button>
        );
      } else if (
        arr.length - 1 >= 30 &&
        index + 1 <= Math.floor((arr.length - 1) / 5) &&
        index + 1 + Math.floor((arr.length - 1) / 5) * calc < arr.length
      ) {
        return (
          <button
            type="button"
            onClick={(e) => {
              console.log(itemNumber > Math.floor((arr.length - 1) / 5));
              if (itemNumber >= Math.floor((arr.length - 1) / 5)) {
                console.log(index, itemNumber);

                setItemNumber(index + Math.floor((arr.length - 1) / 5) * calc);
                // if (
                //   (index + 1) % Math.floor((arr.length - 1) / 5) ==
                //   0
                // ) {
                //   setCalc(calc + 1);
                // }
              } else {
                console.log(index, itemNumber);
                setItemNumber(index + Math.floor((arr.length - 1) / 5) * calc);
              }
            }}
            className={`p-4 hover:underline ${
              index + 1 + Math.floor((arr.length - 1) / 5) * calc ==
                itemNumber + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline "
            } bg-[var(--milky-white)] ${
              index + Math.floor((arr.length - 1) / 5) == itemNumber &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
              itemNumber + 1 == index + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } `}
          >
            {index + 1 + Math.floor((arr.length - 1) / 5) * calc}
          </button>
        );
      }
    });
  }, [arr, itemNumber , calc]);
   
  const renderPageNextPrevious = useCallback(() => {
    return (
      <>
        <button
          type="button"
          onClick={(e) => {
            console.log(e.target);
            setItemNumber(itemNumber - 1);
            if (itemNumber == Math.floor((arr.length - 1) / 5) * calc) {
              setCalc(calc - 1);
            }
            console.log(itemNumber + 1);
          }}
          disabled={itemNumber == 0}
          className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)]`}
        >
          {"قبلی"}
        </button>
        <div
          role="group"
          className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
        >
          {paginationComment()}
        </div>
        {arr.length - 1 == 20 && (
          <>
            <button
              type="button"
              className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)]`}
            >
              {"..."}
            </button>
            <button
              type="button"
              onClick={(e) => {
                console.log(e.target);
                setItemNumber(arr.length - 1);
                setCalc(4);
              }}
              className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
                arr.length - 1 == itemNumber &&
                "bg-[var(--new-green)] text-[var(--milky-white)] underline"
              } `}
            >
              {arr.length - 1}
            </button>
          </>
        )}
        <button
          type="button"
          disabled={itemNumber == arr.length - 1}
          onClick={(e) => {
            setItemNumber(itemNumber + 1);
            console.log("calc", calc);
            if (
              itemNumber ==
              Math.floor((arr.length - 1) / 5) * (calc + 1) - 1
            ) {
              setCalc(calc + 1);
            }
            console.log(itemNumber + 1);
          }}
          className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)]`}
        >
          {"بعدی"}
        </button>
      </>
    );
  }, [arr]);
  return (
    <div
      role="group"
      className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
    >
      {renderPageNextPrevious()}
    </div>
  );
};

export default Pagination;
