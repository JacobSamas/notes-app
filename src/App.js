import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { NotesProvider } from './NotesContext';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import Header from './Header'; 

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
          <Header /> {/* Include the Header component */}
          <div className="flex flex-1">
            <NoteList />
            <NoteEditor />
          </div>
        </div>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
