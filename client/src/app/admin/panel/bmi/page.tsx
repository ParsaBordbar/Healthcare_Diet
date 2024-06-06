'use client'
import PatientBmiForm from "@/components/AdminComponents/PatientBmiForm"
import MainButton from "@/components/MainButton"
import MainInput from "@/components/MainInput"
import SearchIcon from "/public/svg/search-normal.svg"
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg"
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg"
import useSearchBmi from "@/hooks/useSearchBmi/useSearchBmi"

function BmiPage() {
  const {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    maleFilterHandler,
    femaleFilterHandler,
  } = useSearchBmi('/bmi/sort')

  return (
    <section className="grid lg:grid-cols-1 grid-cols-1 gap-10">
      <section className="flex mb-6 col-span-full items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black [&>path]:stroke-2" />
        <h1 className="text-3xl">فرم‌های BMI:</h1>
      </section>
      <div className="grid grid-cols-10 gap-8 items-center">
        <form className="xl:col-span-5 col-span-full" action="">
          <MainInput
            iconFirst={SearchIcon}
            parentClassName="!w-full "
            type="search"
            placeholder="نام بیمار مورد نظر خود را وارد کنید"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
        <div className="xl:col-span-5 col-span-full grid grid-cols-3 gap-8 items-center">
          <section className="flex col-span-full md:col-span-1 items-center gap-2">
            <FilterIcon className="[&>path]:stroke-black [&>path]:stroke-2" />
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
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {filter.map((form) => (
          <PatientBmiForm
            name={form.name}
            lastName={form.lastName}
            phoneNumber={form.phoneNumber}
            gender={form.gender}
            age={form.age}
            height={form.height}
            weight={form.weight}
            bmi={form.bmi}
            key={form.phoneNumber}
          />
        ))}
      </div>
    </section>
  )
}

export default BmiPage
