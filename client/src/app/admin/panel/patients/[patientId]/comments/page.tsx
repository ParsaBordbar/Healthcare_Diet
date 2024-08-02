"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { CommentType } from "@/types";
import { useCallback, useState } from "react";

const CommentsPatientPage = ({ params }: { params: { patientId: string } }) => {
    const commentData = useFetchPatientComments(params.patientId).toReversed();
    const [arrayItemsComment, setArrayItemsComment] = useState<number>(0);
    let sperateArray: CommentType[] = [];
  
    const chunkingArray = (
      data: CommentType[],
      chunk: number,
      functionFetch: any
    ) => {
      let array: CommentType[][] = [];
      console.log(
        "this is the data.lnght / chunk",
        Math.floor(data.length / chunk)
      );
      let count = 0;
      if (functionFetch.toReversed().length % 2 == 0) {
        count = functionFetch.toReversed().length / 2 + 1;
      } else {
        count = functionFetch.toReversed().length / 2 + 1;
      }
      console.log("this is count ", count);
      for (let i = 0; i < count; i++) {
        sperateArray = data.splice(0, chunk);
        console.log("sperate array in for loop", sperateArray);
        array.push(sperateArray);
      }
      return array;
    };
  
    const newArrayComment = chunkingArray(
      commentData,
      4,
      useFetchPatientComments(params.patientId)
    );
  
    const paginationComment = useCallback(() => {
      return newArrayComment.map((item, index) => {
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
              className="p-4 hover:underline focus:underline font-medium text-[var(--new-green)] bg-[var(--milky-white)] hover:bg-[var(--new-green)] border-none outline-none hover:text-[var(--milky-white)] focus:bg-[var(--new-green)] focus:text-[var(--milky-white)] "
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
        newArrayComment[arrayItemsComment].map((comment) => (
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
