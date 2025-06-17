import React, { useEffect, useState } from 'react';

import axios from '../utils/axios';

const Saved = () => { const [tracks, setTracks] = useState([]); const [playlists, setPlaylists] = useState([]);

useEffect(() => { axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/saved/tracks`) .then(res => setTracks(res.data.items)) .catch(err => console.error(err));

axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/saved/playlists`)
  .then(res => setPlaylists(res.data.items))
  .catch(err => console.error(err));

}, []);

return ( <div className="saved-page"> <h2>Saved Tracks</h2> <ul> {tracks.map((item, i) => ( <li key={i}>{item.track.name} by {item.track.artists.map(a => a.name).join(', ')}</li> ))} </ul>

<h2>Saved Playlists</h2>
  <ul>
    {playlists.map((playlist, i) => (
      <li key={i}>{playlist.name}</li>
    ))}
  </ul>
</div>

); };

export default Saved;

