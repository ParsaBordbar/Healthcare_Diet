"use client";
import React, { useCallback, useState } from "react";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainInput from "@/components/MainInput";
import SearchIcon from "/public/svg/search-normal.svg";
import useSearchCommentsPage from "@/hooks/useSearch/useSearch";
import MainButton from "@/components/MainButton";
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import { CommentType } from "@/types";
import useFetchComments from "@/hooks/useFetchComments/useFetchComments";

const CommentsPage = () => {
  const {
    filter,
    searchValue,
    handleChange,
    handleSubmit,
    newestFilterHandler,
    oldestFilterHandler,
  } = useSearchCommentsPage();
  const allComments = useFetchComments();
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
    <section className="flex gap-3 flex-col">
      <div className="flex items-center gap-2 mb-6">
        <DocumentIcon className="[&>path]:stroke-black " />
        <h1 className="text-xl md:text-2xl lg:text-3xl">پیام ها</h1>
      </div>
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
        <div className="lg:col-span-2 col-span-full grid grid-cols-3 gap-2 items-center">
          <section className="flex col-span-full md:col-span-1 items-center gap-2">
            <FilterIcon className="[&>path]:stroke-black" />
            <p className=" w-fit text-base ">فیلتر کردن براساس:</p>
          </section>
          <section className=" col-span-full md:col-span-2 grid grid-cols-2 gap-8 w-full">
            <MainButton
              modern
              type="button"
              onClick={() => {
                console.log("run un newsest");
                setArrayItemsComment(0);
                oldestFilterHandler(allComments);
              }}
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"جدید ترین"}
            />

            <MainButton
              modern
              type="button"
              onClick={() => {
                setArrayItemsComment(0);
                newestFilterHandler(allComments);
              }}
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"قدیمی ترین"}
            />
          </section>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-8">
        {filter
          ? filter[arrayItemsComment]?.map(
              (data: CommentType): React.ReactNode => {
                return (
                  <CommentBox
                    _id={data._id}
                    className="sm:!col-span-1"
                    key={data._id}
                    sender={data.sender}
                    body={data.body}
                    receiver={data.receiver}
                    createdAtJalali={data.createdAtJalali}
                    isDoctor={true}
                    files={data.files}
                  />
                );
              }
            )
          : null}
      </main>
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationComment()}
      </div>
    </section>
  );
};
export default CommentsPage;
