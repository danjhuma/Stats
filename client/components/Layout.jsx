import React from 'react'; import { Routes, Route, Navigate } from 'react-router-dom'; import Dashboard from './pages/Dashboard'; import Login from './pages/Login'; import TopTracks from './pages/TopTracks'; import TopArtists from './pages/TopArtists'; import Recent from './pages/Recent'; import Genres from './pages/Genres'; import Saved from './pages/Saved'; import Analysis from './pages/Analysis'; import Layout from './components/Layout';

const App = () => { return ( <Routes> <Route path="/" element={<Layout />}> <Route index element={<Login />} /> <Route path="dashboard" element={<Dashboard />} /> <Route path="top-tracks" element={<TopTracks />} /> <Route path="top-artists" element={<TopArtists />} /> <Route path="recent" element={<Recent />} /> <Route path="genres" element={<Genres />} /> <Route path="saved" element={<Saved />} /> <Route path="analysis/:id" element={<Analysis />} /> <Route path="*" element={<Navigate to="/" />} /> </Route> </Routes> ); };

export default App;

