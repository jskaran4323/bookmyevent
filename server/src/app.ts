import express, { Express } from "express";
import { registerRoutes } from "./v1/routes";
import protectedRoute from "./v1/routes/protected.route";


const app: Express = express()

app.use(express.json())
app.use('/protected', protectedRoute);
registerRoutes(app);

export default app;