import { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi"




type AccordionProps = {
  noteHeader: string,
  noteBody: string,
  children: ReactNode

}


export default function Accordion({ noteHeader, noteBody, children }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);



  return (
    <div >
      {/*this is header*/}
      <div onClick={() => setAccordionOpen(!accordionOpen)} className="flex items-center justify-between px-4 py-4 my-2 cursor-pointer text-lg  bg-secondary-100  rounded-xl">
        <div className="flex justify-center items-center">
          {noteHeader}
        </div>
       <div className="flex items-center justify-center">
       <span>{children}</span>
        <span className={`transition-all duration-300 ${accordionOpen ? "rotate-180" : "rotate-0"}`}>
          <FiChevronDown />
        </span>
       </div>
      </div>
      {/* this is body  */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden px-5 flex flex-col gap-y-2 text-secondary-400">
          <p>{noteBody} </p>
        </div>
      </div>
    </div>
  );
}

