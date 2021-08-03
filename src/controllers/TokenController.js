class TokenController {
  async index(request, response) {
    return response.json({ msg: 'Ok' });
  }
}

export default new TokenController();
