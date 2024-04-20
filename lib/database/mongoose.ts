import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}
console.log("ts");
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  console.log("testtt");
  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "pixelwizards-ai",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
