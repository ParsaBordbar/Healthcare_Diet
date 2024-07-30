'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const getPhoneNumberFromUrl = (): string | null => {
  if (typeof window !== "undefined") {
    const pathSegments = window.location.pathname.split("/");
    const phoneNumberIndex = pathSegments.indexOf("user") + 1;
    return pathSegments[phoneNumberIndex] || null;
  }
  return null;
};

const useAuth = () => {
  const nav = useRouter();
  useEffect(()=>{

    if (typeof window !== "undefined"){
      const token = localStorage.getItem("token");
      const user = localStorage.getItem('user');
      const tempToken = localStorage.getItem('temp_token')

      if (!token || tempToken) {
        console.log("check the token in local");
        nav.push("/register/login/enterNumber");
      }else if (token && user){
        if(user != getPhoneNumberFromUrl()){
          nav.push("/register/login/enterNumber");
        }
      }else {
        console.log("Check the Token In LocalStorage.");
      }
  }
  },[])
};

export default useAuth;