import React from 'react';
import { useNotes } from './NotesContext';
import { useTheme } from './ThemeContext';

function Header() {
  const { addNote, handleSearch } = useNotes();
  const { theme, toggleTheme } = useTheme();

  const handleNewNote = () => {
    const newNote = { id: Date.now(), title: '', content: '' };
    addNote(newNote);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">Notes</h1>
      <div className="flex gap-4 items-center">
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
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <label htmlFor="toggle" className="text-xs text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </label>
      </div>
    </header>
  );
}

export default Header;

