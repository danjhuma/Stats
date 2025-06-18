import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function TopTracks() {
  const [tracks, setTracks] = useState([]);
  const [range, setRange] = useState('medium_term');

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/top/tracks?time_range=${range}`
      )
      .then((res) => setTracks(res.data.items))
      .catch((err) => console.error('TopTracks error:', err));
  }, [range]);

  return (
    <div>
      <h1>Top Tracks</h1>
      <select value={range} onChange={(e) => setRange(e.target.value)}>
        <option value="short_term">4 Weeks</option>
        <option value="medium_term">6 Months</option>
        <option value="long_term">All Time</option>
      </select>
      <ul>
        {tracks.map((t, i) => (
          <li key={t.id}>
            {i + 1}. {t.name} — {t.artists.map((a) => a.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
