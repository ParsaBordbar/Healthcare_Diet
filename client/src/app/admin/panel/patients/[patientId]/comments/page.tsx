"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import Pagination from "@/components/Pagination";
import { chunkingArray } from "@/hooks/chunkingArray";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { CommentType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const CommentsPatientPage = ({ params }: { params: { patientId: string } }) => {
  const commentData = useFetchPatientComments(params.patientId).toReversed();
  const newArrayComment = chunkingArray(commentData, 6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = newArrayComment.length;

  return (
    <div className="flex flex-col my-6 gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">پیام ها:</h2>
      {newArrayComment?.length > 0 ? (
        newArrayComment[currentPage - 1].map((comment: CommentType) => (
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
      <div className="mb-6">
        <ResponsivePagination
          linkHref="omit"
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CommentsPatientPage;
