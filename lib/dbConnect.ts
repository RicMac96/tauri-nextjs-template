/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
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

// Initialize global.mongoose if it's undefined
if (!global.mongoose) {
  global.mongoose = {
    promise: null,
    conn: null,
  }
}

const cached = global.mongoose

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_WATCH4ME_URI).then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
