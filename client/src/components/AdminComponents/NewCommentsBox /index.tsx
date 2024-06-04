'use client'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import Link from 'next/link'
import React from 'react'
import CommentBox from '../CommentBox'

function NewCommentsBox () {

  const allComments = useFetchComments()

  return (
    <div className='my-3 flex justify-center  flex-col '>
        <h2 className="text-lg mb-6">جدیدترین پیام‌ها</h2>
                <div className='flex max-h-[590px] gap-3 custom-scroll flex-col-reverse'>
                  {allComments? allComments.slice(-3).map((data): React.ReactNode => {
                      return <CommentBox className=' min-[1320px]:w-[96%] w-11/12' key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
                  }): null
                  }
                </div>
        <Link className="pt-3 mx-2 text-lg  text-blue-600 " href={"/admin/panel/comments"}> دیدن‌ همه‌ی پیام‌ها</Link>
    </div>
  )
}

export default NewCommentsBox 