import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from "../ui/Accordion";




interface Note {
  title: string;
  text: string;
  deadline: string;
  createdAt: string;
  id: string
}

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);




  useEffect(() => {
    getNotes()
  }, [])


  const getNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5003/notes");
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5003/notes/${id}`)
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
    } catch (error) {
      console.log(error);
    }
  }

 



  if (notes.length === 0) return <p className="text-secondary-500 font-extralight">یادداشتی برای مشاهده وجود ندارد لطفا یادداشت جدیدی ایجاد کنید .</p>


  return (
    <div className="w-full text-secondary-400">
      {
        notes.map((note) => {
          return (
            <Accordion
              key={note.id}
              noteBody={note.text}
              noteId={note.id}
              noteHeader={note.title}
              deadline={note.deadline}
              createdAt={note.createdAt}
              onDelete={handleDelete}

            />
          )
        })
      }
    </div>
  )
}
