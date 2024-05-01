import * as yup from "yup";

export const BmiSchema = yup.object({
      phoneNumber: yup
      .string()
      .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
      .matches(
        /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
        "شماره تماس را به درستی وارد کنید"
      )
      .required("شماره تماس الزامی است"),
  });