'use client'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'


const CommentsPage = () => {
  const allComments = useFetchComments()
  return (
      <section className='flex gap-3 flex-col'>
              {allComments? allComments.map((data): React.ReactNode => {
                  return <CommentBox key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
              }): null
              }
      </section>
  )
}
export default CommentsPage