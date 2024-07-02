'use client'
import { useEffect, useState } from 'react'
import api from '@/apis'
import {  MediterraneanFormType } from '@/types'


const useSearchMediterranean = (filterUrl: string) => {
  const [filter, setFilter] = useState<MediterraneanFormType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);

  const fetchFilteredData = async (url: string) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching filtered data:', error);
      return [];
    }
  };

  const fetchSearchData = async (query: string) => {
    try {
      const response = await api.get(`/bmi/search?query=${query}`);
      const itemPhoneNumbers = response.data.map((item: any) => item.phoneNumber);
      setPhoneNumbers(itemPhoneNumbers);
      return response.data;
    } catch (error) {
      console.error('Error fetching search data:', error);
      return [];
    }
  };

  const fetchMediterraneanData = async (phoneNumbers: string[]) => {
    try {
      const allData = await Promise.all(
        phoneNumbers.map(phoneNumber => api.get(`/mediterranean/certain/${phoneNumber}`))
      );

      const mergedData = allData.map(response => response.data).flat();
      setFilter(mergedData);

    } catch (error) {
      console.error('Error fetching Mediterranean data:', error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const data: MediterraneanFormType[] = await fetchFilteredData(`${filterUrl}?sort=newest`);
      setFilter(data);
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    console.log(filter); 
  }, [filter]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSearchValue = searchValue.trim();
    if (!trimmedSearchValue) {
      newestFilterHandler();
      return;
    }
    const searchData = await fetchSearchData(trimmedSearchValue);
    fetchMediterraneanData(searchData.map((item: any) => item.phoneNumber));
  };

  const newestFilterHandler = async () => {
    const data: MediterraneanFormType[] = await fetchFilteredData(`${filterUrl}?sort=newest`);
    setFilter(data);
  };

  const oldestFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=oldest`)
    setFilter(data)
  }

  const specialFilterHandler = async () => {
    const data = await fetchFilteredData(`mediterranean/sort?sort=special`)
    setFilter(data)
  }

  const maleFilterHandler = async () => {
    const data = await fetchFilteredData(`bmi/sort?sort=male`)
    fetchMediterraneanData(data.map((item: any) => item.phoneNumber));
    setFilter(data)
  }

  const femaleFilterHandler = async () => {
    const data = await fetchFilteredData(`bmi/sort?sort=female`)
    fetchMediterraneanData(data.map((item: any) => item.phoneNumber));
    setFilter(data)
  }

  return {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    specialFilterHandler,
    maleFilterHandler,
    femaleFilterHandler,
    submitHandler,
  }
}

export default useSearchMediterranean;