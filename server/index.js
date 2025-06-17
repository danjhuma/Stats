import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Fixed: Add the required session secret
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret", // Use a strong secret in production
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
