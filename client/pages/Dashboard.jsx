import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Use shared axios instance

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/me`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error('Dashboard fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
    }
