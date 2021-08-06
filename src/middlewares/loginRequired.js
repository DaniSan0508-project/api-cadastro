import jwt from 'jsonwebtoken';

export default (require, response, next) => {
  const { authorization } = require.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    require.userId = id;
    require.userEmail = email;
    return next();
  } catch (e) {
    return response.status(401).json({
      errors: ['expired or invalid token'],
    });
  }
};
