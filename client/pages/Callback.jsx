import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      axios
        .get(`https://your-backend.onrender.com/callback?code=${code}`)
        .then(() => {
          // Login successful, redirect to stats
          navigate('/top-tracks');
        })
        .catch((err) => {
          console.error('Error during Spotify auth callback:', err);
        });
    }
  }, []);

  return <div>Logging in with Spotify...</div>;
};

export default Callback;
