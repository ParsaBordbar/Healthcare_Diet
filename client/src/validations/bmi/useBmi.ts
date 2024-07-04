import * as yup from "yup";
import { useCallback } from "react";
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
  abdominalCircumference: yup.number().required("اندازه ی دور کمر الزامی است"),
  gender: yup.string().required("جنسیت الزامی است"),
  age: yup
    .number()
    .required("سن الزامی است"),
  height: yup
    .number()
    .required("قد الزامی است"),
  weight: yup
    .number()
    .required("وزن الزامی است"),
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

const useBmi = () => {
  const { push } = useRouter();

  const customResolver = (data:BmiDataType) => {
    const convertedData = {
      ...data,
      phoneNumber: convertNumberToEnglish(data.phoneNumber),
      abdominalCircumference: Number(convertNumberToEnglish(data.abdominalCircumference)),
      weight: Number(convertNumberToEnglish(data.weight)),
      age: Number(convertNumberToEnglish(data.age)),
      height: Number(convertNumberToEnglish(data.height)),
    };

    try {
      BmiSchema.validateSync(convertedData, { abortEarly: false });
      return { values: convertedData, errors: {} };
    } catch (yupError:any) {
      return { values: {}, errors: yupError.inner.reduce((allErrors:any, currentError:any) => {
        return {
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message,
          },
        };
      }, {}) };
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
    } if (!errors.lastName && !errors.name && errors.city) {
     toast.error(errors.city.message);
    }
    if (!errors.lastName && !errors.name && !errors.city && errors.phoneNumber) {
      toast.error(errors.phoneNumber.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      errors.abdominalCircumference
    ) {
      toast.error(errors.abdominalCircumference.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      errors.gender
    ) {
      toast.error(errors.gender.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      errors.weight
    ) {
      toast.error(errors.weight.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      !errors.weight &&
      errors.age
    ) {
      toast.error(errors.age.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.city &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      !errors.weight &&
      !errors.age &&
      errors.height
    ) {
      toast.error(errors.height.message);
    }
  };

  showsErrors();

  const handelValueInputs = useCallback(
    async (data: BmiDataType) => {
      try {
        const response = await api.post("bmi", data);
        push(`/user/${data.phoneNumber}/panel`);
        toast.success("خوش آمدید");
      } catch {
        toast.error("An error occurred while submitting the form.");
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
