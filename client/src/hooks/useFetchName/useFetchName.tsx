import api from "@/apis";
import { BmiType } from "@/types";
import { useState, useEffect } from "react";

const useSpecificFetchBmi = (phoneNumber: string) => {

    const [bmiForms, setBmiForms] = useState<BmiType>();
    
    useEffect(()=>{
        fetchBmiPatientForms()
    }, [])
  
    const fetchBmiPatientForms = async () => {
      try{
        console.log(bmiForms);
          const response = await api.get(`/bmi/${phoneNumber}`);
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
export default useSpecificFetchBmi;
