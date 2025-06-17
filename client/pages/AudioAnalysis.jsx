import React, { useState } from 'react';
import axios from '../utils/axios';

const AudioAnalysis = () => {
  const [trackId, setTrackId] = useState('');
  const [features, setFeatures] = useState(null);

  const fetchFeatures = () => {
    if (!trackId) return;
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/audio-analysis/${trackId}`)
      .then((res) => setFeatures(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="audio-analysis-page">
      <h2>Audio Analysis</h2>
      <input
        type="text"
        placeholder="Enter Track ID"
        value={trackId}
        onChange={(e) => setTrackId(e.target.value)}
      />
      <button onClick={fetchFeatures}>Analyze</button>

      {features && (
        <pre>{JSON.stringify(features, null, 2)}</pre>
      )}
    </div>
  );
};

export default AudioAnalysis;
