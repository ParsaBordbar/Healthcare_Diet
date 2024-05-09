'use client'
import PatientBmiForm from '@/components/AdminComponents/PatientBmiForm'
import useFetchBmi from '@/hooks/useFetchBmi';


function BmiPage() {
  const  bmiForms = useFetchBmi();    
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