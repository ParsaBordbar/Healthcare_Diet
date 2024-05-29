import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import api from '@/apis'; 
import { CommentType } from '@/types';
import moment from 'moment';
import momentJalaali from 'moment-jalaali';

const CommentSchema = yup.object().shape({
  sender: yup.string().required('Sender is required'),
  body: yup.string().required('لطفا متن پیام را اضافه کنید'),
  receiver: yup.string().required('Receiver is required'),
});

const useComment = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<CommentType>({
    resolver: yupResolver(CommentSchema),
  });

  const handleValueInputs: SubmitHandler<CommentType> = useCallback(async (data) => {
    try {
      const createdAtGregorian = moment().toISOString();
      const createdAtJalali = momentJalaali().format('jYYYY/jM/jD HH:mm:ss');

      const response = await api.post('/doctorsComment', {
        ...data,
        createdAtGregorian,
        createdAtJalali,
      });

      toast.success('پیام با موفقیت ارسال شد');
    } catch (error) {
      console.error('مشکلی در ارسال پیام پیش آمد', error);
      toast.error('مشکلی در ارسال پیام پیش آمد');
    }
  }, []);

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
