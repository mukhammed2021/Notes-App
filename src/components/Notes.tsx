import Note from "./Note";

export default function Notes() {
   return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-4">
         <Note />
         <Note />
         <Note />
      </div>
   );
}
