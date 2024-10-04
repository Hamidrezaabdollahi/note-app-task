import React, { useEffect, useState } from "react";
import PersianDatePicker from "./PersianDatePicker";
import { DateObject } from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import axios from "axios";
import toast from "react-hot-toast";
import { useNote } from "../context/context";





export default function AddNote() {



  const [deadline, setDeadline] = useState<DateObject | null>(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const createdAt: DateObject = new DateObject({ calendar: persian, locale: persian_fa });
  const [title, setTitle] = useState<string>("")
  const [text, setText] = useState<string>("")

  const getIsoString = (date: DateObject | null): string | null => {
    if (date) {
      const gregorianDate = date.convert(gregorian);
      const dateInstance = gregorianDate.toDate() as Date;
      return dateInstance.toISOString();
    }
    return null;
  };


  const { isEditMode, noteIdToEdit, setIsEditMode } = useNote()

  const noteToBeEdited = async () => {
    if (noteIdToEdit) {
      try {
        const { data } = await axios.get(`http://localhost:5003/notes/${noteIdToEdit}`)
        setTitle(data.title)
        setText(data.text)
        const deadlineDate = new Date(data.deadline); 
        setDeadline(new DateObject(deadlineDate).convert(persian)); 
      } catch (error) {
        console.log(error);
      }
    }
  }


  useEffect(() => {
    if (noteIdToEdit) {
      noteToBeEdited()
    }
  }, [noteIdToEdit])




  const resetForm = () => {
    setTitle("");
    setText("");
    setDeadline(new DateObject({ calendar: persian, locale: persian_fa }));
    setIsEditMode(false);
  };

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditMode && noteIdToEdit) {
      try {
        await axios.put(`http://localhost:5003/notes/${noteIdToEdit}`, {
          title,
          text,
          deadline: getIsoString(deadline),
          createdAt: getIsoString(createdAt),
        });
        toast.success("یادداشت با موفقیت ویرایش شد.");
        resetForm();
      } catch (error) {
        toast.error("خطا در ویرایش یادداشت.");
      }
    } else {
      try {
        await axios.post("http://localhost:5003/notes", {
          title,
          text,
          deadline: getIsoString(deadline),
          createdAt: getIsoString(createdAt),
        });
        toast.success("یادداشت جدید اضافه شد.");
        resetForm();
      } catch (error) {
        toast.error("خطا در اظافه کردن یادداشت")
      }
    }
  };



  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start my-6 w-full gap-y-4 text-secondary-400">
      <div className="flex items-center justify-center gap-x-4 w-full">
        <input type="text" className="textFieldInput rounded-l-none flex-1" placeholder="موضوع یادداشت را وارد کنید ...." value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="flex flex-1 items-center justify-center gap-x-2 py-2 px-3 shadow-sm text-secondary-400 bg-secondary-100 rounded-l-xl ">
          <span >سررسید یادداشت</span>
          <PersianDatePicker date={deadline} handleDateChange={(date) => setDeadline(date)} />
        </div>
      </div>
      <textarea className="textAreaFieldInput" rows={12} placeholder="متن یادداشت خود را وارد کنید ...." value={text} onChange={(e) => setText(e.target.value)} />
      <div className="flex items-center justify-between w-full">
        <button type="submit" className="bg-secondary-100 p-4 flex-1 rounded-xl hover:text-secondary-600 transition-all duration-200">
          {isEditMode ? "ویرایش" : "ذخیره"}
        </button>
      </div>
    </form>
  )
}
