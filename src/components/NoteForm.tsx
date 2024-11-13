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
import { Plus } from "lucide-react";

export default function NoteForm() {
   return (
      <Card className="mb-6">
         <CardHeader>
            <CardTitle>Add New Note</CardTitle>
         </CardHeader>
         <CardContent>
            <Input type="text" placeholder="Title" className="mb-4" />
            <Textarea placeholder="Content" />
         </CardContent>
         <CardFooter>
            <Button className="inline-flex items-center gap-3">
               <Plus />
               Add Note
            </Button>
         </CardFooter>
      </Card>
   );
}
