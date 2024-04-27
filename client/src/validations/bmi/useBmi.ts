import * as yup from "yup";
// import { toast } from 'react-toastify';

import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { BmiDataType } from "@/types";

export const loginSchema = yup.object({
  firstName: yup
    .string()
    .min(6, "نام کاربری باید حداقل ۴ حرف داشته باشد")
    .max(16, "نام کاربری بیشتر از ۱۶ حرف نمی‌تواند باشد")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]/,
      "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود"
    )
    .required("نام کاربری الزامی است"),

});
const useLogin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BmiDataType>({
    resolver: yupResolver(loginSchema),
  });

  if (errors.firstName) {
    console.log("error");
    toast.error(errors.firstName.message);
  }
  if (!errors.firstName && errors.lastName) {
    console.log("error");
    toast.error(errors.lastName.message);
  }

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: BmiDataType) => {
    console.log(data);
    push("/");
    toast.success("خوش آمدید");
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useLogin;
