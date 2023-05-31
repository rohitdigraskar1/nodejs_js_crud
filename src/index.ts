import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import errorHandler from "./middleware/errorHandler";
import swaggerDocs from "./swagger";
import { logger, morganLogger } from './logger';
const app = express();
dotenv.config();
const router: express.Router = require("./routes/apparelRoutes");
const port = Number(process.env.PORT) || 3200;
logger.info("hello"); //can use winston// => used

app.use(morganLogger);
app.use(bodyParser.json());
app.use(express.json());
app.use(router);
app.use(errorHandler);


app.listen(port, () => {
 logger.info(`server is listening to port ${port}`);
 swaggerDocs(app,port);
});
