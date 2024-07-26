import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "@/apis";
import { CommentType, CommentTypeHook } from "@/types";
import { useRouter } from "next/navigation";

const CommentSchema = yup.object().shape({
  sender: yup.string().required("Sender is required"),
  body: yup.string().required("لطفا متن پیام را اضافه کنید"),
  receiver: yup.string().required("Receiver is required"),
});

const useComment = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<CommentTypeHook>({
    resolver: yupResolver(CommentSchema),
  });
  const nav = useRouter();
  const handleValueInputs: SubmitHandler<CommentType> = useCallback(
    async (formData) => {
      try {
        const response = await api.post(
          "/uploader/upload/type?type=comments",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          toast.success("پیام با موفقیت ارسال شد");
          nav.back()
        } else {
          throw new Error("Upload failed");
        }
      } catch (error) {
        console.error("مشکلی در ارسال پیام پیش آمد", error);
        toast.error("مشکلی در ارسال پیام پیش آمد");
      }
    },
    []
  );

  return {
    control,
    handleValueInputs,
    register,
    errors,
    handleSubmit,
    setValue,
  };
};

export default useComment;
