import api from "@/apis";
import { CommentType } from "@/types";
import { useState, useEffect } from "react";

const useFilterComments = (endpoint: string) => {

    const [data, setData] = useState<CommentType[]>([]);
    
    useEffect(()=>{
        fetchBmiPatientForms()
    }, [])
  
    const fetchBmiPatientForms = async () => {
      try{
        console.log(data);
          const response = await api.get(endpoint);
          setData(response.data);
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
  return data;
}
export default useFilterComments;
