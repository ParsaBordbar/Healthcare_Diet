import React, { useEffect } from 'react';
import useComment from '@/hooks/useComment/useComment'; 
import SendIcon from '/public/svg/adminPanelSvgs/send.svg';
import AttachmentIcon from '/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg';
import MainButton from '@/components/MainButton';

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
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <textarea
          placeholder="پیام خود را وارد کنید..."
          className={`bg-[var(--milky-white)] border ${errors.body ? 'border-red-500' : 'border-var(--rating-color)'} px-6 py-5 rounded-xl w-full`}
          rows={10}
          {...register('body')}
        />
        
        <input
          type="hidden"
          {...register('sender')}
        />
        
        <input
          type="hidden"
          {...register('receiver')}
        />
        <div className='flex gap-4'>
          <label className='flex justify-center items-center bg-[var(--orange)] rounded-full px-4 hover:bg-[var(--new-green)] ease-in-out'>
            <AttachmentIcon />
            <input 
              type="file" 
              multiple 
              // onChange={handleFileChange} 
              className="hidden" 
            />
          </label>
          <MainButton value={'ارسال'} modern type="submit" className="!text-white py-2 px-6" iconSrc={SendIcon}/>
        </div>  
      </form>
    </div>
  );
};

export default ReplyBox;
