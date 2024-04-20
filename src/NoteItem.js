import React from 'react';

function NoteItem({ note, setCurrentNote }) {
  return (
    <div onClick={() => setCurrentNote(note)} className="p-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
      <h3 className="font-bold">{note.title || "Untitled Note"}</h3>
      <p className="text-gray-600 dark:text-gray-300">{note.content.substring(0, 50)}...</p>
    </div>
  );
}

export default NoteItem;
