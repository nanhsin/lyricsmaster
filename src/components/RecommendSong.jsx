import React, { useState } from 'react';
import songs from "./util/songs";

const RecommendSong = ({ setSelectedWord }) => {

    const [recommendedSong, setRecommendedSong] = useState(null);

    // Recommend a random song from the list saved in ./util/songs.js
    const recommendRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRecommendedSong(songs[randomIndex]);
    };

    // Split the lyrics into words and make each word clickable
    const clickableLyrics = (lyrics) => {
        return lyrics.split(" ").map((word, index) => (
            <span
                key={index}
                className='clickable-word'
                onClick={() => setSelectedWord(word)}
            >
                {word + " "}
            </span>
        ));
    };

    return (
        <div>
            <button onClick={recommendRandomSong}>Recommend a Random Song</button>
            {recommendedSong && (
                <>
                    <h2>{recommendedSong.title}</h2>
                    <h3>{recommendedSong.artist}</h3>
                    <p>{clickableLyrics(recommendedSong.lyrics)}</p>
                </>
            )}
        </div>
    );
};

export default RecommendSong;