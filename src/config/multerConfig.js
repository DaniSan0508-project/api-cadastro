import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    filename: (request, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
