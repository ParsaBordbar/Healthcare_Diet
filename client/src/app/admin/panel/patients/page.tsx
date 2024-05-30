'use client'
import PatientBox from "@/components/AdminComponents/PatientBox"
import PatientCard from "@/components/AdminComponents/PatientCard"
import useFetchBmi from "@/hooks/useFetchBmi"
import Link from "next/link"

const PatientsPage = () => {
    const data = useFetchBmi()
    return(
        <section className="grid gap-6 grid-cols-2"> 
            <h1 className="col-span-full text-3xl mb-3">بیمارها:</h1>
            {data.map(d => {
                return <div className="col-span-full lg:col-span-1" key={d.phoneNumber}>
                    <PatientCard linkTo={`/admin/panel/patients/${d.phoneNumber}`}  name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} gender={d.gender}/>
                </div>
            })}
        </section>
    )
}

export default PatientsPage;