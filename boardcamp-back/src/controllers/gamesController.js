import connection from "../databases/postgres.js";
import { gameModel } from "../models/gameModel.js";

export async function getGames(req, res) {
    const { name } = req.query;
    try {
        if (name) {
            const { rows: games } = await connection.query(
                `SELECT * FROM games WHERE name = $1`, [name]);
            return res.status(200).send(games);
        }
        const { rows: games } = await connection.query(
            `SELECT * FROM games`);
        res.status(200).send(games);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function addGame(req, res) {
    const game = req.body;
    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
    const { error } = gameModel.validate(game);
    if (error) {
        res.sendStatus(400);
    }
    const checkCategory = await connection.query(`
        SELECT * FROM categories WHERE id = $1`, [categoryId]);
    if (!checkCategory) {
        res.sendStatus(400);
    }
    const checkName = await connection.query(`
        SELECT * FROM games WHERE name = $1`, [name]);
    if (!checkName) {
        res.sendStatus(409);
    }
    try {
        await connection
            .query(`INSERT INTO games ("name", "image", "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)`,
                [name, image, stockTotal, categoryId, pricePerDay]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500);
    }
}

