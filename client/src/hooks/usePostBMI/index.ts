import api from "@/apis";
import { BmiDataType } from "@/types";
import { useEffect } from "react";

const usePostBmi = (data: BmiDataType) => {
    useEffect(() => {
        bmiForm()
    }, [])

    const bmiForm = async() => {
        try{
            const response = await api.post('/bmi', data);
            console.log(response);
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
}
export default usePostBmi;