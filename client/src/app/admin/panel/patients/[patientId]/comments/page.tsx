"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import { chunkingArray } from "@/hooks/chunkingArray";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { CommentType } from "@/types";
import { useCallback, useState } from "react";

const CommentsPatientPage = ({ params }: { params: { patientId: string } }) => {
  const commentData = useFetchPatientComments(params.patientId).toReversed();
  const [arrayItemsComment, setArrayItemsComment] = useState<number>(0);
  const newArrayComment = chunkingArray(commentData, 4);

  const paginationComment = useCallback(() => {
    return newArrayComment.map((item:any, index:number) => {
      return (
        item.length > 0 &&
        newArrayComment[1]?.length > 0 && (
          <button
            type="button"
            autoFocus={index == 0 ? true : false}
            onClick={(e) => {
              console.log(e.target);
              setArrayItemsComment(index);
            }}
            className={`p-4 hover:underline bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] ${
              arrayItemsComment + 1 == index + 1 &&
              "bg-[var(--new-green)] text-[var(--milky-white)] underline"
            } `}
          >
            {index + 1}
          </button>
        )
      );
    });
  }, [newArrayComment]);

  return (
    <div className="flex flex-col mb-6 gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">پیام ها:</h2>
      {newArrayComment?.length > 0 ? (
        newArrayComment[arrayItemsComment].map((comment:CommentType) => (
          <CommentBox
            key={comment._id}
            sender={comment.sender}
            body={comment.body}
            receiver={comment.receiver}
            createdAtJalali={comment.createdAtJalali}
            isDoctor={true}
            files={comment.files}
            _id={comment._id}
          />
        ))
      ) : (
        <p className="text-xl text-center">پیام ندارد</p>
      )}
      <div
        role="group"
        className="flex items-center w-fit custom-scroll-x justify-center mx-auto overflow-hidden rounded-lg"
      >
        {paginationComment()}
      </div>
    </div>
  );
};

export default CommentsPatientPage;
