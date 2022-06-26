import jwt from 'jsonwebtoken';

export const createToken = (user: any) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const data = user || {
    time: Date(),
    ...user
  };
  const token = jwt.sign(data, jwtSecretKey);
  return token;
};

export const verifyToken = (token: string) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return verified;
    } else {
      throw new Error('access_denied');
    }
  } catch (error) {
    throw new Error('access_denied');
  }
};
