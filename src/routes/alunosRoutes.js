import { Router } from 'express';
import alunosController from '../controllers/AlunosController';

const routes = Router();

routes.get('/', alunosController.index);

export default routes;
