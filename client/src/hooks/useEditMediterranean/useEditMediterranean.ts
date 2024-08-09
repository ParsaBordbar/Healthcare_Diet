import { useState, useEffect } from "react";
import api from "@/apis"; // Adjust the import path according to your project structure
import { MediterraneanFormType } from "@/types";

import * as Yup from 'yup';

export const MediterraneanFormSchema = Yup.object().shape({
  dailyFruit: Yup.string().required(),
  dailyVegetable: Yup.string().required(),
  Cereals: Yup.string().required(),
  dailyCereals: Yup.string().required(),
  potatoAndStarchWeekly: Yup.string().required(),
  oliveAndOliveOilDaily: Yup.string().required(),
  nutsDaily: Yup.string().required(),
  dairyDaily: Yup.string().required(),
  beans: Yup.string().required(),
  eggWeekly: Yup.string().required(),
  fishWeekly: Yup.string().required(),
  chickensWeekly: Yup.string().required(),
  redMeatWeekly: Yup.string().required(),
  sugarWeekly: Yup.string().required(),
  alcoholWeekly: Yup.string().required(),
  fermentationWeekly: Yup.string().required(),
  supplements: Yup.string().required(),
  appetite: Yup.string().required('Appetite is required.'),
  physicalActivityHours: Yup.string().required('Physical activity hours are required.'),
  sport: Yup.string().required(),
  preferredDrink: Yup.string().required(),
  physicalActivity: Yup.string().required(),
  diabetes: Yup.string().required(),
  anemia: Yup.string().required(),
  bloodPressure: Yup.string().required(),
  digestiveProblems: Yup.string().required(),
  selfSafety: Yup.string().required(),
  stroke: Yup.string().required(),
  fattyLiver: Yup.string().required(),
  kidneyProblems: Yup.string().required(),
  thyroid: Yup.string().required(),
  cancer: Yup.boolean().required(),
  Migraine: Yup.boolean().required(),
  otherSickness: Yup.string().required(),
  medicine: Yup.string().required(),
  foodAllergies: Yup.string().required(),
  pregnancyWeeks: Yup.string().required(),
  breastfeeding: Yup.string().required(),
  weightBeforePregnancy: Yup.string().required(),
  phoneNumber: Yup.string()
    .required('Phone number is required.')
    .matches(/^\d+$/, 'Phone number is not valid.'),
  isChecked: Yup.boolean().required('This field is required.'),
  createdAtGregorian: Yup.string().nullable(),
  createdAtJalali: Yup.string().nullable(),
  dietBmi: Yup.object().shape({
    height: Yup.number().nullable(),
    weight: Yup.number().nullable(),
    bmi: Yup.number().nullable(),
    age: Yup.number().required('Age is required.'),
    linkTo: Yup.string().nullable(),
    abdominalCircumference: Yup.number().nullable(),
    whr: Yup.number().nullable(),
    hipcircumference: Yup.number().nullable(),
  }),
  _id: Yup.string().required('ID is required.'),
});


const validateForm = async (formData: MediterraneanFormType) => {
  try {
     const validData = await MediterraneanFormSchema.validate(formData, { abortEarly: false });
     return validData;
  } catch (errors) {
    console.log(errors);
  }
};


const useEditMediterranean = (id: string) => {
  const [data, setData] = useState<MediterraneanFormType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/mediterranean/id/${id}`);
        console.log(response);
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
          const isValid = validateForm(data);
          const response = await api.put(`/mediterranean/edit/${id}`, data);
          console.log('Update successful:', response.data);
        }
      } catch (error) {
        setError("لطفا مورد ادیت شده را مجددا برسی کنید");
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
