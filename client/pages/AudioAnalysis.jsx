import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function AudioAnalysis() {
  const [trackId, setTrackId] = useState('');
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    if (!trackId) return;
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/analysis/${trackId}`
      )
      .then((res) => setAnalysis(res.data))
      .catch((err) => console.error('AudioAnalysis error:', err));
  }, [trackId]);

  return (
    <div>
      <h1>Audio Analysis</h1>
      <input
        type="text"
        placeholder="Enter Track ID"
        value={trackId}
        onChange={(e) => setTrackId(e.target.value)}
      />
      {analysis ? (
        <pre>{JSON.stringify(analysis, null, 2)}</pre>
      ) : (
        <p>Enter a track ID to see analysis.</p>
      )}
    </div>
  );
}
