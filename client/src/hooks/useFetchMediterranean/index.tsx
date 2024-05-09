import api from "@/apis";
import { MediterraneanFormType } from "@/types";
import { useState, useEffect } from "react";

const useFetchMediterranean = () => {
    const [mediterraneanForms, SetMediterraneanForms] = useState<MediterraneanFormType[]>([])

    useEffect(()=>{
        fetchMediterraneanForms()
    }, [mediterraneanForms])

    const fetchMediterraneanForms = async() => {
        try{
            const response = await api.get('/mediterranean');
            SetMediterraneanForms(response.data);
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