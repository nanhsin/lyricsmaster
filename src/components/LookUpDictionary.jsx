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
                            "word": selectedWord,
                            "partOfSpeech": data[0]["meanings"][0]["partOfSpeech"], 
                            "phonetic": data[0]["phonetics"][0]["text"],
                            "definition": data[0]["meanings"][0]["definitions"][0]["definition"]
                        });
                    }
                    else {
                        setVocab("No definition found");
                    }
                })
                .catch(error => console.log(error));
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
            <p><strong>Part of Speech:</strong> {vocab.partOfSpeech}</p>
            <p><strong>Phonetic:</strong> {vocab.phonetic}</p>
            <p><strong>Definition:</strong> {vocab.definition}</p>
        </div>
    );
};

export default LookUpDictionary;