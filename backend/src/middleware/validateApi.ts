import { NextFunction, Request, Response } from 'express';
import { getUserByEmail } from '../db/datalayer/users';
import { createResponse, isEmpty } from '../utils/helper';

export const validateSignUp = (req: Request, res: Response, next: NextFunction) => {
  const { fullName, email, password } = req.body;
  let invalidRes = '';
  if (isEmpty(fullName) || isEmpty(email) || isEmpty(password)) {
    invalidRes = 'Invalid Request';
    console.log('here');
  } else if (!validateEmail(email)) {
    invalidRes = 'Invalid Email';
  }
  if (invalidRes) {
    return res.status(400).json(createResponse(400, null, null, invalidRes));
  }
  next();
};

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (user.err) {
    return res.status(400).json(createResponse(400, null, null, 'Invalid Email'));
  } else {
    console.log('validation user ==> ', user.data);
    if (await user.data.comparePassword({ password })) {
      const { _id, fullName, username, email, subId } = user.data;
      res.locals.user = { _id, name: fullName, username, email, subId };
      next();
    } else {
      return res.status(400).json(createResponse(400, null, null, 'Invalid Password'));
    }
  }
};
