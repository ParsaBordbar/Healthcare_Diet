import { CommentType } from '@/types'
import React from 'react'
import AttachmentIcon from '/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg';
import DateSvg from '/public/svg/adminPanelSvgs/date-range-svgrepo-com.svg'
import Link from 'next/link';
import useSpecificFetchBmi from '@/hooks/useFetchName/useFetchName';

const CommentBox = ({sender, body, receiver, createdAtJalali}: CommentType) => {
    
    const userData = useSpecificFetchBmi(receiver);
    
    // Convert newlines to <br> tags
    const formatBody = (text: string) => {
        return { __html: text.replace(/\n/g, '<br/>') };
    }

  return (
    <div className='flex flex-col m-3 col-span-full bg-[var(--milky-white)] mx-4 sm:mx-8 gap-2 my-4 rounded-lg shadow-md'>
        <div className='ps-4 py-3 flex justify-start gap-5 pb-2 bg-[var(--new-green)] text-white rounded-e-2xl w-fit pe-8 items-center'>
            <div className='flex gap-2 items-center'>
                <p>ارسال کننده:</p>
                <p className='text-xl'>{sender} </p>
            </div>
            {receiver? <div className='flex gap-2 items-center'>
                <p>دریافت کننده:</p>
                <p className='text-lg'>{userData?.name} {userData?.lastName} </p>
            </div>: null}
            <div className='flex gap-2 justify-center items-center flex-row'> <DateSvg />تاریخ ارسال:{" "} {createdAtJalali} </div>
            
            <Link href={`/admin/panel/patients/${receiver}`}><AttachmentIcon width={24}/></Link>
        </div>
        <p className='p-5 w-full pb-12' dangerouslySetInnerHTML={formatBody(body)} />
    </div>
  )
}

export default CommentBox