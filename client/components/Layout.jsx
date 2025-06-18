// components/Layout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink> |{' '}
      <NavLink to="/genres">Genres</NavLink> |{' '}
      <NavLink to="/recent">Recent</NavLink> |{' '}
      <NavLink to="/saved">Saved</NavLink> |{' '}
      <NavLink to="/top-artists">Top Artists</NavLink> |{' '}
      <NavLink to="/top-tracks">Top Tracks</NavLink> |{' '}
      <NavLink to="/audio-analysis">Audio Analysis</NavLink>
    </nav>
    <hr />
    <Outlet /> {/* Render the matched child route here */}
  </div>
);

export default Layout;
