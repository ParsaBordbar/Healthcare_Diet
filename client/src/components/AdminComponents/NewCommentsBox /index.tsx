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
                <div className='flex max-h-[590px] gap-6 custom-scroll flex-col'>
                  {allComments? allComments.slice(-4).map((data): React.ReactNode => {
                      return <CommentBox className='lg:min-w-[75%] lg:w-min w-full' key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali}/>
                  }): null
                  }
                </div>
        <Link className="pt-3 mx-2 text-lg  text-blue-600 " href={"/admin/panel/comments"}> دیدن‌ همه‌ی پیام‌ها</Link>
    </div>
  )
}

export default NewCommentsBox 