import React, { useState, useEffect } from 'react';
import { useNotes } from './NotesContext';

function NoteEditor() {
  const [note, setNote] = useState({ id: null, title: '', content: '' });
  const { addNote, updateNote, deleteNote, currentNote } = useNotes();

  useEffect(() => {
    // When currentNote is set to null, reset the note editor
    setNote(currentNote || { id: null, title: '', content: '' });
  }, [currentNote]);

  const handleChange = (key, value) => {
    setNote(prevNote => ({ ...prevNote, [key]: value }));
  };

  const handleSave = () => {
    if (note.id) {
      updateNote(note);
    } else {
      addNote({ ...note, id: Date.now() });
      setNote({ id: null, title: '', content: '' }); // Reset the note editor after adding a new note
    }
  };

  const handleDelete = () => {
    if (note.id) {
      deleteNote(note.id);
      setNote({ id: null, title: '', content: '' }); // Reset the note editor after deleting the note
    }
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
      <div className="flex justify-start space-x-4 mt-4">
        <button 
          onClick={handleSave} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Save
        </button>
        {currentNote && (
          <button 
            onClick={handleDelete} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteEditor;
