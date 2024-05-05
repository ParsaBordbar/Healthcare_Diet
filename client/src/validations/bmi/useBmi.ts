import * as yup from "yup";
// import { toast } from 'react-toastify';

import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { BmiDataType } from "@/types";
import { useMyContext } from "@/hooks/useContext/Context";

export const BmiSchema = yup.object({
  firstName: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
  gender: yup.string().required("جنسیت الزامی است"),
  weight: yup
    .number()
    .min(30, "حداقل وزن سی میاشد")
    .max(600, "حداکثر وزن ششصد میباشد")
    .required("وزن الزامی است"),
  age: yup
    .number()
    .min(17, "حداقل سن هفده میباشد")
    .max(60, "حداکثر سن شصت مبیاشد")
    .required("سن الزامی است"),
  height: yup
    .number()
    .min(130, "حداقل قد صد و سی میباشد")
    .max(300, "حذاکثر قد سیصد میباشد")
    .required("قد الزامی است"),
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
  // const { Bmi, setBmi } = useMyContext();

  const showsErrors = () => {
    //Bmi.phoneNumber ? !Bmi.phoneNumber : !!errors.phoneNumber
    if (errors.firstName?.message) {
      console.log("error");
      toast.error(errors.firstName.message);
    }
    if (!errors.firstName && errors.lastName) {
      console.log("error");
      toast.error(errors.lastName.message);
    }
    if (!errors.lastName && !errors.firstName && errors.phoneNumber) {
      console.log("error");
      toast.error(errors.phoneNumber.message);
    }
    if (
      !errors.lastName &&
      !errors.firstName &&
      !errors.phoneNumber &&
      errors.gender
    ) {
      console.log("error");
      toast.error(errors.gender.message);
    }
    if (
      !errors.lastName &&
      !errors.firstName &&
      !errors.phoneNumber &&
      !errors.gender &&
      errors.weight
    ) {
      console.log("error");
      toast.error(errors.weight.message);
    }
    if (
      !errors.lastName &&
      !errors.firstName &&
      !errors.phoneNumber &&
      !errors.gender &&
      !errors.weight &&
      errors.age
    ) {
      console.log("error");
      toast.error(errors.age.message);
    }
    if (
      !errors.lastName &&
      !errors.firstName &&
      !errors.phoneNumber &&
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

  console.log(errors.firstName?.message);

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: BmiDataType) => {
    console.log(data);
    // push("/");
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

export default useBmi;
