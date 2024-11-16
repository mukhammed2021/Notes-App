import { useEffect, useReducer } from "react";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { type ACTIONTYPE, type Note } from "./lib/types";

const initialNotes = {
   editingNote: null as Note | null,
   notes: JSON.parse(localStorage.getItem("notesReduce")!) ?? ([] as Note[]),
};

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

export default function App() {
   const [{ editingNote, notes }, dispatch] = useReducer(reducer, initialNotes);

   useEffect(() => {
      localStorage.setItem("notesReduce", JSON.stringify(notes));
   }, [notes]);

   return (
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
         <div className="mx-auto w-full max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold">Notes App</h1>
            <NoteForm editingNote={editingNote} dispatch={dispatch} />
            <Notes notes={notes} dispatch={dispatch} />
         </div>
      </div>
   );
}
