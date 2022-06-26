import { Request, Response } from "express";
import { addContacts, getContactsByUserId } from "../db/datalayer/userContacts";
import { createResponse } from "../utils/helper";

export const getContacts = async (req: Request, res: Response) => { 
  const contacts = await getContactsByUserId(res.locals.user._id);
  if (contacts.err) { 
    return res.status(400).json(createResponse(400, null, contacts.err, contacts.err.message));
  }
  return res.status(200).json(createResponse(200, contacts.data, null, ''));
}

export const addContact = async (req: Request, res: Response) => { 
  const { fullName, email, mobile } = req.body;
  const contacts = await getContactsByUserId(res.locals.user._id);
  if (contacts.err) { 
    return res.status(400).json(createResponse(400, null, contacts.err, contacts.err.message));
  }
  const contact = contacts.data.find(c => c.email === email || c.mobile === mobile);
  if (contact) { 
    return res.status(400).json(createResponse(400, null, null, 'Contact already exists'));
  }
  const dbRes = await addContacts([
    {
      userId: res.locals.user._id,
      fullName,
      email,
      mobile,
    },
  ]);
  if (dbRes.err) { 
    return res.status(400).json(createResponse(400, null, dbRes.err, dbRes.err.message));
  }
  return res.status(200).json(createResponse(200, null, null, ''));
}
