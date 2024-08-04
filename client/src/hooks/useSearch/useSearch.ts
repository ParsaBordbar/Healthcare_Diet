"use client";
import { useEffect, useState } from "react";
import useFetchComments from "@/hooks/useFetchComments/useFetchComments";
import useFilterComments from "@/hooks/useFilterComments/useFilterComments";
import useFetchSingleBmi from "@/hooks/useFetchSingleBmi/useFetchSingleBmi";
import api from "@/apis";
import { CommentType } from "@/types";
import useFetchPatientComments from "../useFetchPatientComments/useFetchPatientComments";
import { chunkingArray } from "../chunkingArray";

const useSearchCommentsPage = () => {
  const allComments = useFetchComments();
  const allComments2 = useFetchComments();
  const allComments3 = useFetchComments();
  const [filter, setFilter] = useState<any>(allComments);
  const oldest = useFilterComments("/doctorsComment/comments?sort=newest");
  const newest = useFilterComments("/doctorsComment/comments?sort=oldest");
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(oldest);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event value:", event.target.value);
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log("Search value updated:", searchValue);
  }, [searchValue]);

  const fetchBmi = useFetchSingleBmi(searchValue);

  function newestFilterHandler(fetchFunction: CommentType[]) {
    console.log("this is newset array ", newest, fetchFunction.length);
    const newArrayComment = chunkingArray(newest, 10);
    setFilter(newArrayComment);
  }

  function oldestFilterHandler(fetchFunction: CommentType[]) {
    console.log("this is olders array ", oldest, fetchFunction.length);
    const newArrayComment = chunkingArray(oldest, 10);
    setFilter(newArrayComment);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = [];
    for (const patient of fetchBmi) {
      const endpoint = `/doctorsComment/certain/patientId/${patient.phoneNumber}`;
      console.log("This is endpoint", endpoint);
      try {
        const response = await api.get(endpoint);
        results.push(...response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
    const newArrayComment = chunkingArray(results.toReversed(), 10);
    setFilter(newArrayComment);
  };

  useEffect(() => {
    const newArrayComment = chunkingArray(allComments.toReversed(), 10);
    setFilter(newArrayComment);
  }, [allComments]);

  return {
    filter,
    searchValue,
    handleChange,
    handleSubmit,
    newestFilterHandler,
    oldestFilterHandler,
  };
};

export default useSearchCommentsPage;
