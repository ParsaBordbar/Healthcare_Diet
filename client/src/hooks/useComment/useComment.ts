import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import api from '@/apis'; 
import { CommentType } from '@/types';

const CommentSchema = yup.object().shape({
  sender: yup.string().required('Sender is required'),
  body: yup.string().required('Body is required'),
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
      const response = await api.post('/doctorsComment', data);
      toast.success('Comment submitted successfully');
    } catch (error) {
      console.error('There was an error!', error);
      toast.error('An error occurred while submitting the comment');
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
