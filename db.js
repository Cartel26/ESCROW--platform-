const { Pool } = require('pg');

// Create a new pool instance with configuration from environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Export the pool for use in other parts of the application
module.exports = pool;