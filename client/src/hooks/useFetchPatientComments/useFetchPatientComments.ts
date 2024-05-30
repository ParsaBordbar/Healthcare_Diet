    import api from "@/apis";
    import { CommentType } from "@/types";
    import { useState, useEffect } from "react";

    const useFetchPatientComments = (phoneNumber: string) => {

        const [comments, setComments] = useState<CommentType[]>([]);
        useEffect(()=> {
            fetchComments()
        }, [comments])

        const fetchComments = async () => {
            try{
                const response = await api.get(`/doctorsComment/${phoneNumber}`);
                setComments(response.data);
            }
            catch(err : any){
            if (err.response){
                console.log(err.response.data)
            }
            else{
                console.log(`Error: ${err.message}`);
            }
            }
        }
        return comments;
    }
    export default useFetchPatientComments;