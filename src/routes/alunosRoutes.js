import { Router } from 'express';
import alunosController from '../controllers/AlunosController';

const routes = Router();

routes.get('/', alunosController.index);
routes.post('/', alunosController.store);
routes.put('/', alunosController.update);
routes.get('/', alunosController.show);
routes.delete('/', alunosController.delete);

export default routes;
