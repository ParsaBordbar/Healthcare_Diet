import React, { useEffect } from 'react';
import useComment from '@/hooks/useComment/useComment'; 
import SendIcon from '/public/svg/adminPanelSvgs/send-alt-1-svgrepo-com.svg'
import AttachmentIcon from '/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg'

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
      <h2 className="text-3xl px-20 pt-8 text-[var(--new-green)]">ثبت پیام جدید</h2>
      <form className="flex w-full flex-col m-3 gap-4 p-10" onSubmit={handleSubmit(handleValueInputs)}>
        <textarea
          placeholder="پیام خود را وارد کنید..."
          className={`bg-[var(--milky-white)] border ${errors.body ? 'border-red-500' : 'border-var(--rating-color)'} px-6 py-5 rounded-xl w-full`}
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
        <div className='flex gap-4'>
          <button type="submit" className="bg-[var(--orange)] text-white text-2xl p-2 rounded-2xl w-1/6 transition-all duration-200 hover:bg-[var(--new-green)] ease-in-out flex gap-4 justify-center items-center">
            <SendIcon />
            ارسال 
          </button>
          <button className='bg-[var(--orange)] rounded-full p-2 hover:bg-[var(--new-green)] ease-in-out'>
            <AttachmentIcon />
          </button>
        </div>  
      </form>
    </div>
  );
};

export default ReplyBox;
