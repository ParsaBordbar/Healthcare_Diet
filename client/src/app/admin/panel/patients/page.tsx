'use client'
import PatientBox from "@/components/AdminComponents/PatientBox"
import PatientCard from "@/components/AdminComponents/PatientCard"
import useFetchBmi from "@/hooks/useFetchBmi"
import Link from "next/link"

const PatientsPage = () => {
    const data = useFetchBmi()
    return(
        <section className="grid grid-cols-2"> 
            <h1 className="col-span-full text-3xl mb-3">بیمارها:</h1>
            {data.map(d => {
                return <Link href={`/admin/panel/patients/${d.phoneNumber}`} key={d.phoneNumber}>
                    <PatientCard name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} gender={d.gender}/>
                </Link>
            })}
        </section>
    )
}

export default PatientsPage;