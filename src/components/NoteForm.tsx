import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNotes } from "@/context/NotesContext";

export default function NoteForm() {
   const { editingNote, dispatch } = useNotes();

   const [note, setNote] = useState({
      id: self.crypto.randomUUID(),
      title: "",
      content: "",
   });

   useEffect(() => {
      if (editingNote) setNote(editingNote);
   }, [editingNote]);

   function handleClick() {
      if (editingNote) {
         dispatch({ type: "updated", payload: note });
      } else {
         if (note.title.trim() && note.content.trim())
            dispatch({ type: "added", payload: note });
      }
      setNote({
         id: self.crypto.randomUUID(),
         title: "",
         content: "",
      });
   }

   return (
      <Card className="mb-6">
         <CardHeader>
            <CardTitle>{editingNote ? "Edit Note" : "Add New Note"}</CardTitle>
         </CardHeader>
         <CardContent>
            <Input
               value={note.title}
               onChange={(e) => setNote({ ...note, title: e.target.value })}
               type="text"
               placeholder="Title"
               className="mb-4"
            />
            <Textarea
               value={note.content}
               onChange={(e) => setNote({ ...note, content: e.target.value })}
               placeholder="Content"
            />
         </CardContent>
         <CardFooter>
            <Button
               onClick={handleClick}
               className="inline-flex items-center gap-3"
            >
               <Plus />
               {editingNote ? "Edit Note" : "Add Note"}
            </Button>
         </CardFooter>
      </Card>
   );
}
