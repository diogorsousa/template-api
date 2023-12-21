import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swaggerOptions';
import morgan from 'morgan';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const transport = new DailyRotateFile({
  dirname: 'log',
  filename: 'access-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  transports: [
    transport
  ]
});

const cors = require('cors');
const app = express();

const specs = swaggerJsdoc(swaggerOptions);
app.use(cors());

// setup the logger
app.use(morgan('combined', { stream: { write: (message) => logger.info(message) } }));

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// All api routes are handled in routes.ts
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({ result: '404' });
  });

export default app;