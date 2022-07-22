
import { Router } from 'express';
import { getCategories, addCategory } from '../controllers/categoriesController.js';
import categoryModel from '../models/categoryModel.js';

const categoryRouter = Router();

categoryRouter.get('/categories',getCategories);
categoryRouter.post('/categories',categoryModel,addCategory);

export default categoryRouter;