import { useState } from "react";
import { FiChevronDown, FiX, FiEdit } from "react-icons/fi"

import persian from "react-date-object/calendars/persian";
import { DateObject } from "react-multi-date-picker";
import { useNote } from "../context/context";
import { useNavigate } from "react-router-dom";


type AccordionProps = {
  noteHeader: string,
  noteBody: string,
  deadline: string,
  createdAt: string,
  onDelete: (id: string) => void,
  noteId: string
}


export default function Accordion({ noteHeader, noteBody, deadline, createdAt, onDelete, noteId }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { setIsEditMode, setNoteIdToEdit } = useNote()

  const navigate = useNavigate()

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
      <div onClick={() => setAccordionOpen(!accordionOpen)} className="flex items-center justify-between px-4 py-4 my-2 cursor-pointer text-lg  bg-secondary-100  rounded-xl">
        <div className="flex justify-center items-center gap-x-3">
          <span className="text-error " onClick={() => onDelete(noteId)}> <FiX /> </span>
          <span className="text-primary-500" onClick={() => handleOnEdit(noteId)}> <FiEdit /> </span>
          {noteHeader}
        </div>
        <div className="flex items-center justify-center gap-x-4">
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

