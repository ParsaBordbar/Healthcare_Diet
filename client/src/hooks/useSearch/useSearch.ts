'use client'
import { useEffect, useState } from 'react'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import useFilterComments from '@/hooks/useFilterComments/useFilterComments'
import useFetchSingleBmi from '@/hooks/useFetchSingleBmi/useFetchSingleBmi'
import api from '@/apis'

const useSearchCommentsPage = () => {
  const allComments = useFetchComments()
  const [filter, setFilter] = useState(allComments)
  const oldest = useFilterComments('/doctorsComment/comments?sort=newest')
  const newest = useFilterComments('/doctorsComment/comments?sort=oldest')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Event value:', event.target.value)
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    console.log('Search value updated:', searchValue)
  }, [searchValue])

  const fetchBmi = useFetchSingleBmi(searchValue)
  
  
  const newestFilterHandler = () => {
    setFilter(newest)
  }

  const oldestFilterHandler = () => {
    setFilter(oldest)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = []
    for (const patient of fetchBmi) {
      const endpoint = `/doctorsComment/certain/patientId/${patient.phoneNumber}`
      console.log('This is endpoint', endpoint)
      try {
        const response = await api.get(endpoint)
        results.push(...response.data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    }
    setFilter(results)
  }

  useEffect(() => {
    setFilter(allComments)
  }, [allComments])

  return {
    filter,
    searchValue,
    handleChange,
    handleSubmit,
    newestFilterHandler,
    oldestFilterHandler,
  }
}

export default useSearchCommentsPage