import { Router } from 'express';
import { create, getAll } from './booking.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, create);
router.get('/', authMiddleware, getAll);

export default router;
