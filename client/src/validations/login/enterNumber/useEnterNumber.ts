import api from "@/apis";
import { LoginDataType } from "@/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import CryptoJS from "crypto-js";

export const EnterNumberSchema = yup.object({
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}/g,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
});

const convertNumberToEnglish = (input: any) => {
  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

  let output = input.toString();
  for (let i = 0; i < 10; i++) {
    output = output.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
  }

  return output;
};

const generateToken = (phoneNumber: string) => {
  const randomValue = Math.random().toString();
  const hash = CryptoJS.SHA256(phoneNumber + randomValue).toString();
  const token = parseInt(hash.substring(0, 5), 16) % 100000; 
  return token.toString().padStart(5, '0'); 
};

const customResolver = async (data: any) => {
  const convertedData = {
    ...data,
    phoneNumber: convertNumberToEnglish(data.phoneNumber),
  };

  try {
    await EnterNumberSchema.validate(convertedData, { abortEarly: false });
    return { values: convertedData, errors: {} };
  } catch (yupError: any) {
    return {
      values: {},
      errors: yupError.inner.reduce((allErrors: any, currentError: any) => {
        return {
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message,
          },
        };
      }, {}),
    };
  }
};

const useEnterNumber = () => {
  const { push } = useRouter();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: customResolver,
  });

  useEffect(() => {
    if (errors.phoneNumber) {
      toast.error(errors.phoneNumber.message);
    }
  }, [errors.phoneNumber]);

  const handelValueInputs = useCallback(async (data: LoginDataType) => {
    const convertedData = {
      ...data,
      phoneNumber: convertNumberToEnglish(data.phoneNumber),
    };

    const token = generateToken(convertedData.phoneNumber);
    const hashedToken = CryptoJS.SHA256(token).toString();
    localStorage.setItem('token', hashedToken); 

    try {
      const response = await api.get(`/bmi/phone${convertedData.phoneNumber}`);
      
      if (response && response.data) {
        localStorage.setItem('user', response.data.phoneNumber);
        const smsData = {
          receptor: convertedData.phoneNumber,
          token,
        };
        toast.success("خوش آمدید");
        push("/register/login/enterTheCode");
        await api.post('/sms/send', smsData);
        toast.clearWaitingQueue();
      }
    } catch (error:any) {
      if (error.response && error.response.status === 404) {
        toast.error("شماره تماس پیدا نشد");
        toast.success("خوش آمدید");
        push("/register/login/enterTheCode");
        const smsData = {
          receptor: convertedData.phoneNumber,
          token,
        };
        await api.post('/sms/send', smsData);
        toast.clearWaitingQueue();
      } else {
        console.error("Error fetching phone number:", error);
        toast.error("خطایی رخ داده است، دوباره تلاش کنید");
      }
    }
  }, [push]);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useEnterNumber;
