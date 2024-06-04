'use client'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import SearchIcon from "/public/svg/search-normal.svg";
import { useEffect, useRef, useState } from 'react'
import useFilterComments from '@/hooks/useFilterComments/useFilterComments'
import { date } from 'yup';
import api from '@/apis';
import useFetchSingleBmi from '@/hooks/useFetchSingleBmi/useFetchSingleBmi';


const CommentsPage = () => {

  const allComments = useFetchComments()
  const [filter, setFilter] = useState(allComments)
  const oldest = useFilterComments('/doctorsComment/comments?sort=newest')
  const newest = useFilterComments('/doctorsComment/comments?sort=oldest')
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Event value:', event.target.value);
      setSearchValue(event.target.value);
  };

  useEffect(() => {
      console.log('Search value updated:', searchValue);
  }, [searchValue]);

  const getPatientId = useFetchSingleBmi(searchValue)
  console.log(JSON.stringify(getPatientId));
  const newestFilterHandler = () => {
    setFilter(newest)
  }

  const oldestFilterHandler = () => {
    setFilter(oldest)
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = `/doctorsComment/certain/patientId/${getPatientId}`;
    console.log('This is endpoint', endpoint);
    
    try {
      const response = await api.get(endpoint);
      setFilter(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    setFilter(allComments);
  }, [allComments]);

  return (
    <section className='flex gap-3 flex-col'>
      <header className='flex gap-8 mb-10 justify-start'>
        <form  className='w-1/2' action="" onSubmit={handleSubmit}>
          <MainInput
          iconFirst={SearchIcon}
          parentClassName="!w-full "
          type="search"
          value={searchValue}
          onChange={handleChange} 
          placeholder="نام بیمار مورد نظر خود را وارد کنید"
          />
          <button type="submit">جست و جو</button>
        </form>
        <p className='ps-10'>فیلتر کردن براساس:</p>
        <button onClick={newestFilterHandler} className='bg-[var(--orange)] rounded-lg px-4 h-11 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'>
          قدیمی‌ترین  
        </button>
        <button onClick={oldestFilterHandler} className='bg-[var(--orange)] rounded-lg px-4 h-11 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'>
          جدیدترین
        </button>
      </header>
      {filter? filter.map((data): React.ReactNode => {
          return <CommentBox key={data.receiver+data.createdAtJalali} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
      }): null
      }
      </section>
  )
}
export default CommentsPage