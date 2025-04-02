/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Player.css';

const Player = ({ song, nextSong, prevSong }) => {
  return (
    <div className="player">
      <div className="song-details">
        <img src={song.cover} alt={`${song.title} cover`} className="song-cover" />
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <audio controls src={song.src} className="audio-player"></audio>
      <div className="controls">
        <button onClick={prevSong}>⏮️ Previous</button>
        <button onClick={nextSong}>⏭️ Next</button>
      </div>
    </div>
  );
};

export default Player;
