import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { NotesProvider } from './NotesContext';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
          <NoteList />
          <NoteEditor />
        </div>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
