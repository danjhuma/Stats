import express from "express"; import dotenv from "dotenv"; import cors from "cors"; import session from "express-session"; import authRoutes from "./routes/auth.js"; import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express(); const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); app.use(express.json()); app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true, }));

app.use("/auth", authRoutes); app.use("/api", apiRoutes);

app.get("/", (req, res) => { res.send("Spotify Stats Backend is running"); });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
