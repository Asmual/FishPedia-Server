import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<Db> => {
  if (db) return db;

  const uri = process.env.MONGODB_URI as string;

  if (!uri) {
    throw new Error('Please add your MONGODB_URI to .env file');
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    
    // Explicitly set the database name to FishPedia
    db = client.db('FishPedia'); 
    
    console.log('Successfully connected to MongoDB Atlas (Database: FishPedia)');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export const getDB = (): Db => {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return db;
};