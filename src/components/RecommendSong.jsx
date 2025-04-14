import React, { useState } from 'react';
import songs from "./util/songs";

const RecommendSong = ({ setSelectedWord }) => {

    // State to hold the recommended song
    // This will be set when the user clicks the button
    // and a random song is selected in the function recommendRandomSong
    const [recommendedSong, setRecommendedSong] = useState(null);

    // Recommend a random song from the list saved in ./util/songs.js
    const recommendRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRecommendedSong(songs[randomIndex]);
    };

    // Split the lyrics into lines and words 
    // and make each word clickable
    const clickableLyrics = (lyrics) => {
        return lyrics.split("\n").map((line, lineIndex) => (
            <p key={lineIndex}>
                {line.split(" ").map((word, wordIndex) => (
                    <React.Fragment key={`${lineIndex}-${wordIndex}`}>
                        <span
                            className='clickable-word'
                            onClick={() => setSelectedWord(word)}
                        >
                            {word}
                        </span>
                        {" "}
                    </React.Fragment>
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
                    <div className="lyrics-container">
                        {clickableLyrics(recommendedSong.lyrics)}
                    </div>
                </>
            )}
        </div>
    );
};

export default RecommendSong;