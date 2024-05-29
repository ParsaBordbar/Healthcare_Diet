'use client'
import Link from 'next/link';
import useFetchBmi from '../../../hooks/useFetchBmi'
import PatientBox from '../PatientBox';

function NewPatientsBox() {
  const  bmiForms = useFetchBmi();    
  return (
    <section className='flex flex-col items-start rounded-2xl my-4'>
      <h2 className='text-lg'>جدیدترین بیمارها</h2>
        {bmiForms.slice(-3).map((form) => {
            return <PatientBox
            name={form.name}
            lastName={form.lastName}
            phoneNumber={form.phoneNumber}
            key={form.phoneNumber}
            bmi=''
          />
          })
          }
      <Link className='pt-3 text-lg text-blue-600 ' href={'./panel/patients'}>دیدن همه بیمارها</Link>
    </section>
  )
}

export default NewPatientsBox