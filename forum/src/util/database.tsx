import { MongoClient } from "mongodb";

declare global {
  namespace NodeJS {
    interface Global {
      _mongo: any;
    }
  }
}

const url =
  "mongodb+srv://ssafy:ssafy@cluster0.jwkrahx.mongodb.net/?retryWrites=true&w=majority";
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
