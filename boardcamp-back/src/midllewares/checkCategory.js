import connection from "../databases/postgres.js";
import {categoryModel} from "../models/categoryModel.js"

export async function checkCategory(req, res, next) {
    const name = req.body;
    const { error } = categoryModel.validate(name);
    if (error) {
        return res.sendStatus(400);
    }
    const check = await connection.query(
        'SELECT name FROM categories WHERE name = $1', [name])
    if (check.rows.length === 0) {
        return res.sendStatus(409);
    }
    res.locals.name = name;
    next();
}