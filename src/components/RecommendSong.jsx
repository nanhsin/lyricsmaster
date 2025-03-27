import React, { useState, useEffect } from 'react';
import songs from "./util/songs";

const RecommendSong = () => {

    const [recommendedSong, setRecommendedSong] = useState("");

    // Recommend a random song from the list saved in ./util/songs.js
    const recommendRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRecommendedSong(songs[randomIndex]);
    };

    // Fetch dictionary API to get the definition of the word
    // @todo useEffect
    // @todo display the result
    // @todo assynchronous fetchSS
    const fetchDictionary = (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    // Split the lyrics into words and make each word clickable
    const clickableLyrics = (lyrics) => {
        return lyrics.split(" ").map((word, index) => {
            return (
                    <span
                        key={index}
                        className='clickable-word'
                        onClick={() => fetchDictionary(word)}
                    >{word} </span>
            );
        });
    }

    return (
        <div>
            <button onClick={recommendRandomSong}>Recommend a Random Song</button>
            <h2>{recommendedSong && `${recommendedSong.title}`}</h2>
            <h3>{recommendedSong && `${recommendedSong.artist}`}</h3>
            <p>{recommendedSong && `${recommendedSong.lyrics}`}</p>
            <p>{recommendedSong && clickableLyrics(recommendedSong.lyrics)}</p>
        </div>
    );
};

export default RecommendSong;