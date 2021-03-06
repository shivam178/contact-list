import { Request, Response } from 'express';
import { addUsers } from '../db/datalayer/users';
import { createToken } from '../service/jwt';
import { createResponse } from '../utils/helper';

export const loginUser = (req: Request, res: Response) => {
  const { name, username, email, subId } = res.locals.user;
  const data = {
    ...res.locals.user,
  };
  const token = createToken(data);

  return res
    .status(200)
    .json(createResponse(200, { token, name, username, email, subId }, null, ''));
};

export const signUp = async (req: Request, res: Response) => {
  //save in db
  const { fullName, email, password, username } = req.body;
  const dbRes = await addUsers([
    {
      fullName,
      email,
      password,
      username,
    },
  ]);
  if (dbRes.err) {
    return res.status(400).json(createResponse(400, null, dbRes.err, dbRes.err.message));
  }
  return res.status(200).json(createResponse(200, null, null, ''));
};
