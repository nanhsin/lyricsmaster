import React, { useState } from 'react';
import songs from "./util/songs";

/**
 * RecommendSong component
 * Displays a button to recommend a random song from the list
 * and shows the lyrics of the selected song with clickable words
 *
 * @param {Object} props - Component properties
 * @param {function} props.setSelectedWord - Function to set the selected word in the parent component
 * @returns {JSX.Element} The rendered RecommendSong component
 */

const RecommendSong = ({ setSelectedWord }) => {

    /**
     * State to hold the recommended song
     * This will be set when the user clicks the button
     * and a random song is selected in the function recommendRandomSong
     * @type {[Object|null, function]}
     * @typedef {Object} recommendedSong - The recommended song object
     * @property {string} title - The title of the song
     * @property {string} artist - The artist of the song
     * @property {string} lyrics - The lyrics of the song
     */

    const [recommendedSong, setRecommendedSong] = useState(null);

    /**
     * Function to recommend a random song from the list
     * @function
     * @returns {void}
     */

    const recommendRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRecommendedSong(songs[randomIndex]);
    };

    /**
     * Splits the lyrics into lines and words
     * and makes each word clickable
     * @function
     * @param {string} lyrics - The lyrics of the song
     * @returns {JSX.Element} The rendered clickable lyrics
     */

    const clickableLyrics = (lyrics) => {
        return lyrics.split("\n").map((line, lineIndex) => (
            <p key={lineIndex}>
                {line.split(" ").map((word, wordIndex) => (
                    <React.Fragment key={`${lineIndex}-${wordIndex}`}>
                        <span
                            className='clickable-word'
                            onClick={() => setSelectedWord(word.toLowerCase().replace(/[.,!?;:"()\[\]]/g, ''))}
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