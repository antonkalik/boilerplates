import mongoose from 'mongoose';

function connectToDatabase() {
  const url = `${process.env.MONGO_HOST}${process.env.MONGO_INITDB_DATABASE}`;
  return mongoose
    .connect(url, {
      authSource: 'admin',
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    })
    .then(database => {
      console.log('[MONGO]:connected', process.env.MONGO_INITDB_DATABASE, 'success');
      return database;
    })
    .catch(error => {
      console.error('[MONGO]:error', error);
    });
}
