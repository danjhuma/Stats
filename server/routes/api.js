import express from "express"; import axios from "axios";

const router = express.Router();

function getHeaders(token) { return { headers: { Authorization: `Bearer ${token}`, }, }; }

router.get("/me", async (req, res) => { try { const response = await axios.get("https://api.spotify.com/v1/me", getHeaders(req.session.access_token)); res.json(response.data); } catch (err) { res.status(401).json({ error: "Unauthorized" }); } });

router.get("/top/:type", async (req, res) => { const { type } = req.params; // 'tracks' or 'artists' const { time_range = "medium_term" } = req.query; try { const response = await axios.get( https://api.spotify.com/v1/me/top/${type}?limit=20&time_range=${time_range}, getHeaders(req.session.access_token) ); res.json(response.data); } catch (err) { res.status(401).json({ error: "Failed to fetch top data" }); } });

router.get("/recent", async (req, res) => { try { const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=20", getHeaders(req.session.access_token)); res.json(response.data); } catch (err) { res.status(401).json({ error: "Failed to fetch recently played" }); } });

router.get("/genres", async (req, res) => { try { const topArtists = await axios.get("https://api.spotify.com/v1/me/top/artists?limit=50", getHeaders(req.session.access_token)); const genreCounts = {}; topArtists.data.items.forEach((artist) => { artist.genres.forEach((genre) => { genreCounts[genre] = (genreCounts[genre] || 0) + 1; }); }); res.json(genreCounts); } catch (err) { res.status(401).json({ error: "Failed to fetch genre breakdown" }); } });

router.get("/analysis/:id", async (req, res) => { try { const { id } = req.params; const response = await axios.get(https://api.spotify.com/v1/audio-analysis/${id}, getHeaders(req.session.access_token)); res.json(response.data); } catch (err) { res.status(401).json({ error: "Failed to fetch audio analysis" }); } });

export default router;

                                                                                                                                                               
