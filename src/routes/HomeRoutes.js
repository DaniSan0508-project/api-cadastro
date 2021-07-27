import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ msg: 'teste' }));

export default routes;
