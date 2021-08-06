import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const routes = Router();

routes.get('/:id', userController.show);
routes.get('/', userController.index);

routes.post('/', userController.store);
routes.put('/', loginRequired, userController.update);
routes.delete('/:id', loginRequired, userController.delete);
export default routes;
