import * as yup from "yup";
import { toast } from "react-toastify";

import { IdentifyCodeType } from "@/types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

export const loginSchema = yup.object({
  codeOne: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeTwo: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeThree: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeFour: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
  codeFive: yup
    .string()
    .length(1, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(/[0-9]/, "شماره تماس را به درستی وارد کنید")
    .required("شماره تماس الزامی است"),
});

const useCode = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IdentifyCodeType>({
    resolver: yupResolver(loginSchema),
  });

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: IdentifyCodeType) => {
    //This condition should change to be be better
    if(data.codeFive === '5' && (data.codeOne === '1') && (data.codeTwo === '2') && (data.codeThree === '3') && (data.codeFour === '4') && (localStorage.getItem('user'))){
      console.log(data);
      const userNumber = localStorage.getItem('user');
      toast.success("کد به درستی وارد شد");
      push(`/user/${userNumber}/panel`);
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

export default useCode;
