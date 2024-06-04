import api from "@/apis";
import { CommentType } from "@/types";
import { useState, useEffect } from "react";

const useFetchPatientComments = (phoneNumber?: string, userName?: string) => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        fetchComments();
    }, [phoneNumber, userName, comments]);

    const fetchComments = async () => {
        try {
            let response;
            if (phoneNumber) {
                response = await api.get(`/doctorsComment/certain/patientId/${phoneNumber}`);
            } else if (userName) {
                response = await api.get(`/doctorsComment/certain/username/${userName}`);
            } else {
                throw new Error("Either phoneNumber or userName must be provided");
            }
            setComments(response.data);
        } catch (err: any) {
            if (err.response) {
                console.log(err.response.data);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    return comments;
};

export default useFetchPatientComments;
