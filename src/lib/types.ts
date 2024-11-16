export interface Note {
   id: `${string}-${string}-${string}-${string}-${string}`;
   title: string;
   content: string;
}
export type ACTIONTYPE =
   | { type: "added"; payload: Note }
   | { type: "deleted"; payload: string }
   | { type: "edited"; payload: Note }
   | { type: "updated"; payload: Note };
