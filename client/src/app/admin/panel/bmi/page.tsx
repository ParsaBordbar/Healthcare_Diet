'use client'
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm'
import { BmiType } from '@/types';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

function BmiPage() {

  const [bmiForms, setBmiForms] = useState<BmiType[]>([]);
  useEffect(()=>{
      fetchBmiPatientForms()
  }, [bmiForms])

  const fetchBmiPatientForms = async () => {
    try{
        const response = await api.get('/bmi');
        setBmiForms(response.data);
    }
    catch(err : any){
       if (err.response){
        console.log(err.response.data)
       }
       else{
        console.log(`Error: ${err.message}`);
       }
    }
}

  return (
    <section>
        <h1 className='text-4xl mb-6'>فرم‌هایBMI:</h1>
        <div className='grid grid-cols-2 gap-10'>
          {bmiForms.map((form) => {
            return <PatientBmiForm 
            name={form.name}
            lastName={form.lastName}
            phoneNumber={form.phoneNumber}
            gender={form.gender}
            age={form.age}
            height={form.height}
            wight={form.wight}
            bmi={form.bmi}
            key={form.phoneNumber}
          />
          })}
        </div>
    </section>
  )
}

export default BmiPage