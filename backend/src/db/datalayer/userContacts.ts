import { UserContacts } from "../../models";
import { dbRes } from "../../interfaces/dbRes";

export const getContactsByUserId = async (userId: any) => { 
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    const contacts = await UserContacts.find({
      userId,
    }).exec();
    res.data = contacts;
  } catch (error) {
    console.log('Error while finding contact with user id', error);
    res.err = error;
  }
  return res;
}

export const addContacts = async (contacts: any[]) => { 
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    const newContacts = await UserContacts.insertMany(contacts);
    res.data = newContacts;
  } catch (error) {
    console.log('Error while adding contact', error);
    res.err = error;
  }
  return res;
}