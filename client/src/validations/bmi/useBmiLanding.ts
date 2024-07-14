// import { useMyContext } from "@/hooks/useContext/Context";
import { useMyContext } from "@/hooks/useContext/Context";
import { BmiLandingDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const BmiSchema = yup.object({
  weight: yup
    .number()
    .required("وزن الزامی است"),
  height: yup
    .number()
    .required("قد الزامی است"),
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}/g,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
});

const useBmiLanding = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BmiLandingDataType>({
    resolver: yupResolver(BmiSchema),
  });

  const showsErrors = () => {
    if (errors.weight) {
      console.log("error");
      toast.error(errors.weight.message);
    }
    if (!errors.weight && errors.height) {
      console.log("error");
      toast.error(errors.height.message);
    }
    if (!errors.height && !errors.weight && errors.phoneNumber) {
      console.log("error");
      toast.error(errors.phoneNumber.message);
    }
  };

  showsErrors();

  const { push } = useRouter();
  const { setBmi } = useMyContext();
  const handelValueInputs = useCallback((data: BmiLandingDataType) => {
    console.log(data);
    setBmi(data);
    push("register/login/enterNumber");
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

export default useBmiLanding;
