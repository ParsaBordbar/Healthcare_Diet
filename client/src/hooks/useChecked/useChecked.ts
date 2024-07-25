import { useState, useEffect } from "react";
import api from "@/apis";

const useCheckedState = (initialChecked: boolean, id: string) => {
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    const updateCheckedStatus = async () => {
      console.log(id);
      try {
        const response = await api.put(`/mediterranean/edit/${id}`,{
          "isChecked": checked,
        });
        console.log('Update successful:', response.data);
      } catch (error) {
        console.error("Failed to update checked status:", error);
      }
    };
    if (id) {
      updateCheckedStatus();
    }
  }, [checked, id]);

  const toggleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return { checked, toggleChecked };
};

export default useCheckedState;
