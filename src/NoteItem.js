import React from 'react';
import { useNotes } from './NotesContext';

function NoteItem({ note, setCurrentNote }) {
  const { currentNote } = useNotes();

  const isActive = currentNote && currentNote.id === note.id;
  const itemClasses = `p-2 cursor-pointer ${isActive ? 'bg-blue-200 dark:bg-gray-600' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}`;

  return (
    <div onClick={() => setCurrentNote(note)} className={itemClasses}>
      <h3 className="font-bold truncate">{note.title || "Untitled Note"}</h3>
      <p className="text-gray-600 dark:text-gray-300 truncate">{note.content.substring(0, 50)}...</p>
    </div>
  );
}

export default NoteItem;
