import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import TokenRoutes from './src/routes/tokenRoutes';
import AlunosRoutes from './src/routes/alunosRoutes';
import FotosRoutes from './src/routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'src', 'uploads')));
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', TokenRoutes);
    this.app.use('/alunos', AlunosRoutes);
    this.app.use('/fotos', FotosRoutes);
  }
}

export default new App().app;
