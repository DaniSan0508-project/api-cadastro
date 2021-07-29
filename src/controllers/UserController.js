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
}

export default new UserController();
