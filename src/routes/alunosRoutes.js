import { Router } from 'express';
import alunosController from '../controllers/AlunosController';
import loginRequired from '../middlewares/loginRequired';

const routes = Router();

routes.get('/', alunosController.index);
routes.post('/', loginRequired, alunosController.store);
routes.get('/:id', alunosController.show);
routes.put('/:id', loginRequired, alunosController.update);
routes.delete('/:id', loginRequired, alunosController.delete);

export default routes;
