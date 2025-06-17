import React, { useEffect, useState } from 'react'; import axios from 'axios';

const timeRanges = [ { label: '4 Weeks', value: 'short_term' }, { label: '6 Months', value: 'medium_term' }, { label: 'All Time', value: 'long_term' } ];

const TopArtists = () => { const [artists, setArtists] = useState([]); const [range, setRange] = useState('short_term');

useEffect(() => { axios.get(/api/top/artists?time_range=${range}) .then(res => setArtists(res.data.items)) .catch(err => console.error(err)); }, [range]);

return ( <div className="top-artists-page"> <h2>Top Artists</h2> <select value={range} onChange={e => setRange(e.target.value)}> {timeRanges.map(t => ( <option key={t.value} value={t.value}>{t.label}</option> ))} </select> <ul> {artists.map((artist, index) => ( <li key={artist.id}> <strong>{index + 1}.</strong> {artist.name} </li> ))} </ul> </div> ); };

export default TopArtists;

