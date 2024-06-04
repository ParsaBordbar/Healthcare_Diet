'use client'
import CommentBox from '@/components/AdminComponents/CommentBox'
import MainInput from '@/components/MainInput'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import useFetchPatientComments from '@/hooks/useFetchPatientComments/useFetchPatientComments'
import SearchIcon from "/public/svg/search-normal.svg";


const CommentsPage = () => {
  const allComments = useFetchComments()
  // const handleSubmit = () => {
  //   useFetchPatientComments() //Pass the input value in here.
  // }

  return (
    <section className='flex gap-3 flex-col'>
      <MainInput
        iconFirst={SearchIcon}
        parentClassName="!w-1/2 "
        type="search"
        placeholder="نام بیمار مورد نظر خود را وارد کنید"
      />
      {allComments? allComments.map((data): React.ReactNode => {
          return <CommentBox key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
      }): null
      }
      </section>
  )
}
export default CommentsPage