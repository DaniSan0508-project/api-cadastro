import { Router } from 'express';
import alunosController from '../controllers/AlunosController';

const routes = Router();

routes.get('/', alunosController.index);
routes.post('/', alunosController.store);
routes.get('/:id', alunosController.show);
routes.put('/:id', alunosController.update);
routes.delete('/:id', alunosController.delete);

export default routes;
