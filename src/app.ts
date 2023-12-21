import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swaggerOptions';

const cors = require('cors');
const app = express();

const specs = swaggerJsdoc(swaggerOptions);
app.use(cors());

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// All api routes are handled in routes.ts
app.use('/api', routes);

export default app;
