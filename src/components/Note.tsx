import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";

export default function Note() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Title</CardTitle>
         </CardHeader>
         <CardContent>Content</CardContent>
         <CardFooter className="flex items-center gap-4">
            <Button
               variant="outline"
               className="inline-flex items-center gap-4 w-full"
            >
               <Edit />
               Edit
            </Button>
            <Button
               variant="destructive"
               className="inline-flex items-center gap-4 w-full"
            >
               <Trash2 />
               Delete
            </Button>
         </CardFooter>
      </Card>
   );
}
