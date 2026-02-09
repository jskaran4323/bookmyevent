import { Express } from 'express';
import authRoutes from './auth.routes';


const API_VERSION = 'v1';

export const registerRoutes = (app: Express): void => {
  const baseUrl = `/api/${API_VERSION}`;

  app.use(`${baseUrl}/auth`, authRoutes);

};
