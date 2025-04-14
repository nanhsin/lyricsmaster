import './App.css';
import React, { useState} from 'react';
import RecommendSong from './components/RecommendSong';
import LookUpDictionary from './components/LookUpDictionary';

function App() {
  // State to hold the selected word from the lyrics
  // This will be set when the user clicks a word in the lyrics
  // on the left panel - RecommendSong component
  // and passed to the right panel - LookUpDictionary component
  // to fetch the vocabulary data from the Dictionary API
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