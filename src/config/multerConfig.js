import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  // verificando se é png ou jpeg
  fileFilter: (request, file, cb) => {
    if (file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('file must be .png or .jpg'));
    }
    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    filename: (request, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
