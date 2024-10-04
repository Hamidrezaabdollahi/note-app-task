import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from "../ui/Accordion";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";


interface Note {
  title: string;
  text: string;
  deadline: string;
  createdAt: string;
  id: string;
}

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  const getNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5003/notes");
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5003/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return; 

    const reorderedNotes = Array.from(notes);
    const [movedNote] = reorderedNotes.splice(source.index, 1);
    reorderedNotes.splice(destination.index, 0, movedNote);
    setNotes(reorderedNotes);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="notesDroppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full text-secondary-400"
          >
            {notes.map((note, index) => (
              <Draggable key={note.id} draggableId={note.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="flex flex-col "
                  >
                    <Accordion
                      noteBody={note.text}
                      noteId={note.id}
                      noteHeader={note.title}
                      deadline={note.deadline}
                      createdAt={note.createdAt}
                      onDelete={handleDelete}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
