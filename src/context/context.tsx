import { createContext, useContext, useState, ReactNode } from "react";


type NoteContextType = {
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
  noteIdToEdit: string | null;
  setNoteIdToEdit: (id: string | null) => void;
};

type NoteProviderProps = {
  children: ReactNode;
};

const NoteContext = createContext<NoteContextType | undefined>(undefined);


export function NoteProvider({ children }: NoteProviderProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [noteIdToEdit, setNoteIdToEdit] = useState<string | null>(null);

  return (
    <NoteContext.Provider value={{ isEditMode, setIsEditMode, noteIdToEdit, setNoteIdToEdit }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNote() {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error("useNote must be used within a NoteProvider");
  }

  return context;
}
