import api from "@/apis";
import { BmiType } from "@/types";
import { useState, useEffect } from "react";

const useSpecificFetchBmi = (phoneNumber: string | undefined) => {
  const [bmiForms, setBmiForms] = useState<BmiType | undefined>(undefined);

  useEffect(() => {
    if (phoneNumber) {
      fetchBmiPatientForms();
    }
  }, [phoneNumber]);

  const fetchBmiPatientForms = async () => {
    try {
      const response = await api.get(`/bmi/phone${phoneNumber}`);
      setBmiForms(response.data);
    } catch (err:any) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return bmiForms;
};

export default useSpecificFetchBmi;
