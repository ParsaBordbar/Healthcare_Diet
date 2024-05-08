'use client'
import PatientBmiForm from '../PatientBmiForm';
import useFetchBmi from '../../../hooks/useFetchBmi'

function NewPatientsBox() {
  const  bmiForms = useFetchBmi();    
  return (
    <section className='flex bg-[var(--primary)] flex-col'>
        {bmiForms.map((form) => {
            return <PatientBmiForm 
            name={form.name}
            lastName={form.lastName}
            phoneNumber={form.phoneNumber}
            bmi={form.bmi}
            key={form.phoneNumber}
          />
          })}
    </section>
  )
}

export default NewPatientsBox