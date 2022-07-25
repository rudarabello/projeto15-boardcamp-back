
import { Router } from 'express';
import { getCategories, addCategory } from '../controllers/categoriesController.js';
import { checkCategory } from '../midllewares/checkCategory.js';

const categoryRouter = Router();

categoryRouter.get('/categories',getCategories);
categoryRouter.post('/categories',checkCategory,addCategory);

export default categoryRouter;