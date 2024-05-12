import api from "@/apis"
import { useEffect } from "react";

const useUpdateIsChecked = (phoneNumber: string, checked: boolean) => {
    useEffect(() => {
        const update = async() => {
            const response = await api.put(`mediterranean/${phoneNumber}`, {
                isChecked: checked
            })
            console.log(response);
            return response;
        }
        update();
    }, [checked]); // Add 'checked' to the dependency array
}

export default useUpdateIsChecked;
