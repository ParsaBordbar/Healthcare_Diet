'use client'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import useFetchPatientComments from '@/hooks/useFetchPatientComments/useFetchPatientComments'
import SearchIcon from "/public/svg/search-normal.svg";
import { useEffect, useState } from 'react'
import useFilterComments from '@/hooks/useFilterComments/useFilterComments'
import { date } from 'yup'


const CommentsPage = () => {

  const allComments = useFetchComments()
  const [filter, setFilter] = useState(allComments)
  const oldest = useFilterComments('/doctorsComment/comments?sort=newest')
  const newest = useFilterComments('/doctorsComment/comments?sort=oldest')
  
  const newestFilterHandler = () => {
    setFilter(newest)
  }

  const oldestFilterHandler = () => {
    setFilter(oldest)
  }

  useEffect(() => {
    setFilter(allComments);
  }, [allComments]);

  return (
    <section className='flex gap-3 flex-col'>
      <header className='flex gap-10 mb-10'>
        <MainInput
        iconFirst={SearchIcon}
        parentClassName="!w-1/2 "
        type="search"
        placeholder="نام بیمار مورد نظر خود را وارد کنید"
        />
        <p className='ps-10'>فیلتر کردن براساس:</p>
        <button onClick={newestFilterHandler} className='bg-[var(--orange)] rounded-lg px-4 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'>
          قدیمی‌ترین  
        </button>
        <button onClick={oldestFilterHandler} className='bg-[var(--orange)] rounded-lg px-4 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'>
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