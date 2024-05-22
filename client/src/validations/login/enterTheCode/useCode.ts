import * as yup from "yup";
import { toast } from "react-toastify";

import { IdentifyCodeType } from "@/types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

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
    if(data.codeFive === '0' && (data.codeOne === '0') && (data.codeTwo === '0') && (data.codeThree === '0') && (data.codeFour === '0') && (localStorage.getItem('user'))){
      console.log(data);
      toast.success("کد به درستی وارد شد");
      push("/user/panel");
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
