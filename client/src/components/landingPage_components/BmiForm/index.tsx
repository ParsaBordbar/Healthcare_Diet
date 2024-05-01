'use client'
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import { useRef, useEffect } from "react";

const BmiForm = () => {

    // const nameRef = useRef<HTMLInputElement | null>(null);
    // const lastNameRef = useRef<HTMLInputElement | null>(null);
    // const phoneNumberRef = useRef<HTMLInputElement | null>(null);
    // const genderRef = useRef<HTMLInputElement | null>(null);
    // const ageRef = useRef<HTMLInputElement | null>(null);
    // const heightRef = useRef<HTMLInputElement | null>(null);
    // const wightRef = useRef<HTMLInputElement | null>(null);
  
    // const inputRefs = [
    //   nameRef,
    //   lastNameRef,
    //   phoneNumberRef,
    //   genderRef,
    //   ageRef,
    //   heightRef,
    //   wightRef,
    // ];
  
    // const handleEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
    //   if (event.key === "Enter") {
    //     for (let i = 0; i < inputRefs.length; i++) {
    //       if (document.activeElement === inputRefs[i].current) {
    //         if (inputRefs[i + 1]?.current) {
    //           inputRefs[i + 1].current?.focus();
    //           event.preventDefault();
    //         }
    //         break;
    //       }
    //     }
    //   }
    // };
    
  
    // const { control, errors, handelValueInputs, handleSubmit, register } =
    //   useRegister();
  
    // useEffect(() => {
    //   nameRef.current?.focus();
    //   if (errors.userID) {
    //     nameRef.current?.focus();
    //   } else if (errors.username) {
    //     lastNameRef.current?.focus();
    //   } else if (errors.password) {
    //     phoneNumberRef.current?.focus();
    //   } else if (errors.passwordCheck) {
    //     genderRef.current?.focus();
    //   } else if (errors.age) {
    //     ageRef.current?.focus();
    //   }
    // }, [
    //   errors.password,
    //   errors.passwordCheck,
    //   errors.age,
    //   errors.userID,
    //   errors.username,
    // ]);

    return(
        <div className="flex justify-center items-center flex-col bg-[var(--primary)] rounded-2xl my-12 px-10">
            <div className="flex justify-center items-center flex-col w-full my-10">
              <h3 className="lg:text-3xl text-xl my-7">همین حالا شروع کنید!</h3>
              <form action="submit" className="flex justify-center items-center flex-col">
                  <ul className="flex flex-row gap-2">
                      <li>
                      <MainInput label="وزن" placeholder="وزن خود را وارد کنید" />
                      </li>
                      <li>
                          <MainInput label="قد" placeholder="قد خود را وارد کنید" />
                      </li>
                  </ul>
                  <MainInput
                          parentClassName="lg:col-span-2 py-3"
                          label="شماره تماس"
                          placeholder="شماره تماس خود را وارد کنید"
                          /> 
                  <MainButton className="w-full my-10 py-3 !text-white bg-[var(--rating-color)] font-bold text-2xl" value={"امروز شروع کنید"} />
              </form>
            </div>
        </div>
    )
};

export default BmiForm;