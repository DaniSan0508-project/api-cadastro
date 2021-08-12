import { Router } from 'express';
import fotoController from '../controllers/FotoController';

const routes = Router();

routes.post('/', fotoController.store);

export default routes;
