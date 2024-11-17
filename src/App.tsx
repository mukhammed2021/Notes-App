import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { NotesProvider } from "./context/NotesContext";

export default function App() {
   return (
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
         <div className="mx-auto w-full max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold">Notes App</h1>
            <NotesProvider>
               <NoteForm />
               <Notes />
            </NotesProvider>
         </div>
      </div>
   );
}
