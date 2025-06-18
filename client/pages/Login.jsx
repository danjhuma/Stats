import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Redirect to your backend's Spotify login endpoint
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/api/login`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Spotify Stats App</h1>
      <button onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
};

export default Login;
