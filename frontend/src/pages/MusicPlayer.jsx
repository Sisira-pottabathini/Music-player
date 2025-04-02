// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Player from '../components/Player';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [songs] = useState([
        {
          title: 'inspirational-uplifting-calm-piano',
          artist: 'Leburchmus',
          src: '/music/inspirational-uplifting-calm-piano-254764.mp3',
          cover: '/images/image11.jpg',
        },
        {
          title: 'relaxing-piano-music',
          artist: 'Clavier-Music',
          src: '/music/relaxing-piano-music-248868.mp3',
          cover: '/images/image12.webp',
        },
        {
          title: 'motivational-corporate-city',
          artist: 'DayMorning',
          src: '/music/motivational-background-corporate-city-273359.mp3',
          cover: '/images/image13.webp',
        },
        {
          title: 'upbeat-music',
          artist: 'InPlusMusic',
          src: '/music/upbeat-background-music-278928.mp3',
          cover: '/images/image15.jpg',
        },
        {
          title: 'chill-downtempo-cinematic',
          artist: 'MusicArt',
          src: '/music/lost-in-dreams-abstract-chill-downtempo-cinematic-future-beats-270241.mp3',
          cover: '/images/image17.jpg',
        },
      ]);
      

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      (prevIndex - 1 + songs.length) % songs.length
    );
  };

  return (
    <div className="music-player">
      <Player
        song={songs[currentSongIndex]}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </div>
  );
};

export default MusicPlayer;
