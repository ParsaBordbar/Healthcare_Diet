'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const nav = useRouter();
    if (!localStorage.getItem("token")) {
      console.log("check the token in local");
      nav.push("/register/login/enterNumber");
    }else{
      console.log("check the token in local flase");

    }
  
};

export default useAuth;
