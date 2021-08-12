import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const routes = Router();

routes.post('/', upload.single('foto'), fotoController.store);

export default routes;
