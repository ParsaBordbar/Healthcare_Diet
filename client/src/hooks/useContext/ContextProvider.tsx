'use client'
import React, { ReactNode, useState } from "react";
import { AllContext } from "./Context";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [Bmi, setBmi] = useState({});

  return (
    <AllContext.Provider value={{ Bmi, setBmi }}>{children}</AllContext.Provider>
  );
};

export default ContextProvider;
