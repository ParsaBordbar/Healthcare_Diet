import * as yup from "yup";
import { toast } from "react-toastify";
import { IdentifyCodeType } from "@/types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";
import { generateToken } from "../enterNumber/useEnterNumber";

// Schema validation for the code input
export const loginSchema = yup.object({
  codeOne: yup
    .string()
    .length(1, "کد باید یک رقمی باشد")
    .matches(/[0-9]/, "کد باید عدد باشد")
    .required("کد الزامی است"),
  codeTwo: yup
    .string()
    .length(1, "کد باید یک رقمی باشد")
    .matches(/[0-9]/, "کد باید عدد باشد")
    .required("کد الزامی است"),
  codeThree: yup
    .string()
    .length(1, "کد باید یک رقمی باشد")
    .matches(/[0-9]/, "کد باید عدد باشد")
    .required("کد الزامی است"),
  codeFour: yup
    .string()
    .length(1, "کد باید یک رقمی باشد")
    .matches(/[0-9]/, "کد باید عدد باشد")
    .required("کد الزامی است"),
  codeFive: yup
    .string()
    .length(1, "کد باید یک رقمی باشد")
    .matches(/[0-9]/, "کد باید عدد باشد")
    .required("کد الزامی است"),
});

// Function to convert Persian/Arabic numbers to English
const convertNumberToEnglish = (input: any): string => {
  let inputStr = String(input);

  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];

  for (let i = 0; i < 10; i++) {
    inputStr = inputStr
      .replace(persianNumbers[i], i.toString())
      .replace(arabicNumbers[i], i.toString());
  }
  return inputStr;
};

const useCode = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IdentifyCodeType>({
    resolver: async (data) => {
      const convertedData = {
        ...data,
        codeOne: convertNumberToEnglish(data.codeOne),
        codeTwo: convertNumberToEnglish(data.codeTwo),
        codeThree: convertNumberToEnglish(data.codeThree),
        codeFour: convertNumberToEnglish(data.codeFour),
        codeFive: convertNumberToEnglish(data.codeFive),
      };

      try {
        await loginSchema.validate(convertedData, { abortEarly: false });
        return { values: convertedData, errors: {} };
      } catch (yupError: any) {
        return {
          values: {},
          errors: yupError.inner.reduce((allErrors: any, currentError: any) => {
            return {
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            };
          }, {}),
        };
      }
    },
  });

  const { push } = useRouter();

  const handelValueInputs = useCallback(
    (data: IdentifyCodeType) => {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("temp_token");
      const enteredToken =
        data.codeOne +
        data.codeTwo +
        data.codeThree +
        data.codeFour +
        data.codeFive;
      const hashedEnteredToken = CryptoJS.SHA256(enteredToken).toString();
      console.log("token in code", token);
      console.log(enteredToken);
      if (token && hashedEnteredToken === token && user) {
        toast.success("کد به درستی وارد شد");
        localStorage.removeItem("temp_token");
        localStorage.setItem("token", hashedEnteredToken);
        push(`/user/${user}/panel`);
      } else if (token && hashedEnteredToken === token && !user) {
        localStorage.removeItem("temp_token");
        localStorage.setItem("token", hashedEnteredToken);
        push("/register/diets-bmi");
      } else {
        toast.error("کد وارد شده صحیح نیست");
      }
    },
    [push]
  );

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useCode;
