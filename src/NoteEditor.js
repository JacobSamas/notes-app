import React, { useState, useEffect } from 'react';

function NoteEditor({ currentNote, addNote, updateNote }) {
  const [note, setNote] = useState({ title: '', content: '', id: null });

  useEffect(() => {
    if (currentNote) {
      setNote(currentNote);
    } else {
      setNote({ title: '', content: '', id: null });
    }
  }, [currentNote]);

  function handleSave() {
    if (note.id) {
      updateNote(note);
    } else {
      addNote({ ...note, id: Date.now() });
      setNote({ title: '', content: '', id: null });
    }
  }

  return (
    <div className="flex-1 p-8">
      <input
        type="text"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        placeholder="Title"
        className="w-full p-2 mb-4 border-2 border-gray-200 rounded-md focus:border-blue-500 focus:outline-none"
      />
      <textarea
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        placeholder="Content"
        className="w-full h-64 p-2 border-2 border-gray-200 rounded-md focus:border-blue-500 focus:outline-none"
      />
      <button onClick={handleSave} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
    </div>
  );
}

export default NoteEditor;
