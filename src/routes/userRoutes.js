import { Router } from 'express';
import userController from '../controllers/UserController';

const routes = Router();

routes.post('/', userController.store);
routes.get('/', userController.index);
routes.get('/:id', userController.show);
routes.put('/:id', userController.update);
export default routes;
