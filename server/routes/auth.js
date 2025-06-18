import express from "express";
import axios from "axios";
import querystring from "querystring";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Use exact REDIRECT_URI as registered in Spotify dashboard
const redirect_uri = process.env.REDIRECT_URI;

// LOGIN ROUTE
router.get("/login", (req, res) => {
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "user-read-recently-played",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position"
  ].join(" ");

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: process.env.CLIENT_ID,
    scope,
    redirect_uri,
  });

  const authUrl = `https://accounts.spotify.com/authorize?${queryParams}`;
  res.redirect(authUrl);
});

// CALLBACK ROUTE
router.get("/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Missing code in callback" });
  }

  try {
    const tokenResponse = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      data: querystring.stringify({
        code,
        redirect_uri,
        grant_type: "authorization_code",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
          ).toString("base64"),
      },
    });

    const { access_token, refresh_token } = tokenResponse.data;

    req.session.access_token = access_token;
    req.session.refresh_token = refresh_token;

    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  } catch (error) {
    console.error("Callback Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Authentication failed" });
  }
});

export default router;
