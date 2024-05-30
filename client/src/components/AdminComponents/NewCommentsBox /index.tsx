'use client'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import Link from 'next/link'
import React from 'react'
import CommentBox from '../CommentBox'

function NewCommentsBox () {

  const allComments = useFetchComments()

  return (
    <div className='my-3 flex justify-center flex-col mx-1'>
        <h2 className="text-lg px-10">جدیدترین پیام‌ها</h2>
                {allComments? allComments.slice(-3).map((data): React.ReactNode => {
                    return <CommentBox key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali}/>
                }): null
                }
        <Link className="pt-3 mx-2 text-lg px-10 text-blue-600 " href={"/admin/panel/comments"}> دیدن‌ همه‌ی پیام‌ها</Link>
    </div>
  )
}

export default NewCommentsBox 