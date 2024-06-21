'use client'
import PatientCard from "@/components/AdminComponents/PatientCard"
import PatientIcon from '/public/svg/adminPanelSvgs/patients.svg'
import MainInput from "@/components/MainInput"
import SearchIcon from "/public/svg/search-normal.svg"
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg"
import useSearchBmi from "@/hooks/useSearchBmi/useSearchBmi"
import MainButton from "@/components/MainButton"

const PatientsPage = () => {

    const {
        filter,
        searchValue,
        handleChange,
        newestFilterHandler,
        oldestFilterHandler,
        maleFilterHandler,
        femaleFilterHandler,
        submitHandler,
      } = useSearchBmi('/bmi/sort')
    
    return(
        <section className="grid gap-6 grid-cols-2"> 
        <section className="mb-3 col-span-full flex items-center gap-2">
            <PatientIcon className='[&>path]:stroke-black '/>
            <h1 className=" text-3xl">بیمارها:</h1>
        </section>
        <div className="grid grid-cols-10 gap-8 items-center col-span-full">
        <form className="xl:col-span-5 col-span-full" action="" onSubmit={submitHandler}>
          <MainInput
            iconFirst={SearchIcon}
            parentClassName="!w-full "
            type="search"
            placeholder="نام بیمار مورد نظر خود را وارد کنید"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
        <div className="xl:col-span-5 col-span-full grid grid-cols-3 items-center">
          <section className="flex col-span-full md:col-span-1 items-center gap-2">
            <FilterIcon className="[&>path]:stroke-black" />
            <p className="w-fit text-base">فیلتر کردن براساس:</p>
          </section>
          <section className="col-span-full md:col-span-2 grid grid-cols-4 gap-4 w-full">
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"قدیمی ترین"}
              onClick={oldestFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"جدیدترین"}
              onClick={newestFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"مرد"}
              onClick={maleFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-3 px-4 !text-sm"
              value={"زن"}
              onClick={femaleFilterHandler}
            />
          </section>
        </div>
      </div>
            {filter.map(d => {
                return <div className="col-span-full lg:col-span-1" key={d.phoneNumber}>
                    <PatientCard linkTo={`/admin/panel/patients/${d.phoneNumber}`}  name={d.name} lastName={d.lastName} phoneNumber={d.phoneNumber} gender={d.gender}/>
                </div>
            })}
        </section>
    )
}

export default PatientsPage;