import './App.css';
import React, { useState} from 'react';
import RecommendSong from './components/RecommendSong';
import LookUpDictionary from './components/LookUpDictionary';

function App() {
  const [selectedWord, setSelectedWord] = useState("");

  return (
    <div className="App">
      <h1>Lyrics Master</h1>
      <div className="container">
        <div className="left-panel">
          <RecommendSong setSelectedWord={setSelectedWord} />
        </div>
        <div className="right-panel">
          <LookUpDictionary selectedWord={selectedWord} />
        </div>
      </div>
    </div>
  );
}

export default App;