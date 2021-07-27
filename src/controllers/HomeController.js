class HomeController {
  index(request, response) {
    return response.json({ msg: 'teste de rota controller' });
  }
}

export default new HomeController();
