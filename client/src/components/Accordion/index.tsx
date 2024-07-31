'use client'
import { useState} from "react";
const Accordion = (props: any) => {
  console.log(props, "props data");
  // const [isOpen , setIsOpen] = useState<boolean>(false)
  const isOpen = true
  return (
    <div className="border rounded-lg mb-1">
      <button
        className={`w-full ${
          !props.isOpen ? "rounded-lg" : "rounded-t-lg"
        }  flex items-center justify-between p-4 text-left hover:bg-blue-300
						bg-[var(--new-green)] text-white transition duration-300`}
        // onClick={() => {
        //   setIsOpen(!isOpen)
        // }}
      >
        {props.title}
        <span
          className={`float-right transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } 
								transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="p-4 bg-[var(--soft-blue)]">{props.data}</div>}
    </div>
  );
};

export default Accordion;
