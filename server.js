const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from public folder (must be before routes)
app.use(express.static('public'));

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('DB connected:', res.rows[0]);
  }
});

// API routes
app.use('/api/auth', authRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to ACADIFY Auth Server');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
