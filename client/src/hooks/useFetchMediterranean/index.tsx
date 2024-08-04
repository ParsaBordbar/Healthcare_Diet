import api from "@/apis";
import { MediterraneanFormType } from "@/types";
import { useState, useEffect } from "react";
import { chunkingArray } from "../chunkingArray";

const useFetchMediterranean = (url?: string) => {
    const [mediterraneanForms, SetMediterraneanForms] = useState<MediterraneanFormType[][]>([])

    useEffect(()=>{
        fetchMediterraneanForms()
    }, [])

    const fetchMediterraneanForms = async() => {
        try{
            if(url){
                const response = await api.get(`/mediterranean${url}`);
                const newChunckArray = chunkingArray(response.data , 2)
                return SetMediterraneanForms(newChunckArray);
            }
            else{
                const response = await api.get('/mediterranean');
                const newChunckArray = chunkingArray(response.data , 2)
                return SetMediterraneanForms(newChunckArray);
            }
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
    return mediterraneanForms;
}
export default useFetchMediterranean;