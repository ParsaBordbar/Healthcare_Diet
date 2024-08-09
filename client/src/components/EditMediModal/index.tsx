'use client'
import React, { useEffect } from 'react';
import Close from "/public/svg/close.svg";
import MainInput from '../MainInput';
import useEditMediterranean from '@/hooks/useEditMediterranean/useEditMediterranean';
import { string } from 'yup';
import { MediterraneanFormType } from '@/types';
import { stringify } from 'postcss';

type ModalMediterraneanFormType = {
    className: string;
    isShow: Function;
    show: boolean;
  dailyFruit?: string;
  dailyVegetable?: string;
  Cereals?: string;
  dailyCereals?: string;
  potatoAndStarchWeekly?: string;
  oliveAndOliveOilDaily?: string;
  nutsDaily?: string;
  dairyDaily?: string;
  beans?: string;
  eggWeekly?: string;
  fishWeekly?: string;
  chickensWeekly?: string;
  redMeatWeekly?: string;
  sugarWeekly?: string;
  alcoholWeekly?: string;
  fermentationWeekly?: string;
  supplements: string | [];
  appetite: string,
  physicalActivityHours: string,
  sport: string,
  preferredDrink: string,
  physicalActivity?: string;
  diabetes?: string;
  anemia?: string;
  bloodPressure?: string;
  digestiveProblems?: string;
  selfSafety?: string;
  stroke?: string;
  fattyLiver?: string;
  kidneyProblems?: string;
  thyroid?: string;
  cancer?: boolean;
  Migraine?: boolean;
  otherSickness?: string;
  medicine?: string;
  foodAllergies: string;
  pregnancyWeeks: string;
  breastfeeding: string;
  weightBeforePregnancy: string;
  phoneNumber: string;
  isChecked: boolean;
  createdAtGregorian?: string;
  createdAtJalali?: string;
//   files?: FileType[];
  dietBmi?: {
    height?: number;
    weight?: number;
    bmi?: number;
    age: number;
    linkTo?: string;
    abdominalCircumference?: number;
    whr: number;
    hipcircumference: number;
  };
//   payment?: FileType;
  _id: string;
};


function EditMediModal({   
    isShow,
    className,
    show,
    _id,}: ModalMediterraneanFormType) {
    const { data, error, handleChange } = useEditMediterranean(_id);

    const handleInputChange = (field: keyof MediterraneanFormType) => (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(field, event.target.value);
    };
  
  useEffect(() => {
    console.log(_id);
  }, [show]);

  return (
    <div className='flex justify-center items-center'>
        <section
      className={`
        fixed top-0 right-8 w-full h-screen transition-opacity duration-500 ease-in-out gap-2
        ${show ? 'opacity-100 z-50' : 'opacity-0 -z-50'} 
        ${className}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg flex gap-4 flex-col">
        <Close
        className="cursor-pointer bg-[var(--milky-white)] fixed w-8 h-8 p-1 transition-all ease-in-out duration-200 hover:!stroke-white hover:bg-red-600 rounded-full"
        onClick={() => {
        isShow(false);
        }}
        />
        <p className="mt-10 pr-4 sm:ps-12 pe-7 lg:text-2xl sm:text-xl text-base bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
          مواد غذایی مصرفی:
        </p>
        <div className=' grid grid-cols-5 gap-3'>
            <MainInput
              name="dailyFruit"
              parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
              onChange={handleInputChange('dailyFruit')}
              value={data?.dailyFruit}
              placeholder={data?.dailyFruit}
              label="میزان مصرف روزانه میوه "
            />
            <MainInput
            name="dailyVegetable"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('dailyFruit')}
            value={data?.dailyVegetable}
            placeholder={data?.dailyFruit}
            label="میزان مصرف روزانه سبزیجات:"
            />
            <MainInput
            name="Cereals"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('Cereals')}
            value={data?.Cereals}
            placeholder={data?.Cereals}            
            label="غلات سبوس ‌دار مصرف می‌کنند"
            />
            <MainInput
            name="dailyCereals"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('dailyCereals')}
            value={data?.dailyCereals}
            placeholder={data?.dailyCereals}              
            label="میزان مصرف روزانه غلات"
            />
            <MainInput
            name="potatoAndStarchWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('potatoAndStarchWeekly')}
            value={data?.potatoAndStarchWeekly}
            placeholder={data?.potatoAndStarchWeekly}  
            label="سایر سبزیجات نشاسته ای در هفته
            "/>

            <MainInput
            name="oliveAndOliveOilDaily"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('oliveAndOliveOilDaily')}
            value={data?.oliveAndOliveOilDaily}
            placeholder={data?.oliveAndOliveOilDaily}        
            label="میزان مصرف روزانه زیتون و روغن زیتون"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('nutsDaily')}
            value={data?.nutsDaily}
            placeholder={data?.nutsDaily}   
            label="میزان مصرف مغزها به صورت روزانه"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            label="میزان مصرف روزانه محصولات لبنی :"
            onChange={handleInputChange('dairyDaily')}
            value={data?.dairyDaily}
            placeholder={data?.dairyDaily}   
            />
            <MainInput
            label="میزان مصرف روزانه محصولات لبنی :"
            name="beans"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('beans')}
            value={data?.beans}
            placeholder={data?.beans} 
            />
            <MainInput
            name="eggWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('eggWeekly')}
            value={data?.eggWeekly}
            placeholder={data?.eggWeekly} 
            label="میزان مصرف تخم مرغ به صورت هفتگی 
            "/>

            <MainInput
            name="fishWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('fishWeekly')}
            value={data?.fishWeekly}
            placeholder={data?.fishWeekly} 
            label="میزان مصرف ماهی به صورت هفتگی"
            />
            <MainInput
            name="chickensWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('chickensWeekly')}
            value={data?.chickensWeekly}
            placeholder={data?.chickensWeekly} 
            label="میزان مصرف ماکیان به صورت هفتگی :"

            />
            <MainInput
            name="redMeatWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('redMeatWeekly')}
            value={data?.redMeatWeekly}
            placeholder={data?.redMeatWeekly} 
            label="میزان مصرف گوشت قرمز به صورت هفتگی:"
            />
            <MainInput
            name="sugarWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('sugarWeekly')}
            value={data?.sugarWeekly}
            placeholder={data?.sugarWeekly} 
            label="میزان مصرف شیرینی به صورت هفتگی:"
            />
            <MainInput
            name="alcoholWeekly"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('alcoholWeekly')}
            value={data?.alcoholWeekly}
            placeholder={data?.alcoholWeekly} 
            label="
            میزان مصرف نوشیدنی الکلی به صورت هفتگی:"/>

            <MainInput
            name="supplements"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('supplements')}
            value={data?.supplements}
            placeholder={"handle later"} 
            label="مکمل‌های که مصرفی"
            />
            <MainInput
            name="physicalActivity"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('physicalActivity')}
            value={data?.physicalActivity}
            placeholder={data?.physicalActivity} 
            label="فعالیت بدنی در هفته :"

            />
            <MainInput
            name="preferredDrink"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('preferredDrink')}
            value={data?.preferredDrink}
            placeholder={data?.preferredDrink} 
            label="تمایل نوشیدن :"
            />
            <MainInput
            name="appetite"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('appetite')}
            value={data?.appetite}
            placeholder={data?.appetite} 
            label="اشتهای بیمار:"
            />
            <MainInput
            name="physicalActivityHours"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('physicalActivityHours')}
            value={data?.physicalActivityHours}
            placeholder={data?.physicalActivityHours} 
            label="ساعت معمول وعده‌های غذایی:"/>
        </div>
        <p className="mt-10 pr-4 sm:ps-12 pe-7 lg:text-2xl sm:text-xl text-base bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
        بیماری‌ها و وضعیت‌های خاص:        
        </p>
        <div className=' grid grid-cols-5 gap-3'>
            <MainInput
            name="diabetes"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('diabetes')}
            value={data?.diabetes}
            placeholder={data?.diabetes} 
            label="وضعیت دیابت:"
            />
            <MainInput
            name="bloodPressure"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('bloodPressure')}
            value={data?.bloodPressure}
            placeholder={data?.bloodPressure} 
            label="وضعیت فشارخون:"
            />
            <MainInput
            name="digestiveProblems"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('digestiveProblems')}
            value={data?.digestiveProblems}
            placeholder={data?.digestiveProblems} 
            label="
            وضعیت مشکلات گوارشی:"
            />
            <MainInput
            name="selfSafety"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('selfSafety')}
            value={data?.selfSafety}
            placeholder={data?.selfSafety} 
            label="وضعیت خودایمنی:"
            />
            <MainInput
            name="stroke"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('stroke')}
            value={data?.stroke}
            placeholder={data?.stroke} 
            label="وضعیت سکته:"/>

            <MainInput
            name="fattyLiver"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('fattyLiver')}
            value={data?.fattyLiver}
            placeholder={data?.fattyLiver} 
            label="وضعیت چربی کبد:"/>

            <MainInput
            name="kidneyProblems"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('kidneyProblems')}
            value={data?.kidneyProblems}
            placeholder={data?.kidneyProblems} 
            label="وضعیت مشکلات کلیوی:"
            />
            <MainInput
            name="thyroid"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('thyroid')}
            value={data?.thyroid}
            placeholder={data?.thyroid} 
            label="وضعیت تیروئید"
            />
            <MainInput
            name="cancer"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('cancer')}
            value={`${data?.cancer}`}
            placeholder={`${data?.cancer}`} 
            label="سرطان"/>
            <MainInput
            name="Migraine"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            onChange={handleInputChange('Migraine')}
            value={`${data?.Migraine}`}
            placeholder={`${data?.Migraine}`} 
            label="میگرن"
            />
        </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default EditMediModal;
