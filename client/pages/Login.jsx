import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
  };

  return (
    <div className="login-page">
      <h1>Spotify Stats</h1>
      <p>Login to view your Spotify stats</p>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
