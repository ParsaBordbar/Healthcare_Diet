"use client";
import PatientCard from "@/components/AdminComponents/PatientCard";
import PatientIcon from "/public/svg/adminPanelSvgs/patients.svg";
import MainInput from "@/components/MainInput";
import SearchIcon from "/public/svg/search-normal.svg";
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg";
import useSearchBmi from "@/hooks/useSearchBmi/useSearchBmi";
import MainButton from "@/components/MainButton";
import { useState, useCallback } from "react";
import { BmiType } from "@/types";

const PatientsPage = () => {
  const {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    maleFilterHandler,
    femaleFilterHandler,
    submitHandler,
  } = useSearchBmi("/bmi/sort");

  const [arrayItemsComment, setArrayItemsComment] = useState<number>(0);

  const paginationComment = useCallback(() => {
    console.log("filter in pagination func", filter);
    return filter.map((item: any, index: number) => {
      return (
        item.length > 0 &&
        Array.isArray(filter[1]) &&
        filter[1]?.length > 0 && (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              setArrayItemsComment(index);
            }}
            className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
              arrayItemsComment + 1 == index + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } `}
          >
            {index + 1}
          </button>
        )
      );
    });
  }, [filter, arrayItemsComment]);

  return (
    <div className="flex flex-col justify-between h-[90vh] ">
      <section className="grid gap-6 grid-cols-6">
        <section className="mb-3 col-span-full flex items-center gap-2">
          <PatientIcon className="[&>path]:stroke-black " />
          <h1 className=" text-xl md:text-2xl lg:text-3xl">بیمارها</h1>
        </section>
        <div className="grid grid-cols-10 gap-8 items-center col-span-full">
          <form
            className="xl:col-span-5 col-span-full"
            action=""
            onSubmit={submitHandler}
          >
            <MainInput
              iconFirst={SearchIcon}
              parentClassName="!w-full "
              type="search"
              placeholder="نام بیمار مورد نظر خود را وارد کنید"
              value={searchValue}
              onChange={handleChange}
            />
          </form>
          <div className="xl:col-span-5 md:gap-0 gap-2 col-span-full grid grid-cols-3 items-center">
            <section className="flex w-fit col-span-full md:col-span-1 items-center ">
              <FilterIcon className="[&>path]:stroke-black" />
              <p className="w-fit text-base">فیلتر کردن براساس:</p>
            </section>
            <section className="col-span-full md:col-span-2 grid grid-cols-4 gap-2 w-full">
              <MainButton
                modern
                className="rounded-lg col-span-2 xl:col-span-1 py-3 px-4 !text-sm"
                value={"قدیمی ترین"}
                onClick={oldestFilterHandler}
              />
              <MainButton
                modern
                className="rounded-lg col-span-2 xl:col-span-1 py-3 px-4 !text-sm"
                value={"جدیدترین"}
                onClick={newestFilterHandler}
              />
              <MainButton
                modern
                className="rounded-lg col-span-2 xl:col-span-1 py-3 px-4 !text-sm"
                value={"مرد"}
                onClick={maleFilterHandler}
              />
              <MainButton
                modern
                className="rounded-lg col-span-2 xl:col-span-1 py-3 px-4 !text-sm"
                value={"زن"}
                onClick={femaleFilterHandler}
              />
            </section>
          </div>
        </div>
        {filter.length > 0 && filter[arrayItemsComment].map((d:BmiType) => {
          return (
            <div
              className="col-span-full md:col-span-3 xl:col-span-2"
              key={d.phoneNumber}
            >
              <PatientCard
                linkTo={`/admin/panel/patients/${d.phoneNumber}`}
                name={d.name}
                lastName={d.lastName}
                city={d.city}
                phoneNumber={d.phoneNumber}
                gender={d.gender}
              />
            </div>
          );
        })}
      </section>
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationComment()}
      </div>
    </div>
  );
};

export default PatientsPage;
