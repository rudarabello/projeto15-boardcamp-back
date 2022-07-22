import { Router } from 'express';
import { addGame, getGames } from '../controllers/gamesController.js';

const gameRouter = Router();

gameRouter.get('/games',getGames);
gameRouter.post('/games',addGame);

export default gameRouter;