import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import api from '@/apis'; 
import {  MediterraneanFormType } from '@/types';

const mediterraneanSchema = yup.object().shape({
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
  bloodPressure: yup.string().required("جواب به این سوال الزامی است"),
  digestiveProblems: yup.string().required("جواب به این سوال الزامی است"),
  selfSafety: yup.string().required("جواب به این سوال الزامی است"),
  stroke: yup.string().required("جواب به این سوال الزامی است"),
  fattyLiver: yup.string().required("جواب به این سوال الزامی است"),
  kidneyProblems: yup.string().required("جواب به این سوال الزامی است"),
  thyroid: yup.string().required("جواب به این سوال الزامی است"),
  cancer: yup.boolean().required("جواب به این سوال الزامی است"),
  Migraine: yup.boolean().required("جواب به این سوال الزامی است"),
  supplements: yup.array().of(yup.string().required("جواب به این سوال الزامی است")),
  otherSickness: yup.string().required("جواب به این سوال الزامی است"),
  medicine: yup.string().required("جواب به این سوال الزامی است"),
  phoneNumber: yup.string().required("جواب به این سوال الزامی است"),
  createdAtGregorian: yup.date().required("تاریخ میلادی را وارد کنید"),
  createdAtJalali: yup.string().required("تاریخ شمسی را وارد کنید"),
  files: yup.array().of(yup.object().shape({
    originalName: yup.string().required("نام فایل اصلی را وارد کنید"),
    filename: yup.string().required("نام فایل را وارد کنید"),
    path: yup.string().required("مسیر فایل را وارد کنید"),
    size: yup.number().required("اندازه فایل را وارد کنید"),
    mimetype: yup.string().required("نوع فایل را وارد کنید")
  })),
  dietBmi: yup.object().shape({
    abdominalCircumference: yup.number().required("اندازه ی دور کمر الزامی است"),
    age: yup
      .number()
      .min(17, "حداقل سن هفده میباشد")
      .max(60, "حداکثر سن شصت مبیاشد")
      .required("سن الزامی است"),
    height: yup
      .number()
      .min(130, "حداقل قد صد و سی میباشد")
      .max(300, "حذاکثر قد سیصد میباشد")
      .required("قد الزامی است"),
    weight: yup
      .number()
      .min(30, "حداقل وزن سی میاشد")
      .max(600, "حداکثر وزن ششصد میباشد")
      .required("وزن الزامی است"),
    dietName: yup.string().required("نام رژیم را وارد کنید"),
  }),
  payment: yup.object().shape({
    originalName: yup.string().required(),
    filename: yup.string().required(),
    path: yup.string().required(),
    size: yup.number().required(),
    mimetype: yup.string().required()
  }),
})

  const useMediterraneanForm = () => {
    const {
      control,
      handleSubmit,
      register,
      formState: { errors },
      setValue,
    } = useForm<MediterraneanFormType, any>({
      resolver: yupResolver(mediterraneanSchema),
    });
  
    const handleValueInputs: SubmitHandler<MediterraneanFormType> = useCallback(async (formData) => {
      try {
        const response = await api.post('/uploader/upload/type?type=mediterranean', formData);
        if (response.status === 200) {
          toast.success('Form submitted successfully');
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Failed to submit form');
      }
    }, []);
  
    return {
      control,
      handleValueInputs,  
      register,
      errors,
      handleSubmit,
      setValue,
    };
  };
export default useMediterraneanForm;