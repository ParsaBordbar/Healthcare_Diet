'use client'
import { useEffect, useState } from 'react'
import useFetchBmi from '../useFetchBmi'
import api from '@/apis'
import { BmiType, MediterraneanFormType } from '@/types'
import useFetchMediterranean from '../useFetchMediterranean'

const useSearchMediterranean = (filterUrl: string) => {
  const mediterraneans = useFetchMediterranean()
  const [filter, setFilter] = useState<MediterraneanFormType[]>(mediterraneans);
  const [searchValue, setSearchValue] = useState<string>('')

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
    console.log('Event value:', event.target.value)
    setSearchValue(event.target.value)
  }

  const fetchFilteredData = async (url: string) => {
    try {
      const response = await api.get(url)
      return response.data
    } catch (error) {
      console.error('Error fetching filtered data:', error)
      return []
    }
  }

  const fetchSearchData = async (query: string) => {
    try {
      const response = await api.get(`/bmi/search?query=${query}`)
      event?.preventDefault()
      console.log( "THis is BMI:", response.data);
      return response.data
    } catch (error) {
      console.error('Error fetching search data:', error)
      return []
    }
  }

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedSearchValue = searchValue.trim();
    if (!trimmedSearchValue) {
      newestFilterHandler()
      console.log('Empty search got yea!');
      return;
    }
    const searchData = await fetchSearchData(trimmedSearchValue)
    setFilter(searchData)
  }


  const newestFilterHandler = async () => {
    const data: MediterraneanFormType[] = await fetchFilteredData(`${filterUrl}?sort=newest`)
    setFilter(data)
  }

  const oldestFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=oldest`)
    setFilter(data)
  }

  const specialFilterHandler = async () => {
    const data = await fetchFilteredData(`bmi/sort'?sort=special`)
    setFilter(data)
  }

  const maleFilterHandler = async () => {
    const data = await fetchFilteredData(`bmi/sort?sort=male`)
    setFilter(data)
  }

  const femaleFilterHandler = async () => {
    const data = await fetchFilteredData(`bmi/sort?sort=female`)
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

export default useSearchMediterranean