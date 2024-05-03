import { LoginDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const EnterNumberSchema = yup.object({
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
});

const useEnterNumber = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: yupResolver(EnterNumberSchema),
  });
  useEffect(() => {
    if (errors.phoneNumber) {
      toast.error(errors.phoneNumber.message);
    }
  }, [errors.phoneNumber]);

  const { push } = useRouter();
  console.log(errors);
  const handelValueInputs = useCallback((data: LoginDataType) => {
    console.log(data);
    push("/register/login/enterTheCode");
    toast.clearWaitingQueue();
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

export default useEnterNumber;
