import Aluno from '../models/Aluno';

class AlunosController {

  async index(request, response) {
    const alunos = await Aluno.findAll();
    return response.json(alunos);
  }

  async show(request,response) {
    try{
    const {id} = request.body;

    if(!id){
      return response.status(400).json({
        errors:['Invalid ID']
      })
    }

    const aluno = await Aluno.findByPk(id);

    if(!aluno) {
      return response.status(400).json({
        errors:['Invalid aluno']
      })
    }

    return response.json(aluno)
  }catch(e) {
    return response.status(400).json({
      errors:e.errors.map((err)=> err.menssage)
    })
  }

  }
}

export default new AlunosController();
