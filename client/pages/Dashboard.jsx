import React, { useEffect, useState } from 'react'; import axios from 'axios';

const Dashboard = () => { const [user, setUser] = useState(null);

useEffect(() => { axios.get('/api/me') .then(res => setUser(res.data)) .catch(err => console.error(err)); }, []);

return ( <div className="dashboard-page"> <h2>Dashboard</h2> {user ? ( <div> <img src={user.images?.[0]?.url} alt="Profile" width={100} /> <h3>{user.display_name}</h3> <p>{user.email}</p> <a href={user.external_urls.spotify} target="_blank" rel="noopener noreferrer"> View Spotify Profile </a> </div> ) : ( <p>Loading profile...</p> )} </div> ); };

export default Dashboard;

