import React from 'react';
import { useNotes } from './NotesContext';
import NoteItem from './NoteItem';

function NoteList() {
  const { notes, setCurrentNote } = useNotes();

  return (
    <div className="w-1/4 bg-white dark:bg-gray-800 overflow-auto">
      <div className="p-5">
        {notes.map(note => (
          <NoteItem key={note.id} note={note} setCurrentNote={setCurrentNote} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
