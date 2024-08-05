"use client";
import PatientBmiForm from "@/components/AdminComponents/PatientBmiForm";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import SearchIcon from "/public/svg/search-normal.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg";
import useSearchBmi from "@/hooks/useSearchBmi/useSearchBmi";
import { useState, useCallback } from "react";
import { BmiType } from "@/types";

const BmiSection = () => {
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
        filter[1]?.length > 0 && (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              console.log(e.target);
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
    <section className="grid lg:grid-cols-1 grid-cols-1 gap-10">
      <section className="flex mb-6 col-span-full items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black " />
        <h1 className="text-xl md:text-2xl lg:text-3xl">فرم‌های BMI:</h1>
      </section>
      <div className="grid grid-cols-10 gap-8 items-center">
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
          <section className="flex col-span-full md:col-span-1 items-center ">
            <FilterIcon className="[&>path]:stroke-black " />
            <p className="w-fit text-base">فیلتر کردن براساس:</p>
          </section>
          <section className="col-span-full md:col-span-2 grid grid-cols-4 gap-2 w-full">
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"قدیمی ترین"}
              onClick={oldestFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"جدیدترین"}
              onClick={newestFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"مرد"}
              onClick={maleFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"زن"}
              onClick={femaleFilterHandler}
            />
          </section>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {filter.length > 0 &&
          filter[arrayItemsComment].map((form: BmiType) => (
            <PatientBmiForm
              name={form.name}
              lastName={form.lastName}
              phoneNumber={form.phoneNumber}
              gender={form.gender}
              age={form.age}
              height={form.height}
              weight={form.weight}
              bmi={form.bmi}
              whr={form.whr}
              key={form.phoneNumber}
              city={form.city}
              abdominalCircumference={form.abdominalCircumference}
              hipcircumference={form.hipcircumference}
              joinedAtJalali={form.joinedAtJalali}
              autoIncrementId={form.autoIncrementId}
              linkTo={""}
            />
          ))}
      </div>
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationComment()}
      </div>
    </section>
  );
};

export default BmiSection;
