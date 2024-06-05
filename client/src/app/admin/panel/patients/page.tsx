'use client'
import PatientBox from "@/components/AdminComponents/PatientBox"
import PatientCard from "@/components/AdminComponents/PatientCard"
import useFetchBmi from "@/hooks/useFetchBmi"
import Link from "next/link"
import PatientIcon from '/public/svg/adminPanelSvgs/patients.svg'
const PatientsPage = () => {
    const data = useFetchBmi()
    return(
        <section className="grid gap-6 grid-cols-2"> 
        <section className="mb-3 col-span-full flex items-center gap-2">
            <PatientIcon className='[&>path]:stroke-black [&>path]:stroke-2'/>
            <h1 className=" text-3xl">بیمارها:</h1>
        </section>
            {data.map(d => {
                return <div className="col-span-full lg:col-span-1" key={d.phoneNumber}>
                    <PatientCard linkTo={`/admin/panel/patients/${d.phoneNumber}`}  name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} gender={d.gender}/>
                </div>
            })}
        </section>
    )
}

export default PatientsPage;