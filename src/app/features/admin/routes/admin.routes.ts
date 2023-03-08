import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';

const adminRoutes = Router();

adminRoutes.post('/', new AdminController().create);

export { adminRoutes };
