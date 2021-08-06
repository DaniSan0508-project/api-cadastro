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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);
      if (!user) {
        return response.status(401).json({
          errors: ['User does not exist'],
        });
      }
      const { nome, email } = user;
      return response.json({ id, nome, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.error.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (!user) {
        return response.status(400).json({
          errors: 'User not exists',
        });
      }
      const newUser = await user.update(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({
          errors: ['missing id'],
        });
      }

      const user = await User.findByPk(id);

      await user.destroy();
      return response.json({ msg: 'User deleted' });
    } catch (e) {
      return e.errors.map((err) => err.message);
    }
  }
}

export default new UserController();
