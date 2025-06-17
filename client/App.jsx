import React, { useState, useEffect } from 'react'; import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; import Dashboard from './pages/Dashboard'; import TopTracks from './pages/TopTracks'; import TopArtists from './pages/TopArtists'; import Recent from './pages/Recent'; import Genres from './pages/Genres'; import Saved from './pages/Saved'; import AudioAnalysis from './pages/AudioAnalysis'; import './App.css';

const App = () => { const [darkMode, setDarkMode] = useState(false);

useEffect(() => { document.body.className = darkMode ? 'dark' : 'light'; }, [darkMode]);

return ( <Router> <div className="app-container"> <nav> <Link to="/">Dashboard</Link> <Link to="/top-tracks">Top Tracks</Link> <Link to="/top-artists">Top Artists</Link> <Link to="/recent">Recent</Link> <Link to="/genres">Genres</Link> <Link to="/saved">Saved</Link> <Link to="/audio-analysis">Audio Analysis</Link> <button onClick={() => setDarkMode(!darkMode)}> {darkMode ? 'Light Mode' : 'Dark Mode'} </button> </nav>

<Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/top-tracks" element={<TopTracks />} />
      <Route path="/top-artists" element={<TopArtists />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/audio-analysis" element={<AudioAnalysis />} />
    </Routes>
  </div>
</Router>

); };

export default App;

