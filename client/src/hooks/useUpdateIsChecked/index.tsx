import api from "@/apis"

const useUpdateIsChecked = async (phoneNumber: string, checked: boolean) => {
    const response = await api.put(`mediterranean/${phoneNumber}`, {
        isChecked: checked
    })
    console.log(response);
    return response;
}