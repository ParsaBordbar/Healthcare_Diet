import api from "@/apis";
import { MediterraneanFormType } from "@/types";
import { useState, useEffect } from "react";

const useFetchMediterranean = (url?: string) => {
    const [mediterraneanForms, SetMediterraneanForms] = useState<MediterraneanFormType[]>([])

    useEffect(()=>{
        fetchMediterraneanForms()
    }, [])

    const fetchMediterraneanForms = async() => {
        try{
            if(url){
                const response = await api.get(`/mediterranean${url}`);
                return SetMediterraneanForms(response.data);
            }
            else{
                const response = await api.get('/mediterranean');
                return SetMediterraneanForms(response.data);
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