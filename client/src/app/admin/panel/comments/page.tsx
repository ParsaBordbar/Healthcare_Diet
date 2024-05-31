'use client'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'


const CommentsPage = () => {
  const allComments = useFetchComments()

  console.log(allComments);
  return (
    <main>
        <div className='flex gap-3 flex-col'>
            <div className='bg-red'>
                <MainInput parentClassName="!w-1/2 mx-auto" type="search" placeholder="نام بیمار مورد نظر خود را وارد کنید"/>
            </div>
                {allComments? allComments.map((data): React.ReactNode => {
                    return <CommentBox key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
                }): null
                }
        </div>
    </main>
  )
}

export default CommentsPage