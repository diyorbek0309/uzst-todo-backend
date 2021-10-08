import mongoose from "mongoose";

const db = mongoose.connection;

export default class Database {
  url: string = process.env.MONGO_URI;

  constructor() {
    console.log("DATABASE URL:", this.url);
  }

  connect() {
    return mongoose.connect(this.url, (error) => {
      if (error) {
        console.log("MongoDB Connection error:", error);
        process.exit(1);
      }
    });
  }
}
