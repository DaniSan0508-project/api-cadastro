import User from '../models/Aluno';

class UserController {
  async store(request, response) {
    const novoUser = await User.create({
      nome: 'Daniel',
      sobrenome: 'dos Santos',
      email: 'd.santosc@terra.com.br',
      password: '123456',
    });

    return response.json(novoUser);
  }
}

export default UserController();
