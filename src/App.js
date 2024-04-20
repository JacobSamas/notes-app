import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    const newNotes = [...notes, note];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  function updateNote(updatedNote) {
    const newNotes = notes.map(note => {
      return note.id === updatedNote.id ? updatedNote : note;
    });
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <NoteList notes={notes} setCurrentNote={setCurrentNote} deleteNote={deleteNote} />
      <NoteEditor currentNote={currentNote} addNote={addNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
