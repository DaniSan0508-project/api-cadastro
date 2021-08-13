import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');
class FotoController {
  async store(request, response) {
    return upload(request, response, (err) => {
      if (err) {
        return response.status(400).json({
          errors: [err.code],
        });
      }
      return response.json(request.file);
    });
  }
}

export default new FotoController();
