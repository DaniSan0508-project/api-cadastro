import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: 'Daniel',
      sobrenome: 'dos Santos',
      email: 'd.santosc@terra.com.br',
      idade: 34,
      peso: 90,
      altura: 1.70,
    });

    return response.json(novoAluno);
  }
}

export default new HomeController();
