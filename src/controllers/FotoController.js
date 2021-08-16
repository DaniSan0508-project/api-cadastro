import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');
class FotoController {
  store(request, response) {
    return upload(request, response, async (err) => {
      if (err) {
        return response.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = request.file;
      const { aluno_id } = request.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return response.json(foto);
    });
  }
}

export default new FotoController();
