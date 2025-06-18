import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function Recent() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/recent`)
      .then((res) => setRecent(res.data.items || res.data))
      .catch((err) => console.error('Recent error:', err));
  }, []);

  return (
    <div>
      <h1>Recently Played</h1>
      <ul>
        {recent.map((entry, i) => {
          const track = entry.track || entry;
          return (
            <li key={track.id || i}>
              {track.name} by {track.artists?.map((a) => a.name).join(', ')}
            </li>
          );
        })}
      </ul>
    </div>
  );
                                                                      }
