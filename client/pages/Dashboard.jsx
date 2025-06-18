import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Import shared axios instance

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET user stats; include auth header if needed
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        setStats(response.data);
      } catch (error) {
        console.error('Dashboard fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {stats ? (
        // Render fetched stats (adjust UI as needed)
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
            }
