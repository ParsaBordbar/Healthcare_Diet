"use client";
import * as yup from "yup";
import MainInput from "../MainInput";
import MainButton from "../MainButton";
import { useRef } from "react";
import { Formik, Field, Form } from "formik";
import GroupRadio from "../GroupRadio";

const MediterranealForm = () => {
  const InputRef = useRef<HTMLInputElement | null>(null);
  const InputRef2 = useRef<HTMLInputElement | null>(null);
  const InputRef3 = useRef<HTMLInputElement | null>(null);
  const InputRef4 = useRef<HTMLInputElement | null>(null);

  console.log(
    InputRef.current?.placeholder,
    InputRef2.current?.placeholder,
    InputRef3,
    InputRef4
  );

  const SignupSchema = yup.object().shape({
    questionOne: yup.string().required("جواب به این سوال الزامی است"),
    questionTwo: yup.string().required("جواب به این سوال الزامی است"),
    questionThree: yup.string().required("جواب به این سوال الزامی است"),
    questionFour: yup.string().required("جواب به این سوال الزامی است"),
    questionFive: yup.string().required("جواب به این سوال الزامی است"),
    questionSix: yup.string().required("جواب به این سوال الزامی است"),
    questionSeven: yup.string().required("جواب به این سوال الزامی است"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          questionOne: "",
          questionTwo: "",
          questionThree: "",
          questionFour: "",
          questionFive: "",
          questionSix: "",
          questionSeven: "",
          questionEight: "",
          questionNine: "",
          questionTen: "",
          questionEleven: "",
          questionTwelve: "",
          questionThirteen: "",
          questionFourteen: "",
          questionFifteen: "",
          questionSixteen: "",
          questionSeventeenOne: "",
          questionSeventeenTwo: "",
          questionSeventeenThree: "",
          questionSeventeenFour: "",
          questionEighteen: "",
          questionNineteen: "",
          questionTwenty: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values, InputRef.current?.placeholder);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1>مصرف میوه به صورت روزانه؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"۱-۲ واحد"}
                />

                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"۲-۳ واحد"}
                />

                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"۳-۴ واحد"}
                />

                <GroupRadio name="questionOne" value={"هیچ"} header />
              </section>
              {errors.questionOne ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف سبزیجات به صورت روزانه؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionTwo"
                  header={false}
                  value={"۱-۲ واحد"}
                />

                <GroupRadio
                  name="questionTwo"
                  header={false}
                  value={"۲-۳ واحد"}
                />

                <GroupRadio
                  name="questionTwo"
                  header={false}
                  value={"۳-۴ واحد"}
                />

                <GroupRadio name="questionTwo" value={"هیچ"} header />
              </section>
              {errors.questionTwo ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>آیا غلات سبوس دار مصرف می کنید؟</h1>
              <section className="flex items-center justify-start gap-10">
                <GroupRadio name="questionThree" header={false} value={"خیر"} />

                <GroupRadio name="questionThree" header={false} value={"بلی"} />
              </section>
              {errors.questionThree ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف غلات به صورت روزانه{"(نان و برنج و ماکارونی و ...)"}</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionFour"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionFour"
                  header={false}
                  value={"۲-۳ بار"}
                />

                <GroupRadio
                  name="questionFour"
                  header={false}
                  value={"۳-۴ بار"}
                />

                <GroupRadio name="questionFour" value={"هیچ"} header />
              </section>
              {errors.questionFour ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف سیب زمینی و سایر سبزیجات نشاسته ای در هفته؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionFive"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionFive"
                  header={false}
                  value={"۳-۴ بار"}
                />

                <GroupRadio
                  name="questionFive"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionFive" value={"هیچ"} header />
              </section>
              {errors.questionFive ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>
                مصرف زیتون و روغن زیتون به صورت روزانه؟{" "}
                <mark className="text-zinc-500 bg-transparent">
                  {
                    "(۱ واحد زیتون۵ تا 10 عدد و 1 وتحد روغن زیتون 3-2 قاشق مرباخوری)"
                  }
                </mark>
              </h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionSix"
                  header={false}
                  value={"1 واحد"}
                />

                <GroupRadio
                  name="questionSix"
                  header={false}
                  value={"2 واحد"}
                />

                <GroupRadio
                  name="questionSix"
                  header={false}
                  value={"3 واحد یا بیشتر"}
                />

                <GroupRadio name="questionSix" value={"هیچ"} header />
              </section>
              {errors.questionSix ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>
                مصرف مغز ها به صورت روزانه؟
                <mark className="text-zinc-500 bg-transparent">
                  {
                    "(۱ واحد مغز: 6-10 عدد پسته و بادام فندق و... یا 2 تا 3 قاشق غذاخوری انواع تخمه)"
                  }
                </mark>
              </h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionSeven"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionSeven"
                  header={false}
                  value={"۲-۳ بار"}
                />
                <GroupRadio
                  name="questionSeven"
                  header={false}
                  value={"۳-۴ بار"}
                />

                <GroupRadio name="questionSeven" value={"هیچ"} header />
              </section>
              {errors.questionSeven ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف محصولات لبنی به صورت روزانه؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionEight"
                  header={false}
                  value={"1 بار"}
                />

                <GroupRadio
                  name="questionEight"
                  header={false}
                  value={"2 بار"}
                />
                <GroupRadio
                  name="questionEight"
                  header={false}
                  value={"بیشتر از ۲ بار"}
                />

                <GroupRadio name="questionEight" value={"هیچ"} header />
              </section>
              {errors.questionEight ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>
                مصرف حبوبات
                <mark className="text-zinc-500 bg-transparent">
                  {"(عدس و نخود و لوبیاو...)؟"}
                </mark>
              </h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionNine"
                  header={false}
                  value={"روزانه"}
                />

                <GroupRadio
                  name="questionNine"
                  header={false}
                  value={"هفتگی"}
                />
                <GroupRadio
                  name="questionNine"
                  header={false}
                  value={"ماهیانه"}
                />

                <GroupRadio name="questionNine" value={"هیچ"} header />
              </section>
              {errors.questionNine ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف تخم مرغ به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionTen"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionTen"
                  header={false}
                  value={"۳-۴ بار"}
                />
                <GroupRadio
                  name="questionTen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionTen" value={"هیچ"} header />
              </section>
              {errors.questionTen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف ماهی به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionEleven"
                  header={false}
                  value={"۱ بار"}
                />

                <GroupRadio
                  name="questionEleven"
                  header={false}
                  value={"2 بار"}
                />
                <GroupRadio
                  name="questionEleven"
                  header={false}
                  value={"۳ بار"}
                />

                <GroupRadio name="questionEleven" value={"هیچ"} header />
              </section>
              {errors.questionEleven ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف ماکیان به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionTwelve"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionTwelve"
                  header={false}
                  value={"۳-۴ بار"}
                />
                <GroupRadio
                  name="questionTwelve"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionTwelve" value={"هیچ"} header />
              </section>
              {errors.questionTwelve ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف گوشت قرمز به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionThirteen"
                  header={false}
                  value={"۱-۲ بار"}
                />

                <GroupRadio
                  name="questionThirteen"
                  header={false}
                  value={"۳-۴ بار"}
                />
                <GroupRadio
                  name="questionThirteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionThirteen" value={"هیچ"} header />
              </section>
              {errors.questionThirteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف شیرینی به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionFourteen"
                  header={false}
                  value={"۱ بار"}
                />

                <GroupRadio
                  name="questionFourteen"
                  header={false}
                  value={"۲-۳ بار"}
                />
                <GroupRadio
                  name="questionFourteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionFourteen" value={"هیچ"} header />
              </section>
              {errors.questionFourteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>مصرف نوشیدنی الکلی به صورت هفتگی؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionFifteen"
                  header={false}
                  value={"۱ بار"}
                />

                <GroupRadio
                  name="questionFifteen"
                  header={false}
                  value={"۲-۳ بار"}
                />
                <GroupRadio
                  name="questionFifteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionFifteen" value={"هیچ"} header />
              </section>
              {errors.questionFifteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>
                مصرف محصولات تخمیری به صورت هفتگی؟
                <mark className="bg-transparent text-zinc-600">
                  {"(ترشیجات و لبنیاب پروبیوتیک)"}
                </mark>
              </h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionSixteen"
                  header={false}
                  value={"۱ بار"}
                />

                <GroupRadio
                  name="questionSixteen"
                  header={false}
                  value={"۲-۳ بار"}
                />
                <GroupRadio
                  name="questionSixteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name="questionSixteen" value={"هیچ"} header />
              </section>
              {errors.questionSixteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>چه مکمل هایی مصرف می کنید؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionSixteenOne"
                  header={false}
                  value={"ویتامین و مواد معدنی"}
                />

                <GroupRadio
                  name="questionSixteenTwo"
                  header={false}
                  value={"مکمل پروتینی"}
                />
                <GroupRadio
                  name="questionSixteenThree"
                  header={false}
                  value={"مکمل لاغری و چربی سوز"}
                />

                <GroupRadio
                  name={
                    `questionSixteenThree` &&
                    `questionSixteenTwo` &&
                    `questionSixteenOne`
                  }
                  value={"هیچکدام"}
                  header
                />
              </section>
              {errors.questionSeventeenOne &&
              errors.questionSeventeenTwo &&
              errors.questionSeventeenThree &&
              errors.questionSeventeenFour ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>چه مکمل هایی مصرف می کنید؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionSixteenOne"
                  header={false}
                  value={"ویتامین و مواد معدنی"}
                />

                <GroupRadio
                  name="questionSixteenTwo"
                  header={false}
                  value={"مکمل پروتینی"}
                />
                <GroupRadio
                  name="questionSixteenThree"
                  header={false}
                  value={"مکمل لاغری و چربی سوز"}
                />

                <GroupRadio
                  name={
                    `questionSixteenThree` &&
                    `questionSixteenTwo` &&
                    `questionSixteenOne`
                  }
                  value={"هیچکدام"}
                  header
                />
              </section>
              {errors.questionSeventeenOne ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>میزان فعالیت بدنی در هفته؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionEighteen"
                  header={false}
                  value={"۱ تا ۲ روز"}
                />

                <GroupRadio
                  name="questionEighteen"
                  header={false}
                  value={"۳-۴ روز"}
                />
                <GroupRadio
                  name="questionEighteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name={"questionEighteen"} value={"هیچ"} header />
              </section>
              {errors.questionEighteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>میزان فعالیت بدنی در هفته؟</h1>
              <section className="grid grid-cols-4 items-center ">
                <GroupRadio
                  name="questionNineteen"
                  header={false}
                  value={"۱ تا ۲ روز"}
                />

                <GroupRadio
                  name="questionNineteen"
                  header={false}
                  value={"۳-۴ روز"}
                />
                <GroupRadio
                  name="questionNineteen"
                  header={false}
                  value={"هر روز"}
                />

                <GroupRadio name={"questionNineteen"} value={"هیچ"} header />
              </section>
              {errors.questionNineteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>کدام یک از مشکلات زیر را دارید یا قبلا داشتید؟</h1>
              <section className="grid grid-cols-4 gap-4 items-center ">
                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    دیابت
                  </option>
                  <option value="نوع ۱">نوع ۱</option>
                  <option value="نوع ۲">نوع ۲</option>
                  <option value="بارداری">بارداری</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    کم خونی
                  </option>
                  <option value="فقر آهن">فقر آهن</option>
                  <option value="مینور">مینور</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    فشار خون
                  </option>
                  <option value="بالا بودن فشار خون">بالا بودن فشار خون</option>
                  <option value="پایین بودن فشار خون">
                    پایین بودن فشار خون
                  </option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    مشکلات گوارشی
                  </option>
                  <option value="ریفلاکس(ترش کردن)">ریفلاکس(ترش کردن)</option>
                  <option value="نفخ">نفخ</option>
                  <option value="یبوست">یبوست</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    خود ایمنی{" "}
                  </option>
                  <option value="آسم و آلرژی">آسم و آلرژی</option>
                  <option value="ام اس">ام اس</option>
                  <option value="لوپوس">لوپوس</option>
                  <option value="آرتریت روماتويید">آرتریت روماتويید</option>
                  <option value="سایر بیاری های خود ایمنی">
                    سایر بیاری های خود ایمنی
                  </option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    سکته
                  </option>
                  <option value="سکته قلبی">سکته قلبی</option>
                  <option value="سکته مغزی">سکته مغزی</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    کبد چرب
                  </option>
                  <option value="گرید ۱">گرید ۱</option>
                  <option value="گرید ۲">گرید ۲</option>
                  <option value="گرید ۳">گرید ۳</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    مشکلات کلیوی
                  </option>
                  <option value="سنگ کلیه">سنگ کلیه</option>
                  <option value="نارسایی کلیه">نارسایی کلیه</option>
                  <option value="عفونت مجاری ادرار">عفونت مجاری ادرار</option>
                </select>

                <select
                  className={`rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
                >
                  <option value="null" selected>
                    تیرویید
                  </option>
                  <option value="کم کار">کم کار</option>
                  <option value="پر کار">پر کار</option>
                  <option value="گره و التهاب تیرویید">
                    گره و التهاب تیرویید
                  </option>
                </select>

                <GroupRadio
                  name="questionTwenty"
                  header={false}
                  value={"چربی و کلسترول خون"}
                />
                <GroupRadio
                  name="questionTwenty"
                  header={false}
                  value={"سرطان"}
                />

                <GroupRadio
                  name="questionTwenty"
                  header={false}
                  value={"میگرن"}
                />
              </section>

              {errors.questionTwenty ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4">
              <h1>میزان فعالیت بدنی در هفته؟</h1>
              <section className="grid grid-cols-3 items-center gap-4">
                <MainInput
                  label="سایر بیماری ها یا جراحی فبلی را اینجا بفرستید"
                  placeholder="جراحی قلب ..."
                />
                <MainInput
                  label="چنانچه دارویی مصرف میکنید نام آن را ذکر کنید"
                  placeholder=" ضد افسردگی ..."
                />
                <MainInput label="آخرین آزمایشات ارسال شود" type="file" />
              </section>
              {errors.questionNineteen ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <MainButton gradient className="w-1/2 py-2" value="ثبت" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MediterranealForm;
