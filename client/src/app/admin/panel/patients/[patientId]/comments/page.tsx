"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import Pagination from "@/components/Pagination";
import { chunkingArray } from "@/hooks/chunkingArray";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { CommentType } from "@/types";
import { useCallback, useEffect, useState } from "react";

const CommentsPatientPage = ({ params }: { params: { patientId: string } }) => {
  const commentData = useFetchPatientComments(params.patientId).toReversed();
  const [arrayItemsComment, setArrayItemsComment] = useState<number>(0);
  const [calcPlues, setCalcPlues] = useState<number>(0);
  const newArrayComment = chunkingArray(commentData, 6);

  return (
    <div className="flex flex-col mb-6 gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">پیام ها:</h2>
      {newArrayComment?.length > 0 ? (
        newArrayComment[arrayItemsComment].map((comment: CommentType) => (
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
      <Pagination
        arr={newArrayComment}
        itemNumber={arrayItemsComment}
        setCalc={setCalcPlues}
        calc={calcPlues}
        lastCalc={4}
        setItemNumber={setArrayItemsComment}
        limitNumber={30}
      />
    </div>
  );
};

export default CommentsPatientPage;
