"use client";
import Accordion from "@/components/Accordion";
import CardsSection from "@/components/Dr_Rabiee_Landing_components/Cards";
import DoctorsCardDetails from "@/components/DrCardDetails";
import MediterranealForm from "@/components/MediterranealForm";
import { useState } from "react";
import useDownloader from "react-use-downloader";

const DietsUserPanel = () => {

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "رژیم مدیترانه ای",
      data: <MediterranealForm />,
      isOpen: false,
    },
  ]);

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const toggleAccordion = (accordionkey: any) => {
    const updatedAccordions = accordions.map((accord: any) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="lg:inline-block hidden">
        <CardsSection />
      </div>
      <DoctorsCardDetails />
      <section className="flex sm:flex-row flex-col items-center gap-2">
        <h1 className="">
          قبل از پر کردن رژیم مورد نظر حتما این فایل را دانلود و مطالعه کنید
        </h1>
        <p
          className="text-[var(--new-green)] cursor-pointer"
          onClick={() => {
            download(
              `${process.env.DOMAIN_FILES}uploads/diet.pdf`,
              "diet.pdf"
            );
          }}
        >
        واحدهای میوه  و سبزیجات         
      </p>
      </section>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          // toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
};

export default DietsUserPanel;
