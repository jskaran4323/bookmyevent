import express, { Express } from "express";
import { registerRoutes } from "./v1/routes";


const app: Express = express()

app.use(express.json())

registerRoutes(app);

export default app;