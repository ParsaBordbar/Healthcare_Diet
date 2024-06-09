import api from "@/apis";
import { yupResolver } from '@hookform/resolvers/yup';
import { MediterraneanFormType } from "@/types";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export const MediterraneanSchema = yup.object().shape({
    dailyFruit: yup.string().required("Please select an option."),
    dailyVegetable: yup.string().required("جواب به این سوال الزامی است"),
    vegetables: yup.string().required("جواب به این سوال الزامی است"),
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
    thyroid: yup.string(),
    cancer: yup.string(),
    supplements: yup.array(),
    Migraine: yup.string(),
    otherSickness: yup.string().required("جواب به این سوال الزامی است"),
    medicine: yup.string().required("جواب به این سوال الزامی است"),
    phoneNumber: yup.string(),
  });

const useMediterraneanForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<MediterraneanFormType, any>({
    resolver: yupResolver(MediterraneanSchema),
  });

  const handleMediterraneanFormSubmit: SubmitHandler<MediterraneanFormType> = useCallback(async (formData) => {
    try {
      const response = await api.post('/uploader/upload/type?type=mediterranean', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast.success('Form submitted successfully');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);  
      toast.error('An error occurred while submitting the form');
    }
  }, []);

  return {
    control,
    handleSubmit: handleSubmit(handleMediterraneanFormSubmit),
    register,
    errors,
    setValue,
  };
};

export default useMediterraneanForm;
