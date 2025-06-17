import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Genres = () => { const [genres, setGenres] = useState([]);

useEffect(() => { axios.get('/api/genres') .then(res => setGenres(res.data)) .catch(err => console.error(err)); }, []);

return ( <div className="genres-page"> <h2>Genre Breakdown</h2> <ul> {genres.map(([genre, count], i) => ( <li key={i}> {genre}: {count} </li> ))} </ul> </div> ); };

export default Genres;

