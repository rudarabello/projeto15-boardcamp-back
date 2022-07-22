import { Router } from 'express';
import gameModel from '../models/gameModel.js';
import { addGame, getGames } from '../controllers/gamesController.js';

const router = Router();

router.get('/games',getGames);
router.post('/games',gameModel,addGame);

export default router;