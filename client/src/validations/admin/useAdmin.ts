import * as yup from "yup";
// import { toast } from 'react-toastify';

import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { AdminDataType, BmiDataType } from "@/types";
import { useMyContext } from "@/hooks/useContext/Context";

export const AdminSchema = yup.object({
  username: yup
    .string()
    .min(5, "نام کاربری باید حداقل ۴ حرف داشته باشد")
    .max(16, "نام کاربری بیشتر از ۱۶ حرف نمی‌تواند باشد")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]/,
      "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود"
    )
    .required("نام کاربری الزامی است"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])[A-Za-z\d]{5,16}$/,
      "رمز عبور باید دارای حرف بزرگ و کوچک و عدد باشد"
    )
    .required("رمز عبور را وارد کنید"),
});

const useAdmin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AdminDataType>({
    resolver: yupResolver(AdminSchema),
  });
  console.log(errors);

  const showsErrors = () => {
    if (errors.username?.message) {
      console.log("error");
      toast.error(errors.username.message);
    } else if (errors.password?.message) {
      toast.error(errors.password.message);
    }
  };

  showsErrors();

  const { push } = useRouter();
  const handelValueInputs = useCallback((data: AdminDataType) => {
    console.log(data);
    if (data.username == "admin" && data.password == "admin") {
      push("/admin/panel");
      toast.success("خوش آمدید");
    }
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useAdmin;
