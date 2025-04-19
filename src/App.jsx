import './App.css';
import React, { useState} from 'react';
import RecommendSong from './components/RecommendSong';
import LookUpDictionary from './components/LookUpDictionary';

/**
 * Main App component
 * Renders the layout with two panels:
 * 1. Left panel - RecommendSong component
 * 2. Right panel - LookUpDictionary component
 * Manages the `selectedWord` state to pass between components
 * 
 * @returns {JSX.Element} The rendered App component
 */

function App() {
  /**
   * State to hold the selected word from the lyrics
   * Passed to LookUpDictionary component to fetch vocabulary data
   * @type {[string, function]}
   */
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