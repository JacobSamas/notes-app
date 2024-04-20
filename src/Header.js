import React from 'react';
import { useNotes } from './NotesContext';
import { useTheme } from './ThemeContext'; 

function Header() {
  const { addNote, handleSearch } = useNotes();
  const { toggleTheme } = useTheme(); 

  const handleNewNote = () => {
    const newNote = { id: Date.now(), title: '', content: '' };
    addNote(newNote);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">Notes</h1>
      <div className="flex gap-2 items-center">
        <input
          type="search"
          placeholder="Search notes"
          onChange={(e) => handleSearch(e.target.value)}
          className="px-2 py-1 border rounded dark:border-gray-700 flex-grow"
        />
        <button
          onClick={handleNewNote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          New Note
        </button>
        <button
          onClick={toggleTheme}
          className="ml-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}

export default Header;
