import { useState, useEffect } from "react";
import api from "@/apis"; // Adjust the import path according to your project structure
import { MediterraneanFormType } from "@/types";

const useEditMediterranean = (id: string) => {
  const [data, setData] = useState<MediterraneanFormType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<MediterraneanFormType>(`/mediterranean/id/${id}`);
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch Mediterranean form data.");
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  // Update the form data on the server
  useEffect(() => {
    const updateMediterraneanForm = async () => {
      try {
        if (data) {
          const response = await api.put(`/mediterranean/edit/${id}`, data);
          console.log('Update successful:', response.data);
        }
      } catch (error) {
        setError("Failed to update Mediterranean form data.");
      }
    };
    if (id && data) {
      updateMediterraneanForm();
    }
  }, [data, id]);

  // Handle changes to the form fields
  const handleChange = (field: keyof MediterraneanFormType, value: MediterraneanFormType[keyof MediterraneanFormType]) => {
    setData((prevData) => {
      if (prevData) {
        return { ...prevData, [field]: value };
      }
      return prevData;
    });
  };

  return { data, error, handleChange };
};

export default useEditMediterranean;
