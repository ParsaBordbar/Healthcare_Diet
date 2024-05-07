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
    {
      key: 2,
      title: "What GeeksforGeeks offer us?",
      data: `GeeksforGeeks offers Free Tutorials,  
                  Millions of Articles, Live, Online and  
                  Classroom Courses,Frequent Coding Competitions,  
                  Webinars by Industry Experts, Internship  
                  opportunities and Job Opportunities.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Which is the best portal to study Computer Science?",
      data: `GeeksforGeeks is the best Computer Science portal  
                  for geeks. It contains well written, well thought  
                  and well explained computer science and programming  
                  articles.`,
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
