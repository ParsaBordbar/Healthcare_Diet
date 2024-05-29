"use client";
import Accordion from "@/components/Accordion";
import MediterranealForm from "@/components/MediterranealForm";
import { useState } from "react";

const DietsUserPanel = () => {
    
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "رژیم مدیترانه ای",
      data: <MediterranealForm />,
      isOpen: false,
    },
    
  ]);

  const toggleAccordion = (accordionkey: any) => {
    const updatedAccordions = accordions.map((accord: any) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="flex flex-col gap-7">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
};

export default DietsUserPanel;
