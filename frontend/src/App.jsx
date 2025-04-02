// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MusicPlayer from './pages/MusicPlayer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/music-player" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
