// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Dashboard from "./pages/Dashboard";
import TopTracks from "./pages/TopTracks";
import TopArtists from "./pages/TopArtists";
import Recent from "./pages/Recent";
import AudioAnalysis from "./pages/AudioAnalysis";
import Saved from "./pages/Saved";
import Genres from "./pages/Genres";

const App = () => {
  const isAuthenticated = localStorage.getItem("access_token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/top-tracks" element={<TopTracks />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/audio-analysis" element={<AudioAnalysis />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/genres" element={<Genres />} />
          </>
        )}

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
