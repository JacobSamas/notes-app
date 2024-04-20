function NoteList({ notes, setCurrentNote, deleteNote }) {
    return (
      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Notes</h2>
        {notes.map(note => (
          <div key={note.id} className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer">
            <span onClick={() => setCurrentNote(note)} className="flex-1">
              {note.title || "New Note"}
            </span>
            <button onClick={() => deleteNote(note.id)} className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default NoteList;
  