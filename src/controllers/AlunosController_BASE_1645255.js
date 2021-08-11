import Aluno from '../models/Aluno';

class AlunosController {
  async index(request, response) {
    const alunos = await Aluno.findAll();
    return response.json(alunos);
  }
}

export default new AlunosController();
