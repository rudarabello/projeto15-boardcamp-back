
import { Router } from 'express';
import customerModel from '../models/customerModel.js';
import { addCustomers, getCustomers, getCustomersById, updateCustomer } from '../controllers/customerController.js';

const customerRouter = Router();

customerRouter.get('/customers',getCustomers);
customerRouter.get('/customers/:id',getCustomersById);
customerRouter.post('/customers',customerModel ,addCustomers);
customerRouter.put('/customers/:id',customerModel,updateCustomer);

export default customerRouter;