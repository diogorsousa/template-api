import { Router } from 'express';
import { exampleController } from '../controllers/exampleController';

const router = Router();

router.get('/example', exampleController);

export default router;
