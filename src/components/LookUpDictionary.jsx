import React, {useState, useEffect} from 'react';

const LookUpDictionary = ({ selectedWord }) => {

    const [vocab, setVocab] = useState(null);

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

    // If fetch is still in progress, show loading
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