import { Router } from 'express';
import { addContact, getContacts } from '../../controller/contacts';
import { loginUser, signUp } from '../../controller/dashboardAuth';
import dashboardAuthRouter from '../../middleware/dashboardAuth';
import { validateLogin, validateSignUp } from '../../middleware/validateApi';

const dashboardRouter = Router();

dashboardRouter.route('/login').post(validateLogin, loginUser);

dashboardRouter.route('/signup').post(validateSignUp, signUp);

dashboardRouter.route('/contacts').get(dashboardAuthRouter, getContacts);

dashboardRouter.route('/contacts').post(dashboardAuthRouter, addContact);

export default dashboardRouter;
