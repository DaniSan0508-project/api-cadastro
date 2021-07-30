import User from '../models/User';

class UserController {
  async store(request, response) {
    const { nome, email, password } = request.body;
    try {
      const novoUser = await User.create({
        nome,
        email,
        password,
      });

      return response.json(novoUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);
    return response.json(user);
  }

  async update(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({
          errors: ['ID não enviado !'],
        });
      }

      const user = User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      const novosDados = User.update(request.body);
      return response.json(novosDados);
    } catch (e) {
      return response.json(null);
    }
  }
}

export default new UserController();
