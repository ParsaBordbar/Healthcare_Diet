"use client";
import * as yup from "yup";
import MainInput from "../MainInput";
import { useFormik } from "formik";
import GroupRadio from "../GroupRadio";
import MainButton from "../MainButton";

const MediterranealForm = () => {
  const schema = yup.object().shape({
    // Add other fields as needed
    selectedOption: yup.string().required("Please select an option."),
  });

  const MediterrealnSchema = yup.object().shape({
    selectedOptionOne: yup.string().required("Please select an option."),
    questionOne: yup.string().required("جواب به این سوال الزامی است"),
    questionTwo: yup.string().required("جواب به این سوال الزامی است"),
    questionThree: yup.string().required("جواب به این سوال الزامی است"),
    questionFour: yup.string().required("جواب به این سوال الزامی است"),
    questionFive: yup.string().required("جواب به این سوال الزامی است"),
    questionSix: yup.string().required("جواب به این سوال الزامی است"),
    questionSeven: yup.string().required("جواب به این سوال الزامی است"),
    questionEight: yup.string().required("جواب به این سوال الزامی است"),
    questionNine: yup.string().required("جواب به این سوال الزامی است"),
    questionTen: yup.string().required("جواب به این سوال الزامی است"),
    questionTwelve: yup.string().required("جواب به این سوال الزامی است"),
    questionThirteen: yup.string().required("جواب به این سوال الزامی است"),
    questionFourteen: yup.string().required("جواب به این سوال الزامی است"),
    questionFifteen: yup.string().required("جواب به این سوال الزامی است"),
    questionSixteen: yup.string().required("جواب به این سوال الزامی است"),
    questionSeventeen: yup.string().required("جواب به این سوال الزامی است"),
    questionEighteen: yup.string().required("جواب به این سوال الزامی است"),
    questionNineteen: yup.string().required("جواب به این سوال الزامی است"),
    questionTwenty: yup.string().required("جواب به این سوال الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      questionOne: "مصرف میوه به صورت روزانه؟",
      selectedOptionOne: "",
      questionTwo: "مصرف سبزیجات به صورت روزانه؟",
      selectedOptionTwo: "",
      questionThree: "آیا غلات سبوس دار مصرف می کنید؟",
      selectedOptionThree: "",
      questionFour: "مصرف سیب زمینی و سایر سبزیجات نشاسته ای در هفته؟",
      selectedOptionFour: "",
      questionFive: "مصرف غلات به صورت روزانه؟",
      selectedOptionFive: "",
      questionSix: "مصرف زیتون و روغن زیتون به صورت روزانه؟",
      selectedOptionSix: "",
      questionSeven: "مصرف مغز ها به صورت روزانه؟",
      selectedOptionSeven: "",
      questionEight: "مصرف محصولات لبنی به صورت روزانه؟",
      selectedOptionEight: "",
      questionNine: "مصرف حبوبات",
      selectedOptionNine: "",
      questionTen: "مصرف تخم مرغ به صورت هفتگی؟",
      selectedOptionTen: "",
      questionEleven: "مصرف ماهی به صورت هفتگی؟",
      selectedOptionEleven: "",
      questionTwelve: "مصرف ماکیان به صورت هفتگی؟",
      selectedOptionTwelve: "",
      questionThirteen: "مصرف گوشت قرمز به صورت هفتگی؟",
      selectedOptionThirteen: "",
      questionFourteen: "مصرف شیرینی به صورت هفتگی؟",
      selectedOptionFourteen: "",
      questionFifteen: "مصرف نوشیدنی الکلی به صورت هفتگی؟",
      selectedOptionFifteen: "",
      questionSixteen: "مصرف محصولات تخمیری به صورت هفتگی؟",
      selectedOptionSixteen: "",
      questionSeventeen: "چه مکمل هایی مصرف می کنید؟",
      selectedOptionSeventeenOne: "",
      selectedOptionSeventeenTwo: "",
      selectedOptionSeventeenThree: "",
      selectedOptionSeventeenFour: "",
      questionEighteen: "میزان فعالیت بدنی در هفته؟",
      selectedOptionEighteen: "",
      questionNineteen: "میزان فعالیت بدنی در هفته؟",
      selectedOptionNineteen: "",
      selectedOptionNineteenEmpty: "",
      questionTwenty: "کدام یک از مشکلات زیر را دارید یا قبلا داشتید؟",
      questionTwentyOne: "سایر بیماری ها یا جراحی قبلی را اینجا بنویسید .",
      selectedOptionTwenty: "",
      selectedOptionTwentyEmpty: "",
      selectedOptionTwentyOne: "",
      selectedOptionTwentyOneEmpty: "",
      selectedOptionTwentyTwo: "",
      selectedOptionTwentyTwoEmpty: "",
      selectedOptionTwentyThree: "",
      selectedOptionTwentyThreeEmpty: "",
      selectedOptionTwentyFour: "",
      selectedOptionTwentyFourEmpty: "",
      selectedOptionTwentyFive: "",
      selectedOptionTwentySix: "",
      selectedOptionTwentySixEmpty: "",
      selectedOptionTwentySeven: "",
      selectedOptionTwentyEight: "",
      selectedOptionTwentyNine: "",
      selectedOptionThirty: "",
      selectedOptionThirtyOne: "",
    },
    validationSchema: MediterrealnSchema,
    onSubmit: async ({ questionOne, selectedOptionOne }) => {
      // Handle form submission (e.g., make a request to your backend)
      console.log(
        "Form submitted successfully! Selected option:",
        questionOne,
        selectedOptionOne
      );
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  console.log(values);
  console.log(values.selectedOptionSeventeenFour, "this is log");

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1>مصرف میوه به صورت روزانه؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionOne"
            checked={values.selectedOptionOne === "۱-۲ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ واحد"}
          />

          <GroupRadio
            name="selectedOptionOne"
            checked={values.selectedOptionOne === "۲-۳ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ واحد"}
          />

          <GroupRadio
            name="selectedOptionOne"
            checked={values.selectedOptionOne === "۳-۴ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ واحد"}
          />

          <GroupRadio
            name="selectedOptionOne"
            checked={values.selectedOptionOne === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionOne ? (
          <p className="text-red-600 text-sm">
            جواب دادن به سوال بالا الزامی است
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف سبزیجات به صورت روزانه؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionTwo"
            checked={values.selectedOptionTwo === "۱-۲ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ واحد"}
          />

          <GroupRadio
            name="selectedOptionTwo"
            checked={values.selectedOptionTwo === "۲-۳ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ واحد"}
          />

          <GroupRadio
            name="selectedOptionTwo"
            checked={values.selectedOptionTwo === "۳-۴ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ واحد"}
          />

          <GroupRadio
            name="selectedOptionTwo"
            checked={values.selectedOptionTwo === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionTwo ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>آیا غلات سبوس دار مصرف می کنید؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionThree"
            checked={values.selectedOptionThree === "بلی"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"بلی"}
          />

          <GroupRadio
            name="selectedOptionThree"
            checked={values.selectedOptionThree === "خیر"}
            onChange={handleChange}
            value={"خیر"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionThree ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف غالت به صورت روزانه {"(نان و ماکارونی..)؟"}</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionFour"
            checked={values.selectedOptionFour === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionFour"
            checked={values.selectedOptionFour === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />
          <GroupRadio
            name="selectedOptionFour"
            checked={values.selectedOptionFour === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionFour"
            checked={values.selectedOptionFour === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionFour ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف سیب زمینی و سایر سبزیجات نشاسته ای در هفته ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionFive"
            checked={values.selectedOptionFive === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionFive"
            checked={values.selectedOptionFive === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />
          <GroupRadio
            name="selectedOptionFive"
            checked={values.selectedOptionFive === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionFive"
            checked={values.selectedOptionFive === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionFive ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>
          مصرف زیتون و روغن زیتون به صورت روزانه ؟{" "}
          {"(۱ واحد زیتون: ۵ تا ۱۰ عدد و ۱واحد روغن زیتون:۳-۲ قاشق مربا خوری)"}
        </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionSix"
            checked={values.selectedOptionSix === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionSix"
            checked={values.selectedOptionSix === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionSix"
            checked={values.selectedOptionSix === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionSix"
            checked={values.selectedOptionSix === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionSix ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>
          مصرف مغزها به صورت روزانه؟{" "}
          {
            "(۱ واحد مغز: ۱۰ -۶ عدد پسته و بادام وفندق و ... یا۲ تا ۳ قاشق غذاخوری انواع تخمه)"
          }
        </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionSeven"
            checked={values.selectedOptionSeven === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionSeven"
            checked={values.selectedOptionSeven === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="selectedOptionSeven"
            checked={values.selectedOptionSeven === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />
          <GroupRadio
            name="selectedOptionSeven"
            checked={values.selectedOptionSeven === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionSeven ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف محصولات لبنی به صورت روزانه ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionEight"
            checked={values.selectedOptionEight === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="selectedOptionEight"
            checked={values.selectedOptionEight === "۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲ بار"}
          />

          <GroupRadio
            name="selectedOptionEight"
            checked={values.selectedOptionEight === "بیشتر از ۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"بیشتر از ۲ بار"}
          />
          <GroupRadio
            name="selectedOptionEight"
            checked={values.selectedOptionEight === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionEight ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف حبوبات {"(عدس و نخود و لوبیا و...)؟"}</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionNine"
            checked={values.selectedOptionNine === "روزانه"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"روزانه"}
          />
          <GroupRadio
            name="selectedOptionNine"
            checked={values.selectedOptionNine === "هفتگی"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هفتگی"}
          />

          <GroupRadio
            name="selectedOptionNine"
            checked={values.selectedOptionNine === "ماهیانه"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"ماهیانه"}
          />
          <GroupRadio
            name="selectedOptionNine"
            checked={values.selectedOptionNine === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionNine ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف تخم مرغ به صورت هفتگی ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionTen"
            checked={values.selectedOptionTen === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionTen"
            checked={values.selectedOptionTen === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="selectedOptionTen"
            checked={values.selectedOptionTen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionTen"
            checked={values.selectedOptionTen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionTen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف ماهی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionEleven"
            checked={values.selectedOptionEleven === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="selectedOptionEleven"
            checked={values.selectedOptionEleven === "۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲ بار"}
          />

          <GroupRadio
            name="selectedOptionEleven"
            checked={values.selectedOptionEleven === "۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳ بار"}
          />
          <GroupRadio
            name="selectedOptionEleven"
            checked={values.selectedOptionEleven === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionEleven ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف ماکیان به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionTwelve"
            checked={values.selectedOptionTwelve === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionTwelve"
            checked={values.selectedOptionTwelve === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionTwelve"
            checked={values.selectedOptionTwelve === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionTwelve"
            checked={values.selectedOptionTwelve === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionTwelve ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف گوشت قرمز به صورت هفتگی ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionThirteen"
            checked={values.selectedOptionThirteen === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionThirteen"
            checked={values.selectedOptionThirteen === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionThirteen"
            checked={values.selectedOptionThirteen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionThirteen"
            checked={values.selectedOptionThirteen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionThirteen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف شیرینی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionFourteen"
            checked={values.selectedOptionFourteen === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="selectedOptionFourteen"
            checked={values.selectedOptionFourteen === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />

          <GroupRadio
            name="selectedOptionFourteen"
            checked={values.selectedOptionFourteen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionFourteen"
            checked={values.selectedOptionFourteen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionFourteen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف نوشیدنی الکلی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionFifteen"
            checked={values.selectedOptionFifteen === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="selectedOptionFifteen"
            checked={values.selectedOptionFifteen === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="selectedOptionFifteen"
            checked={values.selectedOptionFifteen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionFifteen"
            checked={values.selectedOptionFifteen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionFifteen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>
          مصرف محصوالت تخمیری به صورت هفتگی {"(ترشیجات و لبنیات پروبیوتیک)؟"}
        </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionSixteen"
            checked={values.selectedOptionSixteen === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="selectedOptionSixteen"
            checked={values.selectedOptionSixteen === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="selectedOptionSixteen"
            checked={values.selectedOptionSixteen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionSixteen"
            checked={values.selectedOptionSixteen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionSixteen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>چه مکمل هایی مصرف می کنید؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionSeventeenOne"
            checked={
              values.selectedOptionSeventeenOne === "ویتامین و مواد معدنی" &&
              values.selectedOptionSeventeenFour == "null"
            }
            onChange={handleChange}
            header={false}
            onClick={() => {
              values.selectedOptionSeventeenFour = "null";
            }}
            type="radio"
            value={"ویتامین و مواد معدنی"}
          />
          <GroupRadio
            name="selectedOptionSeventeenTwo"
            checked={
              values.selectedOptionSeventeenTwo === "مکمل پروتئینی" &&
              values.selectedOptionSeventeenFour == "null"
            }
            onChange={handleChange}
            onClick={() => {
              values.selectedOptionSeventeenFour = "null";
            }}
            header={false}
            type="radio"
            value={"مکمل پروتئینی"}
          />

          <GroupRadio
            name="selectedOptionSeventeenThree"
            // checked={values.selectedOptionSeventeenThree === "مکمل الغری و چربی سوز"}
            onChange={handleChange}
            checked={
              values.selectedOptionSeventeenThree === "مکمل الغری و چربی سوز" &&
              values.selectedOptionSeventeenFour == "null"
            }
            onClick={() => {
              values.selectedOptionSeventeenFour = "null";
            }}
            header={false}
            type="radio"
            value={"مکمل الغری و چربی سوز"}
          />
          <GroupRadio
            name="selectedOptionSeventeenFour"
            checked={
              values.selectedOptionSeventeenFour != "null" &&
              values.selectedOptionSeventeenFour == "هیچکدام"
            }
            onChange={handleChange}
            onClick={() => {
              console.log(values.selectedOptionSeventeenFour, "this is log");
              values.selectedOptionSeventeenFour == "هیچکدام";
              values.selectedOptionSeventeenOne = "null";
              values.selectedOptionSeventeenTwo = "null";
              values.selectedOptionSeventeenThree = "null";
            }}
            value={"هیچکدام"}
            type="radio"
            header
          />
        </section>
        {/* {errors.questionOne ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null} */}
      </div>

      <div className="flex flex-col gap-4">
        <h1> میزان فعالیت بدنی در هفته ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionEighteen"
            checked={values.selectedOptionEighteen === "۱ تا ۲ روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ تا ۲ روز"}
          />
          <GroupRadio
            name="selectedOptionEighteen"
            checked={values.selectedOptionEighteen === "۳-۴ روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ روز"}
          />

          <GroupRadio
            name="selectedOptionEighteen"
            checked={values.selectedOptionEighteen === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="selectedOptionEighteen"
            checked={values.selectedOptionEighteen === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.selectedOptionEighteen ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>کدام یک از مشکال ت زیر را دارید یا قبال داشتید؟</h1>
        <section className="grid grid-cols-6 gap-4 items-center ">
          <select
            onChange={handleChange}
            name="selectedOptionNineteen"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={
                values.selectedOptionNineteen === "null" ||
                values.selectedOptionNineteen === ""
              }
              value="null"
            >
              دیابت
            </option>
            <option
              selected={values.selectedOptionNineteen === "دیابت نوع ۱"}
              value="دیابت نوع ۱"
            >
              دیابت نوع ۱
            </option>
            <option
              selected={values.selectedOptionNineteen === "دیابت نوع ۲"}
              value="دیابت نوع ۲"
            >
              دیابت نوع ۲
            </option>
            <option
              selected={values.selectedOptionNineteen === "دیابت بارداری"}
              value="دیابت بارداری"
            >
              دیابت بارداری
            </option>
            <option
              selected={values.selectedOptionNineteenEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwenty"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwenty === "null"}
              value="null"
            >
              فشار خون
            </option>
            <option
              selected={values.selectedOptionTwenty === "بالا بودن فشار خون"}
              value="بالا بودن فشار خون"
            >
              بالا بودن فشار خون
            </option>
            <option
              selected={values.selectedOptionTwenty === "پایین بودن فشار خون"}
              value="پایین بودن فشار خون"
            >
              پایین بودن فشار خون
            </option>
            <option
              selected={values.selectedOptionTwentyEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentyOne"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentyOne === "null"}
              value="null"
            >
              مشکلات گوارشی
            </option>
            <option
              selected={values.selectedOptionTwentyOne === "ریفالکس)ترش کردن)"}
              value="ریفالکس)ترش کردن)"
            >
              ریفالکس{"(ترش کردن)"}
            </option>
            <option
              selected={values.selectedOptionTwentyOne === "نفخ"}
              value="نفخ"
            >
              نفخ
            </option>
            <option
              selected={values.selectedOptionTwentyOne === "یبوست"}
              value="یبوست"
            >
              یبوست
            </option>
            <option
              selected={values.selectedOptionTwentyOneEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentyTwo"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentyTwo === "null"}
              value="null"
            >
              خودایمنی
            </option>
            <option
              selected={values.selectedOptionTwentyTwo === "آسم و آلرژی"}
              value="آسم و آلرژی"
            >
              آسم و آلرژی
            </option>
            <option
              selected={values.selectedOptionTwentyTwo === "ام اس"}
              value="ام اس"
            >
              ام اس
            </option>
            <option
              selected={values.selectedOptionTwentyTwo === "لوپوس"}
              value="لوپوس"
            >
              لوپوس
            </option>
            <option
              selected={values.selectedOptionTwentyTwo === "آرتریت روماتوئید"}
              value="آرتریت روماتوئید"
            >
              آرتریت روماتوئید
            </option>
            <option
              selected={
                values.selectedOptionTwentyTwo === "سایر بیماری های خودایمنی"
              }
              value="سایر بیماری های خودایمنی"
            >
              سایر بیماری های خودایمنی
            </option>
            <option
              selected={values.selectedOptionTwentyTwoEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentyThree"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentyThree === "null"}
              value="null"
            >
              سکته
            </option>
            <option
              selected={values.selectedOptionTwentyThree === "سکته قلبی"}
              value="سکته قلبی"
            >
              سکته قلبی
            </option>
            <option
              selected={values.selectedOptionTwentyThree === "سکته مغزی"}
              value="سکته مغزی"
            >
              سکته مغزی
            </option>
            <option
              selected={values.selectedOptionTwentyThreeEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentyFour"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentyFour === "null"}
              value="null"
            >
              کبد چرب
            </option>
            <option
              selected={values.selectedOptionTwentyFour === "کبد چرب گرید ۱"}
              value="کبد چرب گرید ۱"
            >
              کبد چرب گرید ۱
            </option>
            <option
              selected={values.selectedOptionTwentyFour === "کبد چرب گرید ۲"}
              value="کبد چرب گرید ۲"
            >
              کبد چرب گرید ۲
            </option>
            <option
              selected={values.selectedOptionTwentyFour === "کبد چرب گرید ۳"}
              value="کبد چرب گرید ۳"
            >
              کبد چرب گرید ۳
            </option>
            <option
              selected={values.selectedOptionTwentyFourEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentyFive"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentyFive === "null"}
              value="null"
            >
              مشکلات کلیوی
            </option>
            <option
              selected={values.selectedOptionTwentyFive === "سنگ کلیه"}
              value="سنگ کلیه"
            >
              سنگ کلیه
            </option>
            <option
              selected={values.selectedOptionTwentyFive === "نارسایی کلیه"}
              value="نارسایی کلیه"
            >
              نارسایی کلیه
            </option>
            <option
              selected={
                values.selectedOptionTwentyFive === "عفونت مجاری ادرار "
              }
              value="عفونت مجاری ادرار "
            >
              عفونت مجاری ادرار
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selectedOptionTwentySix"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.selectedOptionTwentySix === "null"}
              value="null"
            >
              تیروئید
            </option>
            <option
              selected={values.selectedOptionTwentySix === "کم کار"}
              value="کم کار"
            >
              کم کار
            </option>
            <option
              selected={values.selectedOptionTwentySix === "پرکار"}
              value="پرکار"
            >
              پرکار
            </option>
            <option
              selected={
                values.selectedOptionTwentySix === "گره و التهاب تیروئید"
              }
              value="گره و التهاب تیروئید"
            >
              گره و التهاب تیروئید
            </option>
            <option
              selected={values.selectedOptionTwentySixEmpty === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <GroupRadio
            name="selectedOptionTwentySeven"
            checked={values.selectedOptionTwentySeven === "سرطان"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"سرطان"}
          />
          <GroupRadio
            name="selectedOptionTwentyEight"
            checked={values.selectedOptionTwentyEight === "میگرن"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"میگرن"}
          />

          <MainInput
            name="selectedOptionTwentyNine"
            parentClassName="col-span-2"
            onChange={handleChange}
            type="text"
            label="سایر بیماری ها یا جراحی قبلی را اینجا بنویسید ."
          />
          <MainInput
            name="selectedOptionThirty"
            parentClassName="col-span-2"
            onChange={handleChange}
            type="text"
            label="چنانچه دارویی مصرف می کنید نام آن را ذکر نمایید ."
          />
          <MainInput
            name="selectedOptionThirtyOne"
            parentClassName="col-span-2"
            onChange={handleChange}
            type="file"
            label="آخرین آزمایشات ارسال شود "
          />
        </section>
        <a
          href="/-5836954379280827307_121.jpg"
          download="-5836954379280827307_121.jpg"
        >
          حتما این فایل را دانلود کنید
        </a>

        {errors.questionTwenty ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      {/* {errors.questionOne && <span>{errors.questionOne}</span>} */}
      <MainButton
        simple
        className="bg-[var(--rating-color)] py-2.5 !text-xl !text-white col-span-5 w-full"
        value={"ثبت فرم"}
        type="submit"
      />
    </form>
  );
};
export default MediterranealForm;
