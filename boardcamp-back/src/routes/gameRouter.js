import { Router } from 'express';
import gameModel from '../models/gameModel.js';
import { addGame, getGames } from '../controllers/gamesController.js';

const gameRouter = Router();

gameRouter.get('/games',getGames);
gameRouter.post('/games',gameModel,addGame);

export default gameRouter;