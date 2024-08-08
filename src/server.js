import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';

import router from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

export function setupServer() {
  const app = express();

  app.use(
    pino({
      transport: { target: 'pino-pretty' },
    }),
  );
  app.use(cors());

  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}
