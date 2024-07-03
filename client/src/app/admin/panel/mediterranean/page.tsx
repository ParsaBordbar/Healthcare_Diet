"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import SearchIcon from "/public/svg/search-normal.svg"
import FilterIcon from "/public/svg/adminPanelSvgs/filter.svg"
import useSearchMediterranean from "@/hooks/useSearchMediterranean/useSearchMediterranean";
import Link from "next/link";

const MediterraneanFormsPage = () => {

  const {
    filter,
    searchValue,
    handleChange,
    newestFilterHandler,
    oldestFilterHandler,
    specialFilterHandler,
    submitHandler,
    maleFilterHandler,
    femaleFilterHandler,
  } = useSearchMediterranean('/mediterranean/sort')

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <DocumentIcon className="[&>path]:stroke-black " />
        <h1 className="text-3xl">فرم‌های رژیم مدیترانه‌ای:</h1>
      </div>
      <div className="grid grid-cols-10 gap-8 items-center">
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
            <FilterIcon className="[&>path]:stroke-black " />
            <p className="w-fit text-base">فیلتر کردن براساس:</p>
          </section>
          <section className="col-span-full md:col-span-2 grid grid-cols-4 gap-4 w-full">
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-1 px-4 !text-sm"
              value={"قدیمی ترین"}
              onClick={oldestFilterHandler}
            />
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-1 px-4 !text-sm"
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
            <Link href={'/admin/panel/unvisited_diets'}>
              <MainButton
                modern
                className="rounded-lg col-span-2 lg:col-span-1 py-1 !text-sm font-extrabold"
                value={"فرم‌های ویزیت نشده"}
              />
            </Link>
            <MainButton
              modern
              className="rounded-lg col-span-2 lg:col-span-1 py-1 !text-sm"
              value={"افراد دارای بیماری‌های خاص"}
              onClick={specialFilterHandler}
            />
            
          </section>
        </div>
      </div>
      {filter.map((form) => {
        return (
          <MediterraneanForm
            dailyFruit={form.dailyFruit}
            dailyVegetable={form.dailyVegetable}
            Cereals={form.Cereals}
            dailyCereals={form.dailyCereals}
            potatoAndStarchWeekly={form.potatoAndStarchWeekly}
            oliveAndOliveOilDaily={form.oliveAndOliveOilDaily}
            nutsDaily={form.nutsDaily}
            dairyDaily={form.dairyDaily}
            beans={form.beans}
            eggWeekly={form.eggWeekly}
            fishWeekly={form.fishWeekly}
            chickensWeekly={form.chickensWeekly}
            sugarWeekly={form.sugarWeekly}
            alcoholWeekly={form.alcoholWeekly}
            fermentationWeekly={form.fermentationWeekly}
            supplements={form.sugarWeekly}
            physicalActivity={form.physicalActivity}
            diabetes={form.diabetes}
            anemia={form.anemia}
            bloodPressure={form.bloodPressure}
            digestiveProblems={form.digestiveProblems}
            selfSafety={form.selfSafety}
            stroke={form.stroke}
            fattyLiver={form.fattyLiver}
            kidneyProblems={form.kidneyProblems}
            thyroid={form.thyroid}
            cancer={form.cancer}
            Migraine={form.Migraine}
            otherSickness={form.otherSickness}
            medicine={form.medicine}
            phoneNumber={form.phoneNumber}
            key={form._id}
            isChecked={form.isChecked}
            files={form.files}
            redMeatWeekly={form.redMeatWeekly}
            createdAtJalali={form?.createdAtJalali}
            dietBmi={form.dietBmi}
            payment={form.payment}
            _id={form._id}
            />
        );
      })}
    </section>
  );
};

export default MediterraneanFormsPage;
