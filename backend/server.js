const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const dbUri = 'your_database_uri_here'; // Replace with your actual database URI
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).send('API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
