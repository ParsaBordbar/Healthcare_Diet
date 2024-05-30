"use client";
import Link from "next/link";
import useFetchBmi from "../../../hooks/useFetchBmi";
import PatientCard from "../PatientCard";

function NewPatientsBox() {
  const bmiForms = useFetchBmi();
  return (
    <section className="flex flex-col items-start rounded-2xl my-4">
      <h2 className="text-lg">جدیدترین بیمارها</h2>
      <main className=" w-full justify-between flex flex-col">
        {bmiForms.slice(-4).map((form) => {
          return (
            <div className=" min-[1107px]:col-span-1 col-span-2 " key={form.phoneNumber}>
              <PatientCard
                linkTo={`/admin/panel/patients/${form.phoneNumber}`}
                name={form.name}
                lastName={form.lastName}
                phoneNumber={form.phoneNumber}
                gender={form.gender}
              />
            </div>
          );
        })}
      </main>
      <Link className="pt-3 text-lg text-blue-600 " href={"./panel/patients"}>
        دیدن همه بیمارها
      </Link>
    </section>
  );
}

export default NewPatientsBox;
