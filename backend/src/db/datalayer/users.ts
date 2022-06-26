import { Users } from '../../beans';
import { dbRes } from '../../interfaces/dbRes';

export const addUsers = async (userInfo: Object[]) => {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    await Users.insertMany(userInfo);
  } catch (err) {
    console.log(err);
    res.err = err;
  }

  return res;
};

export const getUserByEmail = async (email: string) => {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    const user = await Users.findOne({
      email,
    }).exec();
    res.data = user;
  } catch (err) {
    console.log(err);
    res.err = err;
  }

  return res;
};
