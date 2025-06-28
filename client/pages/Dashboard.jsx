import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Shared axios instance

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/me`, {
        withCredentials: true  // Make sure session cookie is sent!
      })
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error('Dashboard fetch error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
