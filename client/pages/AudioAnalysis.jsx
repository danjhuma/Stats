import React, { useEffect, useState } from 'react'; import axios from 'axios';

const AudioAnalysis = () => { const [trackId, setTrackId] = useState(''); const [features, setFeatures] = useState(null);

const fetchFeatures = () => { if (!trackId) return; axios.get(/api/audio-analysis/${trackId}) .then(res => setFeatures(res.data)) .catch(err => console.error(err)); };

return ( <div className="audio-analysis-page"> <h2>Audio Analysis</h2> <input type="text" placeholder="Enter Track ID" value={trackId} onChange={e => setTrackId(e.target.value)} /> <button onClick={fetchFeatures}>Analyze</button>

{features && (
    <div className="features">
      <p><strong>Danceability:</strong> {features.danceability}</p>
      <p><strong>Energy:</strong> {features.energy}</p>
      <p><strong>Tempo:</strong> {features.tempo}</p>
      <p><strong>Valence:</strong> {features.valence}</p>
      <p><strong>Acousticness:</strong> {features.acousticness}</p>
    </div>
  )}
</div>

); };

export default AudioAnalysis;

