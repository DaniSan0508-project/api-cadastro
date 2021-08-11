import Aluno from '../models/Aluno';

class AlunosController {
  async index(request, response) {
    const alunos = await Aluno.findAll();
    return response.json(alunos);
  }

  async show(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Invalid Id'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return response.status(400).json({
          errors: ['student not found'],
        });
      }

      return response.json(aluno);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.mensage),
      });
    }
  }

  async store(request, response) {
    try {
      const aluno = Aluno.create(request.body);
      if (!aluno) {
        return response.status(400).json({
          errors: ['Invalid Aluno'],
        });
      }
      return response.json(aluno);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map(((err) => err.mensage)),
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Invalid id'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return response.status(400).json({
          errors: ['invalid student'],
        });
      }

      await aluno.destroy();
      return response.json({ msg: 'student deleted' });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map(((err) => err.mensage)),
      });
    }
  }
}

export default new AlunosController();
