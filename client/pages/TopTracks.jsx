import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const timeRanges = [
  { label: '4 Weeks', value: 'short_term' },
  { label: '6 Months', value: 'medium_term' },
  { label: 'All Time', value: 'long_term' },
];

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [range, setRange] = useState('short_term');

  useEffect(() => {
    axios
      .get(`/api/top/tracks?time_range=${range}`)
      .then((res) => setTracks(res.data.items))
      .catch((err) => console.error(err));
  }, [range]);

  return (
    <div className="top-tracks-page">
      <h2>Top Tracks</h2>
      <select value={range} onChange={(e) => setRange(e.target.value)}>
        {timeRanges.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
      <ul>
        {tracks.map((track, index) => (
          <li key={track.id}>
            <strong>{index + 1}.</strong> {track.name} by{' '}
            {track.artists.map((a) => a.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
