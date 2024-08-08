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
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = allComments.length;

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
          ? filter[currentPage - 1]?.map(
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
      <ResponsivePagination
        linkHref="omit"
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
export default CommentsPage;
