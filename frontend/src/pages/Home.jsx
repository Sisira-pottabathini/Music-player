// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <h1>Music App</h1>
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <div className="welcome">
        <h2>Welcome to the Music App</h2>
        <p>Listen to your favorite music anywhere, anytime!</p>
      </div>
    </div>
  );
};

export default Home;