"use client";
import * as yup from "yup";
import MainInput from "../MainInput";
import { useFormik } from "formik";
import GroupRadio from "../GroupRadio";
import MainButton from "../MainButton";

const MediterranealForm = () => {
  const MediterrealnSchema = yup.object().shape({
    dailyFruit: yup.string().required("Please select an option."),
    dailyVegetable: yup.string().required("جواب به این سوال الزامی است"),
    Cereals: yup.string().required("جواب به این سوال الزامی است"),
    dailyCereals: yup.string().required("جواب به این سوال الزامی است"),
    potatoAndStarchWeekly: yup.string().required("جواب به این سوال الزامی است"),
    oliveAndOliveOilDaily: yup.string().required("جواب به این سوال الزامی است"),
    nutsDaily: yup.string().required("جواب به این سوال الزامی است"),
    dairyDaily: yup.string().required("جواب به این سوال الزامی است"),
    beans: yup.string().required("جواب به این سوال الزامی است"),
    eggWeekly: yup.string().required("جواب به این سوال الزامی است"),
    fishWeekly: yup.string().required("جواب به این سوال الزامی است"),
    chickensWeekly: yup.string().required("جواب به این سوال الزامی است"),
    redMeatWeekly: yup.string().required("جواب به این سوال الزامی است"),
    sugarWeekly: yup.string().required("جواب به این سوال الزامی است"),
    alcoholWeekly: yup.string().required("جواب به این سوال الزامی است"),
    fermentationWeekly: yup.string().required("جواب به این سوال الزامی است"),
    physicalActivity: yup.string().required("جواب به این سوال الزامی است"),
    diabetes: yup.string().required("جواب به این سوال الزامی است"),
    // anemia: yup.string().required("جواب به این سوال الزامی است"),
    bloodPressure: yup.string().required("جواب به این سوال الزامی است"),
    digestiveProblems: yup.string().required("جواب به این سوال الزامی است"),
    selfSafety: yup.string().required("جواب به این سوال الزامی است"),
    stroke: yup.string().required("جواب به این سوال الزامی است"),
    fattyLiver: yup.string().required("جواب به این سوال الزامی است"),
    kidneyProblems: yup.string().required("جواب به این سوال الزامی است"),
    thyroid: yup.string(),
    cancer: yup.string(),
    supplements: yup.array().required("جواب به این سوال الزامی است"),
    Migraine: yup.string(),
    otherSickness: yup.string().required("جواب به این سوال الزامی است"),
    medicine: yup.string().required("جواب به این سوال الزامی است"),
    phoneNumber: yup.string(),
    // firstName: yup.string().required("جواب به این سوال الزامی است"),
    // lastName: yup.string().required("جواب به این سوال الزامی است"),
    // phoneNumberBMI: yup.string().required("جواب به این سوال الزامی است"),
    // age: yup.string().required("جواب به این سوال الزامی است"),
    // height: yup.string().required("جواب به این سوال الزامی است"),
    // weight: yup.string().required("جواب به این سوال الزامی است"),
    // gender: yup.string().required("جواب به این سوال الزامی است"),
    // abdominalCircumference: yup
    //   .string()
    //   .required("جواب به این سوال الزامی است"),
    // filePayment: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      dailyFruit: "",
      dailyVegetable: "",
      Cereals: "",
      dailyCereals: "",
      potatoAndStarchWeekly: "",
      oliveAndOliveOilDaily: "",
      nutsDaily: "",
      dairyDaily: "",
      beans: "",
      eggWeekly: "",
      fishWeekly: "",
      chickensWeekly: "",
      redMeatWeekly: "",
      sugarWeekly: "",
      alcoholWeekly: "",
      fermentationWeekly: "",
      physicalActivity: "",
      diabetes: "",
      // anemia: "",
      supplements: [],
      bloodPressure: "",
      digestiveProblems: "",
      selfSafety: "",
      stroke: "",
      fattyLiver: "",
      kidneyProblems: "",
      thyroid: "",
      cancer: false,
      Migraine: false,
      otherSickness: "",
      medicine: "",
      phoneNumber: localStorage.getItem('user'),
      // firstName: "",
      // lastName: "",
      // phoneNumberBMI: "",
      // age: "",
      // height: "",
      // weight: "",
      // gender: "",
      // abdominalCircumference: "",
      // filePayment: "",
    },
    validationSchema: MediterrealnSchema,
    onSubmit: async (data) => {
      Object.assign(data);
      // Handle form submission (e.g., make a request to your backend)
      console.log(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1>مصرف میوه به صورت روزانه؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="dailyFruit"
            checked={values.dailyFruit === "۱-۲ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ واحد"}
          />

          <GroupRadio
            name="dailyFruit"
            checked={values.dailyFruit === "۲-۳ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ واحد"}
          />

          <GroupRadio
            name="dailyFruit"
            checked={values.dailyFruit === "۳-۴ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ واحد"}
          />

          <GroupRadio
            name="dailyFruit"
            checked={values.dailyFruit === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.dailyFruit ? (
          <p className="text-red-600 text-sm">
            جواب دادن به سوال بالا الزامی است
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف سبزیجات به صورت روزانه؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="dailyVegetable"
            checked={values.dailyVegetable === "۱-۲ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ واحد"}
          />

          <GroupRadio
            name="dailyVegetable"
            checked={values.dailyVegetable === "۲-۳ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ واحد"}
          />

          <GroupRadio
            name="dailyVegetable"
            checked={values.dailyVegetable === "۳-۴ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ واحد"}
          />

          <GroupRadio
            name="dailyVegetable"
            checked={values.dailyVegetable === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.dailyVegetable ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>آیا غلات سبوس دار مصرف می کنید؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="Cereals"
            checked={values.Cereals === "بله"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"بله"}
          />

          <GroupRadio
            name="Cereals"
            checked={values.Cereals === "خیر"}
            onChange={handleChange}
            value={"خیر"}
            type="radio"
            header
          />
        </section>
        {errors.Cereals ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف غلات به صورت روزانه {"(نان و ماکارونی..)؟"}</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="dailyCereals"
            checked={values.dailyCereals === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="dailyCereals"
            checked={values.dailyCereals === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />
          <GroupRadio
            name="dailyCereals"
            checked={values.dailyCereals === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="dailyCereals"
            checked={values.dailyCereals === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.dailyCereals ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف سیب زمینی و سایر سبزیجات نشاسته ای در هفته ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="potatoAndStarchWeekly"
            checked={values.potatoAndStarchWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="potatoAndStarchWeekly"
            checked={values.potatoAndStarchWeekly === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />
          <GroupRadio
            name="potatoAndStarchWeekly"
            checked={values.potatoAndStarchWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="potatoAndStarchWeekly"
            checked={values.potatoAndStarchWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.potatoAndStarchWeekly ? (
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
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.oliveAndOliveOilDaily ? (
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
            name="nutsDaily"
            checked={values.nutsDaily === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="nutsDaily"
            checked={values.nutsDaily === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="nutsDaily"
            checked={values.nutsDaily === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />
          <GroupRadio
            name="nutsDaily"
            checked={values.nutsDaily === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.nutsDaily ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف محصولات لبنی به صورت روزانه ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲ بار"}
          />

          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "بیشتر از ۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"بیشتر از ۲ بار"}
          />
          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.dairyDaily ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف حبوبات {"(عدس و نخود و لوبیا و...)؟"}</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="beans"
            checked={values.beans === "روزانه"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"روزانه"}
          />
          <GroupRadio
            name="beans"
            checked={values.beans === "هفتگی"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هفتگی"}
          />

          <GroupRadio
            name="beans"
            checked={values.beans === "ماهیانه"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"ماهیانه"}
          />
          <GroupRadio
            name="beans"
            checked={values.beans === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.beans ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف تخم مرغ به صورت هفتگی ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="eggWeekly"
            checked={values.eggWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="eggWeekly"
            checked={values.eggWeekly === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="eggWeekly"
            checked={values.eggWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="eggWeekly"
            checked={values.eggWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.eggWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف ماهی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="fishWeekly"
            checked={values.fishWeekly === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="fishWeekly"
            checked={values.fishWeekly === "۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲ بار"}
          />

          <GroupRadio
            name="fishWeekly"
            checked={values.fishWeekly === "۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳ بار"}
          />
          <GroupRadio
            name="fishWeekly"
            checked={values.fishWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.fishWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف ماکیان به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="chickensWeekly"
            checked={values.chickensWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="chickensWeekly"
            checked={values.chickensWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="chickensWeekly"
            checked={values.chickensWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="chickensWeekly"
            checked={values.chickensWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.chickensWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف گوشت قرمز به صورت هفتگی ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="redMeatWeekly"
            checked={values.redMeatWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="redMeatWeekly"
            checked={values.redMeatWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="redMeatWeekly"
            checked={values.redMeatWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="redMeatWeekly"
            checked={values.redMeatWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.redMeatWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف شیرینی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="sugarWeekly"
            checked={values.sugarWeekly === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="sugarWeekly"
            checked={values.sugarWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />

          <GroupRadio
            name="sugarWeekly"
            checked={values.sugarWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="sugarWeekly"
            checked={values.sugarWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.sugarWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>مصرف نوشیدنی الکلی به صورت هفتگی ؟</h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="alcoholWeekly"
            checked={values.alcoholWeekly === "۱ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ بار"}
          />
          <GroupRadio
            name="alcoholWeekly"
            checked={values.alcoholWeekly === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
          />

          <GroupRadio
            name="alcoholWeekly"
            checked={values.alcoholWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="alcoholWeekly"
            checked={values.alcoholWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.alcoholWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>
          مصرف محصوالت تخمیری به صورت هفتگی {"(ترشیجات و لبنیات پروبیوتیک)؟"}
        </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="fermentationWeekly"
            checked={values.fermentationWeekly === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="fermentationWeekly"
            checked={values.fermentationWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="fermentationWeekly"
            checked={values.fermentationWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="fermentationWeekly"
            checked={values.fermentationWeekly === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.fermentationWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>چه مکمل هایی مصرف می کنید؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="selectedOptionSeventeenOne"
            checked={values.supplements.includes("ویتامین و مواد معدنی")}
            onChange={handleChange}
            header={false}
            onClick={() => {
              values.supplements.push("ویتامین و مواد معدنی");
              values.supplements = values.supplements.filter(
                (e) => e !== "هیچکدام"
              );
              console.log(values.supplements);
            }}
            type="radio"
            value={"ویتامین و مواد معدنی"}
          />
          <GroupRadio
            name="selectedOptionSeventeenTwo"
            checked={values.supplements.includes("مکمل پروتئینی")}
            onChange={handleChange}
            onClick={() => {
              values.supplements.push("مکمل پروتئینی");
              values.supplements = values.supplements.filter(
                (e) => e !== "هیچکدام"
              );
              console.log(values.supplements);
            }}
            header={false}
            type="radio"
            value={"مکمل پروتئینی"}
          />

          <GroupRadio
            name="selectedOptionSeventeenThree"
            // checked={values.selectedOptionSeventeenThree === "مکمل الغری و چربی سوز"}
            onChange={handleChange}
            checked={values.supplements.includes("مکمل الغری و چربی سوز")}
            onClick={() => {
              values.supplements.push("مکمل الغری و چربی سوز");
              values.supplements = values.supplements.filter(
                (e) => e !== "هیچکدام"
              );
              console.log(values.supplements.length);
            }}
            header={false}
            type="radio"
            value={"مکمل الغری و چربی سوز"}
          />
          <GroupRadio
            name="selectedOptionSeventeenFour"
            checked={values.supplements.includes("هیچکدام")}
            onChange={handleChange}
            onClick={() => {
              values.supplements.push("هیچکدام");
              values.supplements = values.supplements.filter(
                (e) => e !== "ویتامین و مواد معدنی"
              );
              values.supplements = values.supplements.filter(
                (e) => e !== "مکمل الغری و چربی سوز"
              );
              values.supplements = values.supplements.filter(
                (e) => e !== "مکمل پروتئینی"
              );
              console.log(values.supplements);
            }}
            value={"هیچکدام"}
            type="radio"
            header
          />
        </section>
        {errors.supplements ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1> میزان فعالیت بدنی در هفته ؟ </h1>
        <section className="grid grid-cols-4 items-center ">
          <GroupRadio
            name="physicalActivity"
            checked={values.physicalActivity === "۱ تا ۲ روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ تا ۲ روز"}
          />
          <GroupRadio
            name="physicalActivity"
            checked={values.physicalActivity === "۳-۴ روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ روز"}
          />

          <GroupRadio
            name="physicalActivity"
            checked={values.physicalActivity === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="physicalActivity"
            checked={values.physicalActivity === "هیچ"}
            onChange={handleChange}
            value={"هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.physicalActivity ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>کدام یک از مشکلات زیر را دارید یا قبلا داشتید؟</h1>
        <section className="grid grid-cols-6 gap-4 items-center ">
          <select
            onChange={handleChange}
            name="diabetes"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option
              selected={values.diabetes === "null" || values.diabetes === ""}
              value="null"
            >
              دیابت
            </option>
            <option
              selected={values.diabetes === "دیابت نوع ۱"}
              value="دیابت نوع ۱"
            >
              دیابت نوع ۱
            </option>
            <option
              selected={values.diabetes === "دیابت نوع ۲"}
              value="دیابت نوع ۲"
            >
              دیابت نوع ۲
            </option>
            <option
              selected={values.diabetes === "دیابت بارداری"}
              value="دیابت بارداری"
            >
              دیابت بارداری
            </option>
            <option selected={values.diabetes === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="bloodPressure"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.bloodPressure === "null"} value="null">
              فشار خون
            </option>
            <option
              selected={values.bloodPressure === "بالا بودن فشار خون"}
              value="بالا بودن فشار خون"
            >
              بالا بودن فشار خون
            </option>
            <option
              selected={values.bloodPressure === "پایین بودن فشار خون"}
              value="پایین بودن فشار خون"
            >
              پایین بودن فشار خون
            </option>
            <option selected={values.bloodPressure === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="digestiveProblems"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.digestiveProblems === "null"} value="null">
              مشکلات گوارشی
            </option>
            <option
              selected={values.digestiveProblems === "ریفالکس)ترش کردن)"}
              value="ریفالکس)ترش کردن)"
            >
              ریفالکس{"(ترش کردن)"}
            </option>
            <option selected={values.digestiveProblems === "نفخ"} value="نفخ">
              نفخ
            </option>
            <option
              selected={values.digestiveProblems === "یبوست"}
              value="یبوست"
            >
              یبوست
            </option>
            <option
              selected={values.digestiveProblems === "ندارم"}
              value="ندارم"
            >
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="selfSafety"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.selfSafety === "null"} value="null">
              خودایمنی
            </option>
            <option
              selected={values.selfSafety === "آسم و آلرژی"}
              value="آسم و آلرژی"
            >
              آسم و آلرژی
            </option>
            <option selected={values.selfSafety === "ام اس"} value="ام اس">
              ام اس
            </option>
            <option selected={values.selfSafety === "لوپوس"} value="لوپوس">
              لوپوس
            </option>
            <option
              selected={values.selfSafety === "آرتریت روماتوئید"}
              value="آرتریت روماتوئید"
            >
              آرتریت روماتوئید
            </option>
            <option
              selected={values.selfSafety === "سایر بیماری های خودایمنی"}
              value="سایر بیماری های خودایمنی"
            >
              سایر بیماری های خودایمنی
            </option>
            <option selected={values.selfSafety === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="stroke"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.stroke === "null"} value="null">
              سکته
            </option>
            <option selected={values.stroke === "سکته قلبی"} value="سکته قلبی">
              سکته قلبی
            </option>
            <option selected={values.stroke === "سکته مغزی"} value="سکته مغزی">
              سکته مغزی
            </option>
            <option selected={values.stroke === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="fattyLiver"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.fattyLiver === "null"} value="null">
              کبد چرب
            </option>
            <option
              selected={values.fattyLiver === "کبد چرب گرید ۱"}
              value="کبد چرب گرید ۱"
            >
              کبد چرب گرید ۱
            </option>
            <option
              selected={values.fattyLiver === "کبد چرب گرید ۲"}
              value="کبد چرب گرید ۲"
            >
              کبد چرب گرید ۲
            </option>
            <option
              selected={values.fattyLiver === "کبد چرب گرید ۳"}
              value="کبد چرب گرید ۳"
            >
              کبد چرب گرید ۳
            </option>
            <option selected={values.fattyLiver === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="kidneyProblems"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.kidneyProblems === "null"} value="null">
              مشکلات کلیوی
            </option>
            <option
              selected={values.kidneyProblems === "سنگ کلیه"}
              value="سنگ کلیه"
            >
              سنگ کلیه
            </option>
            <option
              selected={values.kidneyProblems === "نارسایی کلیه"}
              value="نارسایی کلیه"
            >
              نارسایی کلیه
            </option>
            <option
              selected={values.kidneyProblems === "عفونت مجاری ادرار "}
              value="عفونت مجاری ادرار "
            >
              عفونت مجاری ادرار
            </option>
            <option selected={values.kidneyProblems === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <select
            onChange={handleChange}
            name="thyroid"
            className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
          >
            <option selected={values.thyroid === "null"} value="null">
              تیروئید
            </option>
            <option selected={values.thyroid === "کم کار"} value="کم کار">
              کم کار
            </option>
            <option selected={values.thyroid === "پرکار"} value="پرکار">
              پرکار
            </option>
            <option
              selected={values.thyroid === "گره و التهاب تیروئید"}
              value="گره و التهاب تیروئید"
            >
              گره و التهاب تیروئید
            </option>
            <option selected={values.thyroid === "ندارم"} value="ندارم">
              ندارم
            </option>
          </select>

          <GroupRadio
            name="cancer"
            checked={values.cancer? values.cancer = true: false }
            onChange={handleChange}
            header={false}
            type="radio"
            value={"سرطان"}
          />
          <GroupRadio
            name="Migraine"
            checked={values.Migraine? values.Migraine = true: false }
            onChange={handleChange}
            header={false}
            type="radio"
            value={"میگرن"}
          />

          <MainInput
            name="otherSickness"
            parentClassName="col-span-2 [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="سایر بیماری ها یا جراحی قبلی را اینجا بنویسید "
          />
          <MainInput
            name="medicine"
            parentClassName="col-span-2 [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="چنانچه دارویی مصرف می کنید نام آن را ذکر کنید"
          />
          <MainInput
            name="files"
            parentClassName="col-span-2 [&>label]:text-base"
            onChange={handleChange}
            type="file"
            label="آخرین آزمایشات ارسال شود "
          />
        </section>
        {errors.digestiveProblems ||
        errors.diabetes ||
        errors.bloodPressure ||
        errors.selfSafety ||
        errors.stroke ||
        errors.fattyLiver ||
        errors.kidneyProblems ||
        errors.thyroid ||
        errors.otherSickness ||
        errors.medicine ? (
          <p className="text-red-600">جواب دادن به سوالات بالا الزامی است</p>
        ) : null}
        {/* <a
          href="/-5836954379280827307_121.jpg"
          download="-5836954379280827307_121.jpg"
        >
          حتما این فایل را دانلود کنید
        </a> */}

        {/* <section className="flex flex-col gap-6 mt-4">
          <h1 className=" bg-[var(--new-green)] p-4 text-white rounded-lg">
            فرم BMI
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <MainInput
              name="age"
              onChange={handleChange}
              parentClassName="[&>label]:text-base"
              placeholder="سن خود را اینجا وارد کنید"
              label="سن"
            />
            <MainInput
              name="height"
              onChange={handleChange}
              parentClassName="[&>label]:text-base"
              placeholder="قد خود را اینجا وارد کنید"
              label="قد"
            />
            <MainInput
              name="weight"
              onChange={handleChange}
              parentClassName="[&>label]:text-base"
              placeholder="وزن خود را اینجا وارد کنید"
              label="وزن"
            />
            <section className="col-span-1 flex flex-col gap-1">
              <label
                htmlFor="gender"
                className={`block  text-base font-medium `}
              >
                جنسیت
              </label>

              <select
                name="gender"
                onChange={handleChange}
                className={`rounded-lg w-full outline-none   py-2.5 px-4 border   flex items-center gap-1  bg-white `}
              >
                <option value="null" selected>
                  جنسیت
                </option>
                <option value="مرد">مرد</option>
                <option value="زن">زن</option>
              </select>
            </section>
            <MainInput
              name="abdominalCircumference"
              onChange={handleChange}
              parentClassName="[&>label]:text-base"
              placeholder="اندازه ی دور کمر خود را اینجا وارد کنید"
              label="اندازه ی دور کمر"
            />
          </div>
        </section>
        {errors.firstName ||
        errors.lastName ||
        errors.phoneNumberBMI ||
        errors.age ||
        errors.height ||
        errors.weight ||
        errors.gender ||
        errors.abdominalCircumference ? (
          <p className="text-red-600">جواب دادن به سوالات بالا الزامی است</p>
        ) : null}

        <section className="flex flex-col gap-6 mt-4">
          <h1 className=" bg-[var(--new-green)] p-4 text-white rounded-lg">
            ارسال فایل رسید پرداختی
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <MainInput
              onChange={handleChange}
              name="filePayment"
              parentClassName="[&>label]:text-base"
              type="file"
              label="فایل رسید پرداختی"
            />
          </div>
        </section> */}
      </div>

      <MainButton
        modern
        className="py-2.5 !text-xl !text-white col-span-5 w-full"
        value={"ثبت فرم"}
        type="submit"
      />
    </form>
  );
};
export default MediterranealForm;
