// src/lib/database.ts
import 'dotenv/config';
import { Sequelize } from 'sequelize';

console.log('Initializing database connection...');

// Ensure DATABASE_URL is defined
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

// Initialize Sequelize with your database configuration
export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres', // or 'mysql', 'sqlite', etc.
  logging: false, // Disable logging or configure it
});