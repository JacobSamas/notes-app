import React, { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (note) => {
    setNotes(notes.map(n => (n.id === note.id ? note : n)));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote, currentNote, setCurrentNote }}>
      {children}
    </NotesContext.Provider>
  );
};
