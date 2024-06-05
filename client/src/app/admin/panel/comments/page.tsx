"use client";
import React from "react";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainInput from "@/components/MainInput";
import SearchIcon from "/public/svg/search-normal.svg";
import useSearchCommentsPage from "@/hooks/useSearch/useSearch";
import MainButton from "@/components/MainButton";

const CommentsPage = () => {
  const {
    filter,
    searchValue,
    handleChange,
    handleSubmit,
    newestFilterHandler,
    oldestFilterHandler,
  } = useSearchCommentsPage();

  return (
    <section className="flex gap-3 flex-col">
      <header className=" grid grid-cols-4 gap-8 mb-10 justify-start">
        <form
          className="lg:col-span-2 col-span-full"
          action=""
          onSubmit={handleSubmit}
        >
          <MainInput
            iconFirst={SearchIcon}
            parentClassName="!w-full "
            type="search"
            value={searchValue}
            onChange={handleChange}
            placeholder="نام بیمار مورد نظر خود را وارد کنید"
          />
        </form>
        <div className="lg:col-span-2 col-span-full grid grid-cols-3 gap-8 items-center">
          <p className=" w-fit col-span-full md:col-span-1 text-base ">
            فیلتر کردن براساس:
          </p>
          <section className=" col-span-full md:col-span-2 grid grid-cols-2 gap-8 w-full">
            <MainButton
              modern
              onClick={newestFilterHandler}
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"قدیمی ترین"}
            />

            <MainButton
              modern
              onClick={oldestFilterHandler}
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={" جدیدترین"}
            />
          </section>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-8">
        {filter
          ? filter.map((data): React.ReactNode => {
              return (
                <CommentBox
                  className="sm:!col-span-1"
                  key={data.receiver + data.createdAtJalali}
                  sender={data.sender}
                  body={data.body}
                  receiver={data.receiver}
                  createdAtJalali={data.createdAtJalali}
                  isDoctor={true}
                />
              );
            })
          : null}
      </main>
    </section>
  );
};
export default CommentsPage;
