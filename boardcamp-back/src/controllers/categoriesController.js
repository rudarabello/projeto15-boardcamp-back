import connection from "../databases/postgres.js";

export async function getCategories(req, res) {
    try {
        const { rows: categories } = await connection.query(
            'SELECT * FROM categories');
        res.status(200).send(categories);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function addCategory(req, res) {
    const name = req.body.name;
    try {
        const check = await connection.query(
            'SELECT name FROM categories WHERE name = $1', [name])
        if (check.rows.length !== 0) {
            res.sendStatus(409);
        } else {
            await connection.query(
                'INSERT INTO categories (name) VALUES ($1)', [name]);
            res.sendStatus(201);
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}