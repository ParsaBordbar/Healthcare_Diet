"use client";
import { useEffect, useState } from "react";
import useFetchBmi from "../useFetchBmi";
import api from "@/apis";
import { BmiType } from "@/types";
import { chunkingArray } from "../chunkingArray";

const useSearchBmi = (filterUrl: string) => {
  const bmi = useFetchBmi();
  const [filter, setFilter] = useState<BmiType[]>(bmi);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const fetchInitialData = async () => {
      const data: BmiType[] = await fetchFilteredData(
        `${filterUrl}?sort=newest`
      );
      const newArrayChunk = chunkingArray(data, 12);
      setFilter(newArrayChunk);
    };
    fetchInitialData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event value:", event.target.value);
    setSearchValue(event.target.value);
  };

  const fetchFilteredData = async (url: string) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching filtered data:", error);
      return [];
    }
  };

  const fetchSearchData = async (query: string) => {
    try {
      const response = await api.get(`/bmi/search?query=${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching search data:", error);
      return [];
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSearchValue = searchValue.trim();
    if (!trimmedSearchValue) {
      newestFilterHandler();
      return;
    }
    const searchData = await fetchSearchData(trimmedSearchValue);
    const newArrayChunk = chunkingArray(searchData, 12);
    setFilter(newArrayChunk);
  };

  const newestFilterHandler = async () => {
    const data: BmiType[] = await fetchFilteredData(`${filterUrl}?sort=newest`);
    const newArrayChunk = chunkingArray(data, 12);
    setFilter(newArrayChunk);
  };

  const oldestFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=oldest`);
    const newArrayChunk = chunkingArray(data, 12);
    setFilter(newArrayChunk);
  };

  const maleFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=male`);
    const newArrayChunk = chunkingArray(data, 12);
    setFilter(newArrayChunk);
  };

  const femaleFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=female`);
    const newArrayChunk = chunkingArray(data, 12);
    setFilter(newArrayChunk);
  };

  return {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    maleFilterHandler,
    femaleFilterHandler,
    submitHandler,
  };
};

export default useSearchBmi;
