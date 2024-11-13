import Note from "./Note";

export default function Notes() {
   return (
      <div className="grid grid-cols-3 gap-4">
         <Note />
         <Note />
         <Note />
      </div>
   );
}
