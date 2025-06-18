// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Callback from './pages/Callback.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Genres from './pages/Genres.jsx';
import Recent from './pages/Recent.jsx';
import Saved from './pages/Saved.jsx';
import TopArtists from './pages/TopArtists.jsx';
import TopTracks from './pages/TopTracks.jsx';
import AudioAnalysis from './pages/AudioAnalysis.jsx';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/callback" element={<Callback />} />

      {/* Protected routes with shared layout */}
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="genres" element={<Genres />} />
        <Route path="recent" element={<Recent />} />
        <Route path="saved" element={<Saved />} />
        <Route path="top-artists" element={<TopArtists />} />
        <Route path="top-tracks" element={<TopTracks />} />
        <Route path="audio-analysis" element={<AudioAnalysis />} />
      </Route>
    </Routes>
  );
}

export default App;
