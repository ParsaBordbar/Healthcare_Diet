'use client'
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm'
import MainButton from '@/components/MainButton';
import MainInput from '@/components/MainInput';
import useFetchBmi from '@/hooks/useFetchBmi';
import SearchIcon from "/public/svg/search-normal.svg"
import { useState } from 'react';
import { useEffect } from 'react';
import useFetchSingleBmi from '@/hooks/useFetchSingleBmi/useFetchSingleBmi'
import api from '@/apis'

function BmiPage() {
  const bmiForms = useFetchBmi();    
  const [filter, setFilter] = useState(bmiForms)
  
  const [searchValue, setSearchValue] = useState<string>('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Event value:', event.target.value)
    setSearchValue(event.target.value)
  }
  
  useEffect(() => {
    console.log('Search value updated:', searchValue)
  }, [searchValue])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // setFilter()
  }

  useEffect(() => {
    setFilter(bmiForms)
  }, [bmiForms])

  return (
    <section className='grid lg:grid-cols-1 grid-cols-1 gap-10'>
        <h1 className='text-4xl mb-6'>فرم‌هایBMI:</h1>
        <form className="lg:col-span-2 col-span-full" onSubmit={handleSubmit} action="">
          <MainInput
            iconFirst={SearchIcon}
            parentClassName="!w-full "
            type="search"
            placeholder="نام بیمار مورد نظر خود را وارد کنید"
            value={searchValue}
            onChange={handleChange}
          />
        </form>

        <div className="lg:col-span-2 col-span-full grid grid-cols-3 gap-8 items-start">
          <p className=" w-fit col-span-full md:col-span-1 text-base">فیلتر کردن براساس:</p>
          <section
            className=" col-span-full md:col-span-2 grid grid-cols-6 gap-8 w-full"
          >
            <MainButton
              modern
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"قدیمی ترین"}
            />
            <MainButton
              modern
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={" جدیدترین"}
            />
            <MainButton
              modern
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"مرد"}
            />
            <MainButton
              modern
              className="rounded-lg col-span-1 py-3 px-4 !text-sm"
              value={"زن"}
            />
          </section>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          {filter.map((form) => { 
            return <PatientBmiForm 
            name={form.name}
            lastName={form.lastName}
            phoneNumber={form.phoneNumber}
            gender={form.gender}
            age={form.age}
            height={form.height}
            weight={form.weight}
            bmi={form.bmi}
            key={form.phoneNumber}
          />
          })}
        </div>
    </section>
  )
}

export default BmiPage