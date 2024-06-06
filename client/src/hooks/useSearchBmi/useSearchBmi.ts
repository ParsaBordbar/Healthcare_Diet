'use client'
import { useEffect, useState } from 'react'
import useFetchBmi from '../useFetchBmi'
import api from '@/apis'
import { BmiType } from '@/types'

const useSearchBmi = (filterUrl: string) => {
  const bmi = useFetchBmi()
  const [filter, setFilter] = useState<BmiType[]>(bmi);
  const [searchValue, setSearchValue] = useState<string>('')
    
  useEffect(() => {
    const fetchInitialData = async () => {
      const data: BmiType[] = await fetchFilteredData(`${filterUrl}?sort=newest`);
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

  const newestFilterHandler = async () => {
    const data: BmiType[] = await fetchFilteredData(`${filterUrl}?sort=newest`)
    setFilter(data)
  }

  const oldestFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=oldest`)
    setFilter(data)
  }

  const maleFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=male`)
    setFilter(data)
  }

  const femaleFilterHandler = async () => {
    const data = await fetchFilteredData(`${filterUrl}?sort=female`)
    setFilter(data)
  }
  
  return {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    maleFilterHandler,
    femaleFilterHandler,
  }
}

export default useSearchBmi
