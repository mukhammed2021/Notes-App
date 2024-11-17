import Note from "./Note";
import { type Note as NoteType } from "../lib/types";
import { useNotes } from "@/context/NotesContext";

export default function Notes() {
   const { notes } = useNotes();

   return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-4">
         {notes.map((note: NoteType) => (
            <Note key={note.id} note={note} />
         ))}
      </div>
   );
}
