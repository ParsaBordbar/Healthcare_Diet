import React from 'react'

const handleSubmit = () => {
    //Add a route Here for posting the Comment to backend!
}


const ReplyBox = () => {
  return (
    <div className='flex flex-col bg-[var(--primary)] my-10 rounded-lg text-lg shadow-md justify-center'>
        <h2 className='text-3xl px-20 pt-4 '>ثبت پیام جدید</h2>
        <form className='flex w-full flex-col m-3 gap-4 p-10'>
            <textarea placeholder='پیام خود را وارد کنید...' className='border-var(--rating-color) border px-6 py-5 rounded-xl w-full' rows={10}></textarea>
            <button  onSubmit={handleSubmit} className='bg-[var(--rating-color)] text-white text-3xl px-4 py-2 rounded-2xl w-1/6'>ثبت</button>
        </form>
    </div>
  )
}

export default ReplyBox