import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Callback from './pages/Callback';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';
import AudioAnalysis from './pages/AudioAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top-tracks" element={<TopTracks />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/audio-analysis" element={<AudioAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
