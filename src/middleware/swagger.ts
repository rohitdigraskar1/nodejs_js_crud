import {Express,Request,Response} from "express";
import swaggerJsdocs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { logger } from './logger';

const options: swaggerJsdocs.Options ={
    definition: {
        openapi: "3.0.0",
        info:{
            title: "Apparel APIs",
            version: "1.0.0",
            description: "These are the APIs for the apparel app",
    },
    components: {
        securitySchemas: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [
            {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
            }
          ],
        },
      ],
    },
    
    apis: ["./src/apparelRoutes/routes.ts"],
};

const specs = swaggerJsdocs(options);

function swaggerDocs(app:Express,port:number){
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );

    app.get("/docs.json",(req:Request,res:Response)=>{
        res.setHeader("Content-Type", "application/json");
        res.send(specs);
    });

    logger.info(`Docs are available at http://localhost:${port}/api-docs`)
    
};

export default swaggerDocs;