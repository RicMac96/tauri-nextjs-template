/* eslint-disable no-var */
import mongoose, { Mongoose } from "mongoose"

const MONGODB_WATCH4ME_URI =
  "mongodb+srv://User:tZy2nKhZgbRTt1E4@watch4me.4thr1el.mongodb.net/Watch4Me?retryWrites=true&w=majority"

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null
    conn: Mongoose | null
  }
}

const cached = global.mongoose

export default async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_WATCH4ME_URI).then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
