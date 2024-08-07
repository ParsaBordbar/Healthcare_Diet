import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import moment from "moment";
import Close from "/public/svg/close.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import DateSvg from "/public/svg/adminPanelSvgs/calendar.svg";
import { useEffect } from "react";
import Link from "next/link";
import { MediterraneanFormType } from "@/types";
import { toast } from "react-toastify";

type ModalMediterraneanFormType = {
  userPhoneNumber: string;
  className: string;
  isShow: Function;
  show: boolean;
  commentMoment: string | undefined;
};

const ModalMediterraneanForm = (params: ModalMediterraneanFormType) => {
  const mediterraneanForms = useFetchMediterranean();
  const data = useSpecificFetchBmi(params.userPhoneNumber);
  const reverseArray = (input: any[]) => {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  };
  let resultOfCompare: boolean = false;
  let resultOfCompareNumber: number = 0;
  console.log(reverseArray(mediterraneanForms));
  const arr: MediterraneanFormType[] = [];
  reverseArray(mediterraneanForms).map((form) => {
    if (
      moment(params.commentMoment).isSameOrAfter(form.createdAtJalali) &&
      form.phoneNumber == params.userPhoneNumber
    ) {
      resultOfCompare = true;
      resultOfCompareNumber += 1;
      arr.push(form);
    } else {
      resultOfCompare = false;
      resultOfCompareNumber = 0;
    }
  });
  useEffect(() => {
    if (!arr.slice(0, 1).length && params.show) {
      toast.info("شما در این زمان رژیمی نداشتید");
    }
  }, [arr]);
  return (
    <>
      {arr.slice(0, 1).map((form, index) => {
        console.log(form.phoneNumber);
        return (
          <div
            key={form._id}
            className={`
                  -z-50 opacity-0 transition-all ease-in-out duration-700 ${
                    params.show && "!opacity-100 !z-50 bg-glass"
                  }  fixed md:p-10 w-full h-screen top-0 right-0  `}
          >
            <div className="md:w-11/12 w-full mx-auto overflow-y-scroll custom-scroll-y h-full shadow-lg bg-[var(--milky-white)] flex flex-col gap-10 p-8 rounded-lg">
              <section className="flex flex-col gap-8 items-end">
                <Close
                  className="cursor-pointer bg-[var(--milky-white)] fixed w-8 h-8 p-1 transition-all ease-in-out duration-200 hover:!stroke-white hover:bg-red-600 rounded-full"
                  onClick={() => {
                    params.isShow(false);
                  }}
                />
                <section className="flex mt-10 md:flex-row flex-col items-center justify-between w-full">
                  <div className="flex md:flex-row flex-col gap-2 items-center ">
                    <section className="flex items-center gap-2">
                      <DocumentIcon className="[&>path]:stroke-[var(--new-green)]" />
                      <h1 className="text-2xl text-[var(--new-green)]">
                        رژیم مدیترانه ای
                      </h1>
                    </section>
                    <h1 className="text-[var(--new-green)] sm:text-2xl text-xl ">
                      {data?.name + " " + data?.lastName}
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <DateSvg className="[&>path]:stroke-[var(--new-green)] mb-1" />
                    <span className="text-lg text-[var(--new-green)]">
                      {form.createdAtJalali}
                    </span>
                  </div>
                </section>
              </section>
              <main className="w-full gap-6 flex flex-col mx-auto">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[var(--new-green)] sm:text-2xl text-xl ">
                    فرم مدیترانه ای
                  </h1>
                  <div className="grid grid-cols-2 gap-4">
                    <section className="lg:col-span-full col-span-full flex flex-col gap-4">
                      <li className=" bg-[var(--new-green)] text-white w-fit rounded-lg p-2">
                        مواد غذایی مصرفی:
                      </li>

                      <li className="grid min-[1410px]:grid-cols-3 grid-cols-4 gap-4 pr-3">
                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف روزانه میوه :</p>
                          <p className="text-[var(--new-green)]">
                            {form.dailyFruit}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className=""> میزان مصرف روزانه سبزیجات:</p>
                          <p className="text-[var(--new-green)]">
                            {form.dailyVegetable}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">غلات سبوس ‌دار مصرف می‌کنند:</p>
                          <p className="text-[var(--new-green)]">
                            {form.Cereals}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف روزانه غلات:</p>
                          <p className="text-[var(--new-green)]">
                            {form.dailyCereals}
                          </p>
                        </li>

                        <li
                          className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row"
                          gap-2
                        >
                          <p className="">سایر سبزیجات نشاسته ای در هفته:</p>
                          <p className="text-[var(--new-green)]">
                            {form.potatoAndStarchWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">
                            میزان مصرف روزانه زیتون و روغن زیتون :
                          </p>
                          <p className="text-[var(--new-green)]">
                            {form.oliveAndOliveOilDaily}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف مغزها به صورت روزانه:</p>
                          <p className="text-[var(--new-green)]">
                            {form.nutsDaily}
                          </p>
                        </li>
                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف روزانه محصولات لبنی :</p>
                          <p className="text-[var(--new-green)]">
                            {form.dairyDaily}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف حبوبات :</p>
                          <p className="text-[var(--new-green)]">
                            {form.beans}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف تخم مرغ به صورت هفتگی :</p>
                          <p className="text-[var(--new-green)]">
                            {form.eggWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف ماهی به صورت هفتگی:</p>
                          <p className="text-[var(--new-green)]">
                            {form.fishWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف ماکیان به صورت هفتگی :</p>
                          <p className="text-[var(--new-green)]">
                            {form.chickensWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">
                            میزان مصرف گوشت قرمز به صورت هفتگی:
                          </p>
                          <p className="text-[var(--new-green)]">
                            {form.redMeatWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان مصرف شیرینی به صورت هفتگی:</p>
                          <p className="text-[var(--new-green)]">
                            {form.sugarWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">
                            میزان مصرف نوشیدنی الکلی به صورت هفتگی:
                          </p>
                          <p className="text-[var(--new-green)]">
                            {form.alcoholWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">
                            میزان مصرف محصوالت تخمیری به صورت هفتگی:
                          </p>
                          <p className="text-[var(--new-green)]">
                            {form.fermentationWeekly}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className=""> مکمل‌هایی که مصرف می‌کنند:</p>
                          <p className="text-[var(--new-green)]">
                            {form.supplements}
                          </p>
                        </li>

                        <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
                          <p className="">میزان فعالیت بدنی در هفته :</p>
                          <p className="text-[var(--new-green)]">
                            {form.physicalActivity}
                          </p>
                        </li>
                      </li>
                    </section>

                    <section className="flex flex-col col-span-full gap-4">
                      <li className=" bg-[var(--new-green)] text-white w-fit rounded-lg p-2">
                        بیماری‌ها و وضعیت‌های خاص:
                      </li>
                      <ul className="grid grid-cols-4 pr-3 gap-2">
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت دیابت: {form.diabetes}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت فشارخون: {form.bloodPressure}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت مشکلات گوارشی: {form.digestiveProblems}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت خودایمنی: {form.selfSafety}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت سکته: {form.stroke}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت چربی کبد: {form.fattyLiver}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت مشکلات کلیوی: {form.kidneyProblems}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className="w-fit text-sm md:text-base">
                            وضعیت تیروئید: {form.thyroid}
                          </p>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <div className="w-fit text-sm md:text-base flex">
                            سرطان:
                            {form.cancer ? (
                              <p className="text-[var(--new-green)]"> دارد </p>
                            ) : (
                              <p className="text-[var(--new-green)]">ندارد</p>
                            )}
                          </div>
                        </li>
                        <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <div className="w-fit text-sm md:text-base flex">
                            میگرن:
                            {form.Migraine ? (
                              <p className="text-[var(--new-green)]">دارد</p>
                            ) : (
                              <p className="text-[var(--new-green)]">ندارد</p>
                            )}
                          </div>
                        </li>

                        <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className=" w-fit text-sm md:text-base">
                            سایر بیماری ها یا جراحی قبلی بیمار:
                          </p>
                          <p className="text-[var(--new-green)] w-fit text-sm md:text-base">
                            {form.otherSickness}
                          </p>
                        </li>
                        <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
                          <p className=" w-fit text-sm md:text-base">
                            داروهای مصرفی بیمار :
                          </p>
                          <p className="text-[var(--new-green)]  text-base w-fit">
                            {form.medicine}
                          </p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[var(--new-green)] text-2xl ">فرم BMI</h1>
                  <ul className="grid md:grid-cols-5 gap-y-1 md:gap-0 grid-cols-2 pr-3">
                    <li className="col-span-1 text-sm md:text-base">
                      سن :‌ {form.dietBmi?.age}
                    </li>
                    <li className="col-span-1 text-sm md:text-base">
                      قد :‌ {form.dietBmi?.height}
                    </li>
                    <li className="col-span-1 text-sm md:text-base">
                      وزن :‌ {form.dietBmi?.weight}
                    </li>
                    <li className="col-span-1 text-sm md:text-base">
                      دور شکم :‌ {form.dietBmi?.abdominalCircumference}
                    </li>
                    <li className="text-[var(--new-green)] col-span-1 text-sm md:text-base">
                      BMI :‌ {form.dietBmi?.bmi}
                    </li>
                  </ul>
                </div>
              </main>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ModalMediterraneanForm;
