'use client'
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm'
import React from 'react'

function BmiPage() {
  return (
    <section>
        <h1 className='text-2xl mb-6'>فرم‌هایBMI:</h1>
        <div className='grid grid-cols-2 gap-10'>
          <PatientBmiForm 
          name='نادر'
          lastName='افشار' phoneNumber={'۵۴۵۶۴۶۵۴۶۵۴۶۵'} gender={'مرد'} age={'۹۶'} height={'۱۸۲'} wight={'۷۰'} bmi={'۱۲٫۵'}          
          />
        </div>
    </section>
  )
}

export default BmiPage