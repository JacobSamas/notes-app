import React, { useState, useEffect } from 'react';
import { useNotes } from './NotesContext';

function NoteEditor() {
  const [note, setNote] = useState({ id: null, title: '', content: '' });
  const { addNote, updateNote, currentNote } = useNotes();

  useEffect(() => {
    if (currentNote) setNote(currentNote);
    else setNote({ id: null, title: '', content: '' });
  }, [currentNote]);

  const handleChange = (key, value) => {
    setNote(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (note.id) updateNote(note);
    else addNote({ ...note, id: Date.now() });
  };

  return (
    <div className="flex-1 p-4">
      <input
        type="text"
        value={note.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-4 border rounded dark:border-gray-700"
      />
      <textarea
        value={note.content}
        onChange={(e) => handleChange('content', e.target.value)}
        placeholder="Content"
        className="w-full h-72 p-2 border rounded dark:border-gray-700"
      />
      <button onClick={handleSave} className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save
      </button>
    </div>
  );
}

export default NoteEditor;
