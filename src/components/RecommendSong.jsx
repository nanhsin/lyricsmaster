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
        return lyrics.split("\n").map((line, lineIndex) => (
            <p key={lineIndex}>
                {line.split(" ").map((word, wordIndex) => (
                    <>
                        <span
                            key={wordIndex}
                            className='clickable-word'
                            onClick={() => setSelectedWord(word)}
                        >
                            {word}
                        </span>
                        {" "}
                    </>
                ))}
            </p>
        ));
    };

    return (
        <div>
            <button onClick={recommendRandomSong}>Recommend a Song</button>
            {recommendedSong && (
                <>
                    <h2>{recommendedSong.title}</h2>
                    <h3>{recommendedSong.artist}</h3>
                    <p className="lyrics-container">{clickableLyrics(recommendedSong.lyrics)}</p>
                </>
            )}
        </div>
    );
};

export default RecommendSong;