
import { Router } from 'express';
import { addCustomers, getCustomers, getCustomersById, updateCustomer } from '../controllers/customerController.js';
import {checkCustomer} from '../midllewares/checkCustomer.js'
const customerRouter = Router();

customerRouter.get('/customers',getCustomers);
customerRouter.get('/customers/:id',getCustomersById);
customerRouter.post('/customers',checkCustomer, addCustomers);
customerRouter.put('/customers/:id',updateCustomer);

export default customerRouter;