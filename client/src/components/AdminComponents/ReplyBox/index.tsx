import React, { useEffect } from 'react';
import useComment from '@/hooks/useComment/useComment'; 
interface ReplyBoxProps {
  receiver: string;
}

const ReplyBox: React.FC<ReplyBoxProps> = ({ receiver }) => {
  const { handleValueInputs, register, errors, handleSubmit, setValue } = useComment();

  const sender = 'admin'; // Assuming 'admin' is the sender

  useEffect(() => {
    setValue('sender', sender);
    setValue('receiver', receiver);
  }, [receiver, setValue]);

  return (
    <div className="flex flex-col bg-[var(--primary)] my-10 rounded-lg text-lg shadow-md justify-center">
      <h2 className="text-3xl px-20 pt-4">ثبت پیام جدید</h2>
      <form className="flex w-full flex-col m-3 gap-4 p-10" onSubmit={handleSubmit(handleValueInputs)}>
        <textarea
          placeholder="پیام خود را وارد کنید..."
          className={`border ${errors.body ? 'border-red-500' : 'border-var(--rating-color)'} px-6 py-5 rounded-xl w-full`}
          rows={10}
          {...register('body')}
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
        
        <input
          type="hidden"
          {...register('sender')}
        />
        
        <input
          type="hidden"
          {...register('receiver')}
        />
        
        <button type="submit" className="bg-[var(--rating-color)] text-white text-3xl px-4 py-2 rounded-2xl w-1/6">
          ثبت
        </button>
      </form>
    </div>
  );
};

export default ReplyBox;
