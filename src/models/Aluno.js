import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'required 3 to 255 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid Email',
          },
        },
      },
      sobrenome: {
        type: sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'required 3 to 255 characters',
          },
        },
      },
      idade: {
        type: sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'age must be whole number',
          },
        },
      },
      peso: {
        type: sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'needs to be numerical',
          },
        },
      },
      altura: {
        type: sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'needs to be numerical',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
