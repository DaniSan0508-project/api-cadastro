class AlunosController {
  async index(request, response) {
    return response.json({ msg: 'teste' });
  }
}

export default new AlunosController();
