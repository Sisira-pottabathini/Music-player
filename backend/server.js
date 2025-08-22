const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize app and load environment variables
dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true   // keep this if you use cookies/sessions
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/music', require('./routes/music'));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, msg: "Backend is working!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

