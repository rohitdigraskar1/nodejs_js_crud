import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize("apparel_store", "postgres", "rohit", {
  host: "localhost",
  dialect: 'postgres',
});

export default sequelize;
