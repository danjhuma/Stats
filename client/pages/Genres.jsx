import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function Genres() {
  const [genres, setGenres] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/genres`)
      .then((res) => setGenres(res.data))
      .catch((err) => console.error('Genres error:', err));
  }, []);

  return (
    <div>
      <h1>Genre Breakdown</h1>
      <ul>
        {Object.entries(genres).map(([g, count]) => (
          <li key={g}>
            {g}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
        }
