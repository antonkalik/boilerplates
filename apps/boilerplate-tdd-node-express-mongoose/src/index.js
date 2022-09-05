import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDatabase } from './configs/database';
import { router } from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase().then(() => {
  console.log('[MONGO]:connected', process.env.MONGO_INITDB_DATABASE, 'success');
});

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // parse requests of content-type - application/json
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
