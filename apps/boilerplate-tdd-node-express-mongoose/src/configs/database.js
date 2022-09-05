import mongoose from 'mongoose';

export function connectToDatabase() {
  const url = `${process.env.MONGO_HOST}${process.env.MONGO_INITDB_DATABASE}`;
  return mongoose
    .connect(url, {
      authSource: 'admin',
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    })
    .catch(error => {
      console.error('[MONGO]:error', error);
    });
}
