'use client'
import PatientBox from "@/components/AdminComponents/PatientBox"
import useFetchBmi from "@/hooks/useFetchBmi"
import Link from "next/link"

const PatientsPage = () => {
    const data = useFetchBmi()
    return(
        <section>
            {data.map(d => {
                return <Link href={`/admin/panel/patients/${d.phoneNumber}`} key={d.phoneNumber}>
                    <PatientBox name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} />
                </Link>
            })}
        </section>
    )
}

export default PatientsPage;