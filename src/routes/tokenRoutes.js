import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const routes = Router();

routes.post('/', tokenController.index);

export default routes;
