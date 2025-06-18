import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/saved`)
      .then((res) => setSaved(res.data.items || res.data))
      .catch((err) => console.error('Saved error:', err));
  }, []);

  return (
    <div>
      <h1>Saved Tracks/Playlists</h1>
      <ul>
        {saved.map((item, i) => (
          <li key={item.id || i}>{item.name || item.track?.name}</li>
        ))}
      </ul>
    </div>
  );
}
