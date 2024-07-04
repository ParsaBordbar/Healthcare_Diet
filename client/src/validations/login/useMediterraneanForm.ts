import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import api from '@/apis';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const getPhoneNumberFromUrl = (): string | null => {
  if (typeof window !== 'undefined') {
    const pathSegments = window.location.pathname.split('/');
    const phoneNumberIndex = pathSegments.indexOf('user') + 1;
    return pathSegments[phoneNumberIndex] || null;
  }
  return null;
};

interface FormValues {
  dailyFruit: string;
  dailyVegetable: string;
  Cereals: string;
  dailyCereals: string;
  potatoAndStarchWeekly: string;
  oliveAndOliveOilDaily: string;
  nutsDaily: string;
  dairyDaily: string;
  beans: string;
  eggWeekly: string;
  fishWeekly: string;
  chickensWeekly: string;
  redMeatWeekly: string;
  sugarWeekly: string;
  alcoholWeekly: string;
  fermentationWeekly: string;
  physicalActivity: string;
  diabetes: string;
  bloodPressure: string;
  digestiveProblems: string;
  selfSafety: string;
  stroke: string;
  fattyLiver: string;
  kidneyProblems: string;
  thyroid?: string;
  cancer?: boolean;
  supplements: string[];
  Migraine?: boolean;
  otherSickness?: string;
  medicine?: string;
  phoneNumber: string;
  age: number | '';
  height: number | '';
  weight: number | '';
  abdominalCircumference: number | '';
  dietName: string;
  bmi: number | '';
}

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
  cancer: yup.boolean(),
  supplements: yup.array().of(yup.string()).required("جواب به این سوال الزامی است").min(1, "لطفا به این سوال پاسخ دهید"),
  Migraine: yup.boolean(),
  otherSickness: yup.string(),
  medicine: yup.string(),
  phoneNumber: yup.string(),
  age: yup.number().required("سن الزامی است"),
  height: yup.number().required("قد الزامی است"),
  weight: yup.number().required("وزن الزامی است"),
  abdominalCircumference: yup.number().required("اندازه ی دور شکم الزامی است"),
   hipcircumference: yup.number().required("اندازه ی دور باسن الزامی است"),
  dietName: yup.string(),
  bmi: yup.number(),
});

const useMediterraneanForm = () => {
  const [selectedDocuments, setSelectedDocuments] = useState<File[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<File | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const { name } = e.target;
      if (name === 'documents') {
        setSelectedDocuments(Array.from(e.target.files));
      } else if (name === 'payment') {
        setSelectedPayment(e.target.files[0]);
        setPaymentError(null);  
      }
    }
  };

  const { push } = useRouter();
  const phoneNumber = getPhoneNumberFromUrl();

  const formik = useFormik<FormValues>({
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
      diabetes: "ندارم",
      supplements: [],
      bloodPressure: "ندارم",
      digestiveProblems: "ندارم",
      selfSafety: "ندارم",
      stroke: "ندارم",
      fattyLiver: "ندارم",
      kidneyProblems: "ندارم",
      thyroid: "ندارم",
      cancer: false,
      Migraine: false,
      otherSickness: "",
      medicine: "",
      phoneNumber: phoneNumber || '', 
      age: '',
      height: "",
      weight: "",
      abdominalCircumference: "",
      hipcircumference: "",
      dietName: "mediterranean",
      bmi: "",
    },
    validationSchema: mediterraneanSchema,
    onSubmit: async (values, { setSubmitting }: FormikHelpers<FormValues>) => {
      if (!selectedPayment) {
        setPaymentError("پرداخت الزامی است");
        setSubmitting(false);
        return;
      }

      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(`${key}[]`, val));
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      selectedDocuments.forEach((file) => {
        formData.append('document', file);
      });

      if (selectedPayment) {
        formData.append('payment', selectedPayment);
      }

      try {
        const response = await api.post('/uploader/upload/type?type=mediterranean', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          toast.success('رژیم با موفقیت ثبت شد');
          push(`./plans`);
        } else {
          throw new Error('مشکلی به وجود آمد دوباره تلاش کنید');
        }
      } catch (error:any) {
        console.error('مشکلی در ارسال فرم وجود داشت', error);
        if (error.response) { 
          console.error('Server Response:', error.response);
        }
        toast.error('مشکلی در ارسال فرم وجود داشت');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    ...formik,
    handleFileChange, 
    paymentError,
  };
};

export default useMediterraneanForm;
