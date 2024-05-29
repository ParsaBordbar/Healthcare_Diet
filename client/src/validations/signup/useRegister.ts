import { SignUpDataType } from "./../../types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const SignUpSchema = yup.object({
  username: yup
    .string()
    .min(6, "نام کاربری باید حداقل ۴ حرف داشته باشد")
    .max(16, "نام کاربری بیشتر از ۱۶ حرف نمی‌تواند باشد")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]/,
      "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود"
    )
    .required("نام کاربری الزامی است"),
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
  email: yup
    .string()
    .matches(
      /^[\w-\.]+@gmail(.)+[\w-]{2,4}$/g,
      "لطفا ایمیل را به درستی وارد کنید"
    )
    .required("لطفا ایمیل را وارد کنید"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "رمز عبور باید دارای حرف بزرگ و کوچک و عدد باشد"
    )
    .required("رمز عبور را وارد کنید"),
});

const useRegister = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: yupResolver(SignUpSchema),
  });
  useEffect(() => {
    if (errors.username) {
      toast.error(errors.username.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    }
  }, [errors.email, errors.password, errors.phoneNumber, errors.username]);

  const { push } = useRouter();

  const handelValueInputs = useCallback((data: SignUpDataType) => {
    try{
      console.log(data);
      push("/register/diets-bmi");
      toast.clearWaitingQueue();
      toast.success("خوش آمدید");
    }
    catch{
      console.log("Something went wrong.");
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

export default useRegister;
