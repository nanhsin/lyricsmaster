import React, {useState, useEffect} from 'react';

/**
 * LookUpDictionary component
 * Fetches and displays vocabulary data for a selected word
 * from the Dictionary API (https://dictionaryapi.dev/)
 * 
 * @param {Object} props - Component properties
 * @param {string} props.selectedWord - The word selected by the user in the RecommendSong component
 * @returns {JSX.Element} The rendered LookUpDictionary component
 */

const LookUpDictionary = ({ selectedWord }) => {

    /**
     * State to hold the fetched vocabulary data
     * This will be set when the Dictionary API successfully finds the word
     * @type {[Object|null, function]}
     * @typedef {Object} vocab - The vocabulary data fetched from the API
     * @property {string} word - The selected word
     * @property {string} partOfSpeech - The part of speech of the word
     * @property {string} phonetic - The phonetic spelling of the word
     * @property {string} definition - The definition of the word, or an error message if not found
     */

    const [vocab, setVocab] = useState(null);

    /**
     * Effect hook to fetch vocabulary data when the selected word changes
     * @function
     * @param {string} selectedWord - The word selected by the user in the RecommendSong component
     * @returns {void}
     */

    useEffect(() => {
        if (selectedWord) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
                .then(response => response.json())
                .then(data => {
                    if (data[0]) {
                        setVocab({
                            "word": selectedWord.toLowerCase(),
                            "partOfSpeech": data[0]["meanings"][0]["partOfSpeech"], 
                            "phonetic": data[0]["phonetics"][0]["text"],
                            "definition": data[0]["meanings"][0]["definitions"][0]["definition"]
                        });
                    }
                    else {
                        setVocab({
                            "word": selectedWord.toLowerCase(),
                            "partOfSpeech": "",
                            "phonetic": "",
                            "definition": "Oops! Couldn't find the word in the dictionary."
                        });
                    }
                })
                .catch(error => console.log("Error fetching data:", error));
            }
    }, [selectedWord]);

    // If no word is selected, show a default message
    if (!selectedWord) {
        return <p>Click a word to look it up</p>
    }

    // If fetch is still in progress, show loading message
    if (!vocab) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>{vocab.word}</h2>
            <p>{vocab.phonetic}</p>
            <p>{vocab.partOfSpeech}</p>
            <p>{vocab.definition}</p>
        </div>
    );
};

export default LookUpDictionary;