import { useState } from "react";
import { FiChevronDown, FiX, FiEdit } from "react-icons/fi"

import { DateObject } from "react-multi-date-picker";
import { useNote } from "../context/context";
import { useNavigate } from "react-router-dom";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

type AccordionProps = {
  noteHeader: string,
  noteBody: string,
  deadline: string,
  createdAt: string,
  onDelete: (id: string) => void,
  noteId: string
}


const Accordion = ({ noteHeader, noteBody, deadline, createdAt, onDelete, noteId }: AccordionProps) => {

  const navigate = useNavigate()
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { setIsEditMode, setNoteIdToEdit } = useNote()
  const nowGetTime = new DateObject({ calendar: persian, locale: persian_fa }).toDate().getTime()
  const deadlineGetTime = new Date(deadline).getTime()




  const convertToPersian = (isoDate: string) => {
    const date = new Date(isoDate);
    const persianDate = new DateObject(date).convert(persian);
    return persianDate.toString();
  };


  const handleOnEdit = (id: string) => {
    setIsEditMode(true)
    setNoteIdToEdit(id)
    navigate("/notes/add")
  }



  return (
    <div >
      {/*this is header*/}
      <div onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex flex-col gap-y-2 lg:flex-row items-center justify-between px-4 py-4 my-2 cursor-pointer text-lg  rounded-xl
        ${nowGetTime > deadlineGetTime ? " bg-red-100" : "bg-secondary-100"} 
        `}>
        <div className="flex justify-start flex-1 items-center gap-x-3 lg:flex-auto w-full">
          <span className="text-error " onClick={() => onDelete(noteId)}> <FiX /> </span>
          <span className="text-primary-500" onClick={() => handleOnEdit(noteId)}> <FiEdit /> </span>
          {noteHeader}
        </div>
        <div className="flex items-center justify-end gap-x-4 w-full ">
          <span className="font-extralight text-xs"> سررسید : {convertToPersian(deadline)}</span>
          <span className="font-extralight text-xs"> تاریخ ایجاد : {convertToPersian(createdAt)}</span>
          <span className={`transition-all duration-300 mx-2 ${accordionOpen ? "rotate-180" : "rotate-0"}`}>
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

export default Accordion