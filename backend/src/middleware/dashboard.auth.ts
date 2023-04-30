import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../service/jwt';
import { createResponse, isEmpty } from '../utils/helper';

const dashboardAuthRouter = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || req.headers.Authorization as string;
  if (isEmpty(token)) {
    return res.send(createResponse(401, null, null, 'Un-Authorized Request'));
  }
  try {
    const data = verifyToken(token);
    console.log('Api verified ==> ', data);
    res.locals.user = data;
    next();
  } catch (error) {
    console.log(error);
    return createResponse(401, null, null, 'Un-Authorized Request');
  }
};

export default dashboardAuthRouter;
