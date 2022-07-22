import { Router } from 'express';
import { createRental, deleteRental, finishRental, getRentals } from '../controllers/rentalController.js';
import { createRentalValidation, finishRentalValidate, getRentalQueryHandler } from '../midllewares/checkRental.js';

const rentalRouter = Router();

rentalRouter.get('/rentals', getRentalQueryHandler, getRentals);
rentalRouter.post('/rentals', createRentalValidation, createRental);
rentalRouter.post('/rentals:id/return', finishRentalValidate, finishRental);
rentalRouter.delete('/rentals:id', finishRentalValidate, deleteRental);

export default rentalRouter;