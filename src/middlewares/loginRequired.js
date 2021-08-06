import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      id,
      email,
    });

    if (!user) {
      return response.status(400).json({
        errors: ['Invalid User'],
      });
    }

    request.userId = id;
    request.userEmail = email;
    return next();
  } catch (e) {
    return response.status(401).json({
      errors: ['expired or invalid token'],
    });
  }
};
