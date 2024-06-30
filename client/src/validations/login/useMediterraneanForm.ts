import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import api from '@/apis';
import { useState } from 'react';

const getPhoneNumberFromUrl = (): string | null => {
  if (typeof window !== 'undefined') {
    const pathSegments = window.location.pathname.split('/');
    const phoneNumberIndex = pathSegments.indexOf('user') + 1;
    return pathSegments[phoneNumberIndex] || null;
  }
  return null;
};

const useMediterraneanForm = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const phoneNumber = getPhoneNumberFromUrl();

  const mediterraneanSchema = yup.object().shape({
    dailyFruit: yup.string().required("جواب به این سوال الزامی است"),
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
    thyroid: yup.string(),
    cancer: yup.string(),
    supplements: yup.array().of(yup.string()).required("جواب به این سوال الزامی است"),
    Migraine: yup.string(),
    otherSickness: yup.string(),
    medicine: yup.string(),
    phoneNumber: yup.string(),
    age: yup.number().min(17, "حداقل سن هفده میباشد").max(60, "حداکثر سن شصت مبیاشد").required("سن الزامی است"),
    height: yup.number().min(130, "حداقل قد صد و سی میباشد").max(300, "حذاکثر قد سیصد میباشد").required("قد الزامی است"),
    weight: yup.number().min(30, "حداقل وزن سی میاشد").max(600, "حداکثر وزن ششصد میباشد").required("وزن الزامی است"),
    abdominalCircumference: yup.number().required("اندازه ی دور شکم الزامی است"),
    dietName: yup.string(),
    bmi: yup.number(),
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
      phoneNumber: phoneNumber || '', 
      age: '',
      height: "",
      weight: "",
      abdominalCircumference: "",
      dietName: "mediterranean",
      bmi: "",
    },
    validationSchema: mediterraneanSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(`${key}[]`, val));
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });

      try {
        const response = await api.post('/uploader/upload/type?type=mediterranean', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          toast.success('رژیم با موفقیت ثبت شد');
        } else {
          throw new Error('مشکلی به وجود آمد دوباره تلاش کنید');
        }
      } catch (error:any) {
        console.error('Error submitting form', error);
        if (error.response) { 
          console.error('Server Response:', error.response);
        }
        toast.error('Error submitting form');
      }
    },
  });

  return {
    ...formik,
    handleFileChange, 
  };
};

export default useMediterraneanForm;