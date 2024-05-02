import { BmiLandingDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const BmiSchema = yup.object({
  weight: yup
    .number()
    .min(30, "حداقل وزن سی میاشد")
    .max(600, "حداکثر وزن ششصد میباشد")
    .required("وزن الزامی است"),
  height: yup
    .number()
    .min(130, "حداقل قد صد و سی میباشد")
    .max(300, "حذاکثر قد سیصد میباشد")
    .required("قد الزامی است"),
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
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
  const handelValueInputs = useCallback((data: BmiLandingDataType) => {
    console.log(data);
    push("/register/diets-bmi");
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
