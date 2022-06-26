/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
if (process.env.LOCAL_ENV) {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: `./.env/.env.${process.env.LOCAL_ENV}` });
}

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import createConn from './src/db';
// import { secretKeys } from './src/enums/secretKeys';
// import dbSync from './src/middleware/dbTestConn';
import routes from './src/routes/v1';

const app = express();

// Connect to MongoDB
createConn();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/contact/list/health', (req, res) => {
  res.send('Working!!');
});
app.use('/contact/list/api/v1', routes);

app.listen(process.env.PORT || 8080, async () => {
  try {
    console.log(`The application is listening on port ${process.env.PORT || 8080}`);
    console.log('Node Environment-', process.env.NODE_ENV);
  } catch (error) {
    process.exit(0);
  }
});
