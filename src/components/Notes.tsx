import Note from "./Note";
import { type ACTIONTYPE, type Note as NoteType } from "../lib/types";

interface NotesProps {
   notes: NoteType[];
   dispatch: React.Dispatch<ACTIONTYPE>;
}

export default function Notes({ notes, dispatch }: NotesProps) {
   return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-4">
         {notes.map((note: NoteType) => (
            <Note key={note.id} note={note} dispatch={dispatch} />
         ))}
      </div>
   );
}
