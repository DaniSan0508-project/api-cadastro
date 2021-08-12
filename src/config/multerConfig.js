import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: (request, file, cb) => { },
    filename: (request, file, cb) => {},
  }),
};
