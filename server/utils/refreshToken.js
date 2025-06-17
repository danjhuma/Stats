// server/utils/refreshToken.js import axios from "axios"; import querystring from "querystring"; import dotenv from "dotenv";

dotenv.config();

export async function refreshAccessToken(refresh_token) { const authOptions = { method: "post", url: "https://accounts.spotify.com/api/token", data: querystring.stringify({ grant_type: "refresh_token", refresh_token, }), headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic " + Buffer.from( process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET ).toString("base64"), }, };

try { const response = await axios(authOptions); return response.data.access_token; } catch (error) { console.error("Error refreshing token:", error); throw error; } }

