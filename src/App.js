import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="flex h-screen bg-gray-100">
        <div className="w-60 p-5 bg-white">
          <h1 className="text-xl font-bold">Notes</h1>
          <ul>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Note 1</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Note 2</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Note 3</li>
          </ul>
        </div>
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-4">Selected Note Title</h2>
          <p>This is where the selected note's content will appear...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
