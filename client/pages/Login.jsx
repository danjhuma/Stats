import React from 'react';

const Login = () => { const handleLogin = () => { window.location.href = '/auth/login'; };

return ( <div className="login-page"> <h1>Welcome to SpotiStats</h1> <p>Log in with your Spotify account to view your stats</p> <button onClick={handleLogin}>Login with Spotify</button> </div> ); };

export default Login;

