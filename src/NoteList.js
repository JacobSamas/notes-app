import React from 'react';
import { useNotes } from './NotesContext';
import NoteItem from './NoteItem';

function NoteList() {
  const { notes, setCurrentNote, addNote } = useNotes();

  const handleNewNote = () => {
    const newNote = { id: Date.now(), title: '', content: '' };
    addNote(newNote);
    setCurrentNote(newNote);
  };

  return (
    <div className="w-1/4 bg-white dark:bg-gray-800 overflow-auto">
      <div className="p-5">
        <button
          onClick={handleNewNote}
          className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          New Note
        </button>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} setCurrentNote={setCurrentNote} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
