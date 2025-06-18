import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function TopArtists() {
  const [artists, setArtists] = useState([]);
  const [range, setRange] = useState('medium_term');

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/top/artists?time_range=${range}`
      )
      .then((res) => setArtists(res.data.items))
      .catch((err) => console.error('TopArtists error:', err));
  }, [range]);

  return (
    <div>
      <h1>Top Artists</h1>
      <select value={range} onChange={(e) => setRange(e.target.value)}>
        <option value="short_term">4 Weeks</option>
        <option value="medium_term">6 Months</option>
        <option value="long_term">All Time</option>
      </select>
      <ul>
        {artists.map((a, i) => (
          <li key={a.id}>
            {i + 1}. {a.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
