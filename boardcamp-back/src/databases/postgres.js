import pg from 'pg';
dotenv.config();

import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export default connection;