import { customerModel } from "../models/customerModel.js";
import connection from "../databases/postgres.js";

export async function checkCustomer(req, res, next) {
    const customer = req.body;
    const { error } = customerModel.validate(customer);
    if (error) {
        return res.sendStatus(400);
    }
    const { rows: customerExists } = await connection.query('SELECT * FROM customers WHERE cpf = $1', [customer.cpf]);
    if (customerExists.length !== 0) {
        return res.sendStatus(409);
    }
    res.locals.customer = customer;
    next();
}