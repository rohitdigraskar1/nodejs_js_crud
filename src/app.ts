import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { logger, morganLogger } from './middleware/logger';
import errorHandler from './middleware/errorHandler';
import swaggerDocs from './middleware/swagger';
const router: express.Router = require("./apparelRoutes/routes");
const app = express();
dotenv.config();
const port = Number(process.env.PORT) || 3300;

app.use(morganLogger);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(port,()=>{
    logger.info(`server is listening to port ${port}`);
    swaggerDocs(app,port);

})
