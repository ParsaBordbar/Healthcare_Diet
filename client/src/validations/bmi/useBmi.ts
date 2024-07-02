import * as yup from "yup";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { BmiDataType } from "@/types";
import api from "@/apis";

export const BmiSchema = yup.object({
  name: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
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

const useBmi = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BmiDataType>({
    resolver: yupResolver(BmiSchema),
  });
  console.log(errors);

  const showsErrors = () => {
    if (errors.name?.message) {
      console.log("error");
      toast.error(errors.name.message);
    }
    if (!errors.name && errors.lastName) {
      console.log("error");
      toast.error(errors.lastName.message);
    }
    if (!errors.lastName && !errors.name && errors.phoneNumber) {
      console.log("error");
      toast.error(errors.phoneNumber.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.phoneNumber &&
      errors.abdominalCircumference
    ) {
      console.log("error");
      toast.error(errors.abdominalCircumference.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      errors.gender
    ) {
      console.log("error");
      toast.error(errors.gender.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      errors.weight
    ) {
      console.log("error");
      toast.error(errors.weight.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      !errors.weight &&
      errors.age
    ) {
      console.log("error");
      toast.error(errors.age.message);
    }
    if (
      !errors.lastName &&
      !errors.name &&
      !errors.phoneNumber &&
      !errors.abdominalCircumference &&
      !errors.gender &&
      !errors.weight &&
      !errors.age &&
      errors.height
    ) {
      console.log("error");
      toast.error(errors.height.message);
    }
  };

  showsErrors();

  console.log(errors.name?.message);

  const { push } = useRouter();

  const handelValueInputs = useCallback(
    async (data: BmiDataType) => {
      console.log("This is data", data);
      try {
        const response = await api.post("bmi", data);
        console.log("This is response.data: ", response);
        push(`/user/${data.phoneNumber}/panel`);
        toast.success("خوش آمدید");
      } catch {
        console.error("There was an error!", errors);
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
