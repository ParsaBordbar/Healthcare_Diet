import api from "@/apis"
import { CommentType } from "@/types"
import { useEffect, useState } from "react"

const useFetchComments = () => {
    
    const [comments, setComments] = useState<CommentType[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try{
            const response = await api.get('/doctorsComment');
            setComments(response.data)
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

export default useFetchComments;
