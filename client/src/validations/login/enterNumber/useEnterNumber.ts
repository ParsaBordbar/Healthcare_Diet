import api from "@/apis";
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
      /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}/g,
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

  const handelValueInputs = useCallback(async (data: LoginDataType) => {
    try {
      console.log(data);
      const response = await api.get(`/bmi/phone${data.phoneNumber}`);

      localStorage.removeItem('user');

      // Check if the phone number exists
      if (response && response.data) {
        localStorage.setItem('user', response.data.phoneNumber);
        toast.clearWaitingQueue();
        toast.success("خوش آمدید");
        push("/register/login/enterTheCode");
      }
    } catch (error) {
      console.error("Error fetching phone number:", error);
      localStorage.removeItem('user');
      toast.clearWaitingQueue();
      toast.info("شماره تماس یافت نشد، لطفا اطلاعات خود را وارد کنید");
      push("/register/login/enterTheCode");
      // toast.error("خطا در ارتباط با سرور");
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
