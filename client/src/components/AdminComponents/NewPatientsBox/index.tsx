"use client";
import Link from "next/link";
import useFetchBmi from "../../../hooks/useFetchBmi";
import PatientCard from "../PatientCard";
import PatientIcon from "/public/svg/adminPanelSvgs/patients.svg";
function NewPatientsBox() {
  const bmiForms = useFetchBmi();
  return (
    <section className="flex flex-col items-start rounded-2xl my-4">
      <section className="flex items-center mb-6 gap-2">
        <PatientIcon className="[&>path]:stroke-black" />
        <h2 className="text-lg">جدیدترین بیمارها</h2>
      </section>
      <main className=" w-full justify-between flex gap-6 flex-col-reverse">
        {bmiForms.slice(-3).map((form) => {
          return (
            <div
              className=" min-[1107px]:col-span-1 col-span-2 "
              key={form.phoneNumber}
            >
              <PatientCard
                linkTo={`/admin/panel/patients/${form.phoneNumber}`}
                name={form.name}
                city={form.city}
                lastName={form.lastName}
                phoneNumber={form.phoneNumber}
                gender={form.gender}
              />
            </div>
          );
        })}
      </main>
      <Link className="pt-3 text-lg text-blue-600 " href={"/admin/panel/patients"}>
        دیدن همه بیمارها
      </Link>
    </section>
  );
}

export default NewPatientsBox;
