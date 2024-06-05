"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainInput from "@/components/MainInput";
import useFetchComments from "@/hooks/useFetchComments/useFetchComments";
import SearchIcon from "/public/svg/search-normal.svg";
import { useEffect, useRef, useState } from "react";
import useFilterComments from "@/hooks/useFilterComments/useFilterComments";
import { date } from "yup";
import api from "@/apis";
import useFetchSingleBmi from "@/hooks/useFetchSingleBmi/useFetchSingleBmi";
import MainButton from "@/components/MainButton";

const CommentsPage = () => {
  const allComments = useFetchComments();
  const [filter, setFilter] = useState(allComments);
  const oldest = useFilterComments("/doctorsComment/comments?sort=newest");
  const newest = useFilterComments("/doctorsComment/comments?sort=oldest");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event value:", event.target.value);
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log("Search value updated:", searchValue);
  }, [searchValue]);

  const fetchBmi = useFetchSingleBmi(searchValue);
  const getPatientId = fetchBmi[0]?.phoneNumber;
  const newestFilterHandler = () => {
    setFilter(newest);
  };

  const oldestFilterHandler = () => {
    setFilter(oldest);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = `/doctorsComment/certain/patientId/${getPatientId}`;
    console.log("This is endpoint", endpoint);

    try {
      const response = await api.get(endpoint);
      setFilter(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    setFilter(allComments);
  }, [allComments]);

  return (
    <section className="flex gap-3 flex-col">
      <header className=" grid grid-cols-4 gap-8 mb-10 justify-start">
        <form className="lg:col-span-2 col-span-full" action="" onSubmit={handleSubmit}>
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
          <p className=" w-fit col-span-full md:col-span-1 text-base ">فیلتر کردن براساس:</p>
          <section
            className=" col-span-full md:col-span-2 grid grid-cols-2 gap-8 w-full"
          >
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
      {filter
        ? filter.map((data): React.ReactNode => {
            return (
              <CommentBox
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
    </section>
  );
};
export default CommentsPage;
