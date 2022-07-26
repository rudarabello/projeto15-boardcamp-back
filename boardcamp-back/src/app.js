import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRouter from "./routes/categoryRouter.js";
import customerRouter from "./routes/customerRouter.js";
import gameRouter from "./routes/gameRouter.js";
import rentalRouter from "./routes/rentalRouter.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(categoryRouter, customerRouter, gameRouter, rentalRouter);
app.listen(PORT, () => console.log('Runing'));