import connection from "../databases/postgres.js";

export async function getCustomers(req, res) {
    let { cpf } = req.query;
    try {
        if (cpf) {
            const { rows: customers } = await connection.query(
                `SELECT * FROM customers WHERE cpf=validation`);
            res.status(200).send(customers);
        }
        const { rows: customers } = await connection.query(
            `SELECT * FROM customers`);
        res.status(200).send(customers);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getCustomersById(req, res) {
    const { id } = req.params;
    try {
        const { rows: customers } = await connection.query(
            `SELECT * FROM customers WHERE id = $1`, [id]);
        if (!customers) {
            return res.status(404);
        } else {
            res.status(200).send(customers);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function addCustomers(req, res) {
    const { name, phone, cpf, birthday } = res.locals.customer;
    await connection.query(
        'INSERT INTO customers (name, phone, cpf, birthday)VALUES ($1, $2, $3, $4)',
        [name, phone, cpf, birthday]);
    res.sendStatus(201);
}

export async function updateCustomer(req, res) {
    const { id } = req.params;
    const { name, cpf, phone, birthday } = req.body;
    try {
        await connection.query(
            'UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5',
            [name, phone, cpf, birthday, id]);
        res.status(201);
    } catch (error) {
        res.sendStatus(500);
    }
}