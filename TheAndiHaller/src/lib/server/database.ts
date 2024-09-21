// src/lib/database.ts
import 'dotenv/config';
import { Sequelize } from 'sequelize';

console.log('Initializing database connection...');

// Ensure DATABASE_URL is defined
const databaseUrl = process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,  // For SSL if required in production
  },
  logging: false,
});