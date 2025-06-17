import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Recent = () => { const [tracks, setTracks] = useState([]);

useEffect(() => { axios.get('${import.meta.env.VITE_API_BASE_URL}/api/recent') .then(res => setTracks(res.data.items)) .catch(err => console.error(err)); }, []);

return ( <div className="recent-page"> <h2>Recently Played</h2> <ul> {tracks.map((item, index) => ( <li key={index}> {item.track.name} by {item.track.artists.map(a => a.name).join(', ')} </li> ))} </ul> </div> ); };

export default Recent;

