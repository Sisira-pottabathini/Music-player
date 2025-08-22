// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MusicPlayer from './pages/MusicPlayer';
import { api } from "./lib/api";   // axios instance we created earlier

const App = () => {
  const [status, setStatus] = useState("Checking backend...");

  // Health check when app loads
  useEffect(() => {
    api.get("/api/health")
      .then((res) => {
        setStatus(res.data?.msg || "✅ Connected");
      })
      .catch((err) => {
        console.error("Backend error:", err);
        setStatus("❌ Cannot reach backend");
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Global backend connection status */}
        <header style={{ padding: "1rem", background: "#f5f5f5" }}>
          <strong>Backend status:</strong> {status}
        </header>

        {/* Your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/music-player" element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
