import api from "@/apis";
import { BmiType } from "@/types";
import { useState, useEffect } from "react";

const useFetchBmi = () => {

    const [bmiForms, setBmiForms] = useState<BmiType[]>([]);
    
    useEffect(()=>{
        fetchBmiPatientForms()
    }, [bmiForms])
  
    const fetchBmiPatientForms = async () => {
      try{
          const response = await api.get('/bmi');
          setBmiForms(response.data);
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
  return bmiForms;
}
export default useFetchBmi;