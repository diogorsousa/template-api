import { Router } from 'express';
import { healthcheckController } from './controllers/healthcheckController';

const router = Router();

router.get('/healthcheck', healthcheckController);

export default router;
