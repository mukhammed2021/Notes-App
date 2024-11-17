import { Note } from "@/lib/types";
import { createContext, useContext, useEffect, useReducer } from "react";

interface NotesProviderProps {
   children: React.ReactNode;
}

interface NotesContextType {
   editingNote: Note | null;
   notes: Note[];
   dispatch: React.Dispatch<ACTIONTYPE>;
}

const initialNotes = {
   editingNote: null as Note | null,
   notes: JSON.parse(localStorage.getItem("notesReduce") ?? "[]"),
};

type ACTIONTYPE =
   | { type: "added"; payload: Note }
   | { type: "deleted"; payload: string }
   | { type: "edited"; payload: Note }
   | { type: "updated"; payload: Note };

function reducer(notes: typeof initialNotes, action: ACTIONTYPE) {
   switch (action.type) {
      case "added":
         return {
            ...notes,
            notes: [...notes.notes, action.payload],
            editingNote: null,
         };
      case "deleted":
         return {
            ...notes,
            notes: notes.notes.filter(
               (note: Note) => note.id !== action.payload,
            ),
            editingNote: null,
         };
      case "edited":
         return { ...notes, editingNote: action.payload };
      case "updated":
         return {
            ...notes,
            notes: notes.notes.map((note: Note) =>
               note.id === action.payload.id ? action.payload : note,
            ),
            editingNote: null,
         };

      default:
         throw new Error("Unknown action type");
   }
}

const NotesContext = createContext<NotesContextType | null>(null);

function NotesProvider({ children }: NotesProviderProps) {
   const [{ editingNote, notes }, dispatch] = useReducer(reducer, initialNotes);

   useEffect(() => {
      localStorage.setItem("notesReduce", JSON.stringify(notes));
   }, [notes]);

   return (
      <NotesContext.Provider
         value={{
            editingNote,
            notes,
            dispatch,
         }}
      >
         {children}
      </NotesContext.Provider>
   );
}

function useNotes() {
   const notesContext = useContext(NotesContext);

   if (!notesContext) {
      throw new Error("useNotes has to be used within <NotesContext.Provider>");
   }

   return notesContext;
}

export { NotesProvider, useNotes };
