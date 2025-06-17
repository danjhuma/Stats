import express from "express"; import axios from "axios"; import querystring from "querystring"; import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const redirect_uri = `${process.env.REDIRECT_URI}`;

router.get("/login", (req, res) => { const scope = [ "user-read-private", "user-read-email", "user-top-read", "user-read-recently-played", "user-library-read", "playlist-read-private", "playlist-read-collaborative", "user-read-playback-state", "user-read-currently-playing", "user-read-playback-position", "user-read-recently-played", "user-read-private", "user-library-read", "user-read-email" ].join(" ");

const queryParams = querystring.stringify({ response_type: "code", client_id: process.env.CLIENT_ID, scope, redirect_uri, });

res.redirect(https://accounts.spotify.com/authorize?${queryParams}); });

router.get("/callback", async (req, res) => { const code = req.query.code || null; const authOptions = { method: "post", url: "https://accounts.spotify.com/api/token", data: querystring.stringify({ code, redirect_uri, grant_type: "authorization_code", }), headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic " + Buffer.from( process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET ).toString("base64"), }, };

try { const response = await axios(authOptions); req.session.access_token = response.data.access_token; req.session.refresh_token = response.data.refresh_token; res.redirect(${process.env.CLIENT_URL}/dashboard); } catch (error) { console.error("Callback error:", error.response.data); res.status(500).json({ error: "Authentication failed" }); } });

export default router;

  
