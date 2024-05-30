import { CommentType } from '@/types'
import React from 'react'
import AttachmentIcon from '/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg';

const CommentBox = ({sender, body, receiver, createdAtJalali}: CommentType) => {
     // Convert newlines to <br> tags
  const formatBody = (text: string) => {
    return { __html: text.replace(/\n/g, '<br/>') };
  }
  return (
    <div className='flex flex-col m-3 col-span-full bg-[var(--milky-white)] mx-4 sm:mx-8 gap-2 my-4 rounded-lg shadow-md'>
        <div className='ps-4 py-3 flex justify-start gap-5 pb-2 bg-[var(--new-green)] text-white rounded-e-2xl w-fit pe-8 items-center'>
            <div className='flex gap-2 items-center'>
                <p>ارسال کننده:</p>
                <p className='text-2xl'>{sender} </p>
            </div>
            {/* <div className='flex gap-2 items-center'>
                <p>دریافت کننده:</p>
                <p className='text-lg'>{receiver} </p>
            </div> */}
            <div>تاریخ ارسال:{" "} {createdAtJalali} </div>
            <button><AttachmentIcon width={24}/></button>
        </div>
        <p className='p-4 w-full' dangerouslySetInnerHTML={formatBody(body)} />
    </div>
  )
}

export default CommentBox