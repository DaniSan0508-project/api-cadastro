import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunosController {
  async index(request, response) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'desc']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });
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

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'desc']],
        include: {
          model: Foto,
          attributes: ['filename'],
        },
      });

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
      const aluno = await Aluno.create(request.body);
      if (!aluno) {
        return response.status(400).json({
          errors: ['Invalid Student'],
        });
      }
      return response.json(aluno);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
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
      const alunoAtualizado = await aluno.update(request.body);
      return response.json(alunoAtualizado);
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
