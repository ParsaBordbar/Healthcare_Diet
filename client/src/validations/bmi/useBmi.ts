import * as yup from "yup";
import { use, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { BmiDataType } from "@/types";
import api from "@/apis";

export const BmiSchema = yup.object({
  name: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
  city: yup.string().required("شهر الزامی است"),
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}/g,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
  abdominalCircumference: yup.number().min(1,'دور شکم باید حداقل ۱ باشد').required("اندازه ی دور شکم الزامی است"),
  hipcircumference: yup.number().min(1,'دور باسن باید حداقل ۱ باشد').required("اندازه ی دور باسن الزامی است"),
  gender: yup.string().required("جنسیت الزامی است"),
  age: yup.number().min(1,'سن باید حداقل ۱ باشد').required("سن الزامی است"),
  height: yup.number().min(1,'قد باید حداقل ۱ باشد').required("قد الزامی است"),
  weight: yup.number().min(1,'وزن باید حداقل ۱ باشد').required("وزن الزامی است"),
});

const convertNumberToEnglish = (input: any) => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];

  let output = input.toString();
  for (let i = 0; i < 10; i++) {
    output = output.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
  }

  return output;
};


const useBmi = () => {
  const [userPhone, setUserPhoneNumber] = useState<string|null>();
  useEffect(() => {
    if (typeof window !== "undefined") {
    const userPhoneLocal = localStorage.getItem("new_user");
    setUserPhoneNumber(userPhoneLocal)
    }
  },[])
  const { push } = useRouter();
  
  const customResolver = (data: BmiDataType) => {
    const convertedData = {
      ...data,
      phoneNumber: userPhone,
      abdominalCircumference: Number(
        convertNumberToEnglish(data.abdominalCircumference??"0")
      ),
      weight: Number(convertNumberToEnglish(data.weight??"0")),
      age: Number(convertNumberToEnglish(data.age??"0")),
      hipcircumference: Number(convertNumberToEnglish(data.hipcircumference??"0")),
      height: Number(convertNumberToEnglish(data.height??"0")),
    };

    try {
      BmiSchema.validateSync(convertedData, { abortEarly: false });
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

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BmiDataType>({
    resolver: customResolver,
  });

  const showsErrors = () => {
    if (errors.name?.message) {
      toast.error(errors.name.message);
    }
    if (!errors.name && errors.lastName) {
      toast.error(errors.lastName.message);
    }
    if (!errors.lastName && !errors.name && errors.abdominalCircumference) {
      toast.error(errors.abdominalCircumference.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.abdominalCircumference &&
      errors.phoneNumber
    ) {
      toast.error(errors.phoneNumber.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.abdominalCircumference &&
      !errors.phoneNumber &&
      errors.hipcircumference
    ) {
      toast.error(errors.hipcircumference.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.hipcircumference &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      errors.weight
    ) {
      toast.error(errors.weight.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.weight &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.hipcircumference &&
      errors.age
    ) {
      toast.error(errors.age.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.weight &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.hipcircumference &&
      !errors.age &&
      errors.city
    ) {
      toast.error(errors.city.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.hipcircumference &&
      !errors.age &&
      !errors.weight &&
      errors.height
    ) {
      toast.error(errors.height.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.hipcircumference &&
      !errors.height &&
      !errors.weight &&
      !errors.age &&
      errors.gender
    ) {
      toast.error(errors.gender.message);
    }
  };

  showsErrors();

  const handelValueInputs = useCallback(
    async (data: BmiDataType) => {
      try {
        console.log(data);
        const response = await api.post("/bmi", data);
        const newUser = localStorage.getItem('new_user')
        if (newUser){
          localStorage.setItem('user', newUser)
          localStorage.removeItem('new_user')
        }
        push(`/user/${data.phoneNumber}/panel`);
        toast.success("خوش آمدید");
      } catch (err: any) {
        toast.error("مشکلی پیش آمد");
        console.log(err.message);
      }
    },
    [push]
  );

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useBmi;
