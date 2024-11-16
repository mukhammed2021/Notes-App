import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";
import { ACTIONTYPE, Note as NoteType } from "../lib/types";

interface NoteProps {
   note: NoteType;
   dispatch: React.Dispatch<ACTIONTYPE>;
}

export default function Note({ note, dispatch }: NoteProps) {
   const { id, title, content } = note;

   function handleClickDelete() {
      dispatch({ type: "deleted", payload: id });
   }

   function handleClickEdit() {
      dispatch({ type: "edited", payload: { id, title, content } });
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>{content}</CardContent>
         <CardFooter className="flex items-center gap-4">
            <Button
               variant="outline"
               onClick={handleClickEdit}
               className="inline-flex w-full items-center gap-4"
            >
               <Edit />
               Edit
            </Button>
            <Button
               variant="destructive"
               onClick={handleClickDelete}
               className="inline-flex w-full items-center gap-4"
            >
               <Trash2 />
               Delete
            </Button>
         </CardFooter>
      </Card>
   );
}
