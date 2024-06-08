import api from "@/apis"
import { MediterraneanFormType } from "@/types"
import { useEffect, useState } from "react"

const useFetchOneMediterranean = (phoneNumber: string) => {
    
    const [medForm, setMedForm] = useState<MediterraneanFormType[]>([]);
    useEffect(()=> {
        fetchForm()
    }, [])

    const fetchForm = async () => {
        try{
            const response = await api.get(`/mediterranean/${phoneNumber}`);
            setMedForm(response.data);
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
    return medForm;
}
export default useFetchOneMediterranean;