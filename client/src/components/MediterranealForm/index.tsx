"use client";
import MainInput from "../MainInput";
import GroupRadio from "../GroupRadio";
import MainButton from "../MainButton";
import useMediterraneanForm from "@/validations/login/useMediterraneanForm";
import PriceCard from "../PriceCard";

const MediterranealForm = () => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    handleFileChange,
    paymentError,
    ...formik
  } = useMediterraneanForm();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1>مصرف میوه به صورت روزانه؟</h1>
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
            checked={values.potatoAndStarchWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />
          <GroupRadio
            name="potatoAndStarchWeekly"
            checked={values.potatoAndStarchWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "۱ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱ واحد"}
          />
          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "۲ واحد"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲ واحد"}
          />

          <GroupRadio
            name="oliveAndOliveOilDaily"
            checked={values.oliveAndOliveOilDaily === "۳ واحد یا بیشتر"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳ واحد یا بیشتر"}
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۱-۲ بار"}
          />
          <GroupRadio
            name="dairyDaily"
            checked={values.dairyDaily === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
            checked={values.eggWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
            checked={values.sugarWeekly === "۲-۳ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۲-۳ بار"}
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
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <h1>مصرف فست فود به صورت هفتگی ؟</h1>
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
          <GroupRadio
            name="fastFoodWeekly"
            checked={values.fastFoodWeekly === " ۱-۲ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={" ۱-۲ بار"}
          />
          <GroupRadio
            name="fastFoodWeekly"
            checked={values.fastFoodWeekly === "۳-۴ بار"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"۳-۴ بار"}
          />

          <GroupRadio
            name="fastFoodWeekly"
            checked={values.fastFoodWeekly === "هر روز"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"هر روز"}
          />
          <GroupRadio
            name="fastFoodWeekly"
            checked={values.fastFoodWeekly === "یک روز در ماه یا هیچ"}
            onChange={handleChange}
            value={"یک روز در ماه یا هیچ"}
            type="radio"
            header
          />
        </section>
        {errors.fastFoodWeekly ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>
          مصرف محصوالت تخمیری به صورت هفتگی {"(ترشیجات و لبنیات پروبیوتیک)؟"}
        </h1>
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <h1> میزان فعالیت بدنی در هفته ؟ </h1>
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
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
        <h1>تمایل نوشیدن چای در شما بیشتر است یا قهوه؟</h1>
        <section className="grid md:grid-cols-4 gap-4 sm:gap-0 items-center grid-cols-1">
          <GroupRadio
            name="preferredDrink"
            checked={values.preferredDrink === "چای"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"چای"}
          />
          <GroupRadio
            name="preferredDrink"
            checked={values.preferredDrink === "قهوه"}
            onChange={handleChange}
            header={false}
            type="radio"
            value={"قهوه"}
          />

          <GroupRadio
            name="preferredDrink"
            checked={values.preferredDrink === "هیچکدام"}
            onChange={handleChange}
            value={"هیچکدام"}
            type="radio"
            header
          />
        </section>
        {errors.preferredDrink ? (
          <p className="text-red-600">جواب دادن به سوال بالا الزامی است</p>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-4">
          <MainInput
            name="appetite"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            label="اشتها شما در چه موقع از روز و به کدام وعده غذایی بیشتر است؟ "
            placeholder="وعده مد نظر"
          />
          <MainInput
            name="physicalActivityHours"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            label="ساعت معمول وعده های غذایی شما(صبحانه، میان وعده، ناهار، عصرانه، شام)"
            placeholder="ساعت معمول وعده ها"
          />
           <MainInput
            name="sport"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            label="فعالیت بدنی شما چه نوع ورزشی، در چه ساعتی از روز و چند ساعت در روز می باشد؟ "
            placeholder="نوع ورزش"
          />
          <MainInput
            name="supplements"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-2 col-span-2"
            label="چه مکمل‌هایی مصرف می‌کنید؟
            (مکمل های غذایی: ویتامین D، امگا ،3 کلسیم و منیزیم، آهن و
              ...مکمل های ورزشی: وی، بی سی دبل ای، کراتین، ال کارنتین و .)"
                  placeholder="مکمل‌های مصرفی"
          />
      {
      errors.appetite ||
      errors.physicalActivityHours ||
      errors.sport ||
      errors.supplements ? (
        <p className="text-red-600">
          {errors?.appetite ||
            errors.physicalActivityHours ||
            errors.sport ||
            errors.supplements
            }
        </p>
      ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h1>کدام یک از مشکلات زیر را دارید یا قبلا داشتید؟</h1>
        <section className="grid grid-cols-4 gap-4 items-center">
          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">دیابت</label>
            <select
              onChange={handleChange}
              name="diabetes"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
            >
              <option value="ندارم" selected={values.diabetes === "ندارم"}>
                ندارم
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
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">مشکلات گوارشی</label>
            <select
              onChange={handleChange}
              name="digestiveProblems"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border flex items-center gap-1  bg-white `}
            >
              <option
                selected={values.digestiveProblems === "ندارم"}
                value="ندارم"
              >
                ندارم
              </option>
              <option
                selected={values.digestiveProblems === "ریفلاکس"}
                value="ریفلاکس"
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
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">خودایمنی</label>
            <select
              onChange={handleChange}
              name="selfSafety"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
            >
              <option selected={values.selfSafety === "ندارم"} value="ندارم">
                ندارم
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
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">سکته</label>
            <select
              onChange={handleChange}
              name="stroke"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
            >
              <option selected value="ندارم">
                ندارم
              </option>
              <option value="سکته قلبی">سکته قلبی</option>
              <option value="سکته مغزی">سکته مغزی</option>
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">کبد چرب</label>
            <select
              onChange={handleChange}
              name="fattyLiver"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border   flex items-center gap-1  bg-white `}
            >
              <option selected={values.fattyLiver === "ندارم"} value="ندارم">
                ندارم
              </option>
              <option selected={values.fattyLiver === "گرید۱"} value="گرید۱">
                کبد چرب گرید ۱
              </option>
              <option selected={values.fattyLiver === "گرید۲"} value="گرید۲">
                کبد چرب گرید ۲
              </option>
              <option selected={values.fattyLiver === "گرید۳"} value="گرید۳">
                کبد چرب گرید ۳
              </option>
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">مشکلات کلیوی</label>
            <select
              onChange={handleChange}
              name="kidneyProblems"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none   py-3 px-4 border flex items-center gap-1 bg-white `}
            >
              <option
                selected={values.kidneyProblems === "ندارم"}
                value="ندارم"
              >
                ندارم
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
                selected={values.kidneyProblems === "عفونت مجاری ادرار"}
                value="عفونت مجاری ادرار"
              >
                عفونت مجاری ادرار
              </option>
            </select>
          </div>

          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="mb-1">تیروئید</label>
            <select
              onChange={handleChange}
              name="thyroid"
              className={`col-span-full sm:col-span-3 lg:col-span-2 rounded-lg w-full outline-none py-3 px-4 border flex items-center gap bg-white `}
            >
              <option selected={values.thyroid === "ندارم"} value="ندارم">
                ندارم
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
            </select>
          </div>

          <div className="flex col-span-full md:col-span-1 gap-5 mx-10 items-center justify-between pt-6">
            <GroupRadio
              name="cancer"
              checked={values.cancer ? (values.cancer = true) : false}
              onChange={handleChange}
              header={false}
              type="checkbox"
              value={"سرطان"}
            />
            <GroupRadio
              name="Migraine"
              checked={values.Migraine ? (values.Migraine = true) : false}
              onChange={handleChange}
              header={false}
              type="checkbox"
              value={"میگرن"}
            />
          </div>

          <MainInput
            name="otherSickness"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="سایر بیماری ها یا جراحی قبلی را اینجا بنویسید "
          />
          <MainInput
            name="medicine"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="چنانچه دارویی مصرف می کنید نام آن را ذکر کنید"
          />
          <MainInput
            name="foodAllergies"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="چنانچه حساسیت غذایی دارید، نام آن را ذکر نمایید؟ "
          />
          <MainInput
            type="file"
            name="documents"
            multiple
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleFileChange}
            label="آخرین آزمایشات ارسال شود "
          />
          <h1 className=" bg-[var(--new-green)] p-4 text-white rounded-lg col-span-full">
            در صورت بارداری به سوالات زیر پاسخ دهید
          </h1>

          <MainInput
            name="pregnancyWeeks"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="در صورت بارداری، چندمین ماه بارداری را می گذرانید؟"
          />

          <MainInput
            name="weightBeforePregnancy"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label=" وزن قبل از بارداری را لطفا وارد کنید:"
          />
          <MainInput
            name="breastfeeding"
            parentClassName="lg:col-span-2 col-span-full [&>label]:text-base"
            onChange={handleChange}
            type="text"
            label="در صورت شیردهی، چندمین ماه شیردهی را می گذرانید؟"
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
      </div>
      <section className="flex flex-col gap-6 mt-4">
        <h1 className=" bg-[var(--new-green)] p-4 text-white rounded-lg">
          فرم BMI
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <MainInput
            name="age"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1  col-span-2"
            placeholder="سن خود را اینجا وارد کنید"
            label="سن"
          />
          <MainInput
            name="height"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="قد خود را اینجا وارد کنید"
            label="قد"
          />
          <MainInput
            name="weight"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="وزن خود را اینجا وارد کنید"
            label="وزن"
          />
          <MainInput
            name="abdominalCircumference"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور شکم خود را اینجا وارد کنید"
            label="دور شکم"
          />
          <MainInput
            name="hipcircumference"
            onChange={handleChange}
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="دور باسن"
          />
        </div>
      </section>
      {errors.age ||
      errors.height ||
      errors.weight ||
      errors.abdominalCircumference ||
      errors.hipcircumference ? (
        <p className="text-red-600">
          {errors?.age ||
            errors.height ||
            errors.weight ||
            errors.abdominalCircumference ||
            errors.hipcircumference}
        </p>
      ) : null}

      <section className="flex flex-col gap-6 mt-4">
        <h1 className=" bg-[var(--new-green)] p-4 text-white rounded-lg">
          ارسال فایل رسید پرداختی
        </h1>
        <div className="grid grid-cols-6 gap-6">
          <PriceCard
            className="col-span-full [&>div]:sm:!flex-row [&>div]:sm:!items-center"
            title={"پکیج اول رژیم غذایی"}
            desc={"رژیم غذایی تنها و بدون مشاوره"}
            price={"۲۱۵.۰۰۰ تومان"}
            disPrice={"۲۰۰.۰۰۰ تومان"}
          />
          <PriceCard
            className="col-span-full [&>div]:sm:!flex-row [&>div]:sm:!items-center"
            title={"پکیج دوم رژیم غذایی"}
            desc={"به همراه یک جلسه مشاوره تلفنی"}
            price={"۳۲۰.۰۰۰ تومان"}
            disPrice={"۳۰۰.۰۰۰ تومان"}
          />
          <PriceCard
            className="col-span-full [&>div]:sm:!flex-row [&>div]:sm:!items-center"
            title={"پکیج سوم رژیم غذایی"}
            desc={"سه جلسه مشاوره تلفنی در طول یک ماه"}
            price={"۵۳۰.۰۰۰ تومان"}
            disPrice={"۵۰۰.۰۰۰ تومان"}
          />
          <MainInput
            type="file"
            parentClassName="col-span-full"
            name="payment"
            onChange={handleFileChange}
            label="فایل رسید پرداختی"
          />
        </div>
        {paymentError && <div style={{ color: "red" }}>{paymentError}</div>}
      </section>
      {
        formik.isSubmitting ? (
          <MainButton
            modern
            className="py-2.5 !text-xl !text-white col-span-5 w-full"
            value={"در حال ارسال..."}
            type="submit"
            disabled={formik.isSubmitting}
          />
        ) : (
          <MainButton
            modern
            className="py-2.5 !text-xl !text-white col-span-5 w-full"
            value={"ثبت فرم"}
            type="submit"
            disabled={formik.isSubmitting}
          />
        )

        // <button type="submit" disabled={formik.isSubmitting}>
        //   {formik.isSubmitting ? "در حال ارسال..." : "ارسال"}
        // </button>
      }
    </form>
  );
};
export default MediterranealForm;
