import React, { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  // Retrieve notes from local storage or set to empty array if not found
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState(null);
  const [searchText, setSearchText] = useState('');

  // Filter notes based on the search text
  const filteredNotes = searchText
    ? notes.filter(note =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.content.toLowerCase().includes(searchText.toLowerCase())
      )
    : notes;

  // Update local storage when notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes(prevNotes => [...prevNotes, { ...note, id: Date.now() }]);
    setCurrentNote(note);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    // Reset current note if it is the one being deleted
    if (currentNote?.id === id) {
      setCurrentNote(null);
    }
  };

  const updateNote = (updatedNote) => {
    setNotes(prevNotes => prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note));
    setCurrentNote(updatedNote); // Update the current note
  };

  // Function to update the search text
  const handleSearch = (term) => {
    setSearchText(term);
  };

  return (
    <NotesContext.Provider value={{ 
      notes: filteredNotes, 
      addNote, 
      deleteNote, 
      updateNote, 
      currentNote, 
      setCurrentNote,
      handleSearch,
      searchText // Provide searchText state to the context consumers
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
