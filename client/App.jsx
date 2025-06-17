import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // after login
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';
import AudioAnalysis from './pages/AudioAnalysis';

const App = () => {
  const isAuthenticated = document.cookie.includes('connect.sid'); // basic check for session

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/top-tracks" element={isAuthenticated ? <TopTracks /> : <Navigate to="/" />} />
        <Route path="/top-artists" element={isAuthenticated ? <TopArtists /> : <Navigate to="/" />} />
        <Route path="/audio-analysis" element={isAuthenticated ? <AudioAnalysis /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
