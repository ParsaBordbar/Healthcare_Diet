import api from "@/apis"
import { useEffect } from "react";

const useUpdateIsChecked = (id: string, checked: boolean) => {
    useEffect(() => {
        // console.log(id);
        const update = async() => {
            const response = await api.put(`mediterranean/edit/${id}`, {
                isChecked: checked
            })
            console.log(response);
            return response;
        }
        update();
    }, [checked]); 
    
}

export default useUpdateIsChecked;
