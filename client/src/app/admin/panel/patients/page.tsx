'use client'
import PatientCard from "@/components/AdminComponents/PatientCard"
import useFetchBmi from "@/hooks/useFetchBmi"
import PatientIcon from '/public/svg/adminPanelSvgs/patients.svg'
import MainInput from "@/components/MainInput"
import SearchIcon from "/public/svg/search-normal.svg"

const PatientsPage = () => {
    const data = useFetchBmi()
    return(
        <section className="grid gap-6 grid-cols-2"> 
        <section className="mb-3 col-span-full flex items-center gap-2">
            <PatientIcon className='[&>path]:stroke-black [&>path]:stroke-2'/>
            <h1 className=" text-3xl">بیمارها:</h1>
        </section>
        <form className="col-span-full flex justify-start gap-5 mb-6 items-end" action="">
          <MainInput
            iconFirst={SearchIcon}
            parentClassName="!w-3/5"
            type="search"
            placeholder="نام بیمار مورد نظر خود را وارد کنید"
            // value={searchValue}
            // onChange={handleChange}
          />
          <p className="text-lg rounded-xl px-8 py-3">تعداد تمام بیمارها:  {data.length}</p>
        </form>
            {data.map(d => {
                return <div className="col-span-full lg:col-span-1" key={d.phoneNumber}>
                    <PatientCard linkTo={`/admin/panel/patients/${d.phoneNumber}`}  name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} gender={d.gender}/>
                </div>
            })}
        </section>
    )
}

export default PatientsPage;