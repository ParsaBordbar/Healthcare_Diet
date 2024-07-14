'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const nav = useRouter();
  useEffect(()=>{
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        console.log("check the token in local");
        nav.push("/register/login/enterNumber");
      }else{
        console.log("Check the Token In LocalStorage.");
      }
  }
  },[])
};

export default useAuth;
