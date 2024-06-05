'use client'
import React from 'react'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import SearchIcon from "/public/svg/search-normal.svg"
import useSearchCommentsPage from '@/hooks/useSearch/useSearch'


const CommentsPage = () => {
  const {
    filter,
    searchValue,
    handleChange,
    handleSubmit,
    newestFilterHandler,
    oldestFilterHandler,
  } = useSearchCommentsPage()

  return (
    <section className='flex gap-3 flex-col'>
      <header className='flex gap-8 mb-10 justify-start'>
        <form className='w-1/2' onSubmit={handleSubmit}>
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
        <button
          onClick={newestFilterHandler}
          className='bg-[var(--orange)] rounded-lg px-4 h-11 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'
        >
          قدیمی‌ترین
        </button>
        <button
          onClick={oldestFilterHandler}
          className='bg-[var(--orange)] rounded-lg px-4 h-11 hover:bg-[var(--new-green)] ease-in-out duration-100 hover:text-white text-sm'
        >
          جدیدترین
        </button>
      </header>
      {filter ? filter.map((data) => (
        <CommentBox
          key={data.receiver + data.createdAtJalali}
          sender={data.sender}
          body={data.body}
          receiver={data.receiver}
          createdAtJalali={data.createdAtJalali}
          isDoctor={true}
        />
      )) : null}
    </section>
  )
}

export default CommentsPage
