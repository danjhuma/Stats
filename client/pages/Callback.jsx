import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';  // Shared instance

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const error = params.get('error');

    if (error) {
      console.error('Auth error:', error);
      return;
    }

    if (code) {
      axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/callback`,
        { code }
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error('Callback processing error:', err);
      });
    }
  }, [navigate]);

  return <div>Processing login...</div>;
        }
