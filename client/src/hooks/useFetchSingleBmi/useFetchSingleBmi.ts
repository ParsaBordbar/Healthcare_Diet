import api from "@/apis";
import { BmiType } from "@/types";
import { useState, useEffect } from "react";

const useFetchSingleBmi = (query: string) => {
    const [bmiForms, setBmiForms] = useState<BmiType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/bmi/search?query=${query}`);
                setBmiForms(response.data);
            } catch (err: any) {
                if (err.response) {
                    console.error(err.response.data);
                } else {
                    console.error(`Error: ${err.message}`);
                }
            }
        };

        fetchData(); 
        return () => {
        };
    }, [query]); 
    console.log(bmiForms);
    return bmiForms;
};

export default useFetchSingleBmi;
