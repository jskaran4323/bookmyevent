import { Express } from 'express';
import authRoutes from './auth.routes';
import { verifyToken } from '../../middlewares/authMiddleware';
import eventRoutes from './event.routes';
import bookingRoutes from './booking.routes';

const API_VERSION = 'v1';

export const registerRoutes = (app: Express): void => {
  const baseUrl = `/api/${API_VERSION}`;

  app.use(`${baseUrl}/auth`, authRoutes);
  app.use(`${baseUrl}/events`, verifyToken, eventRoutes)
  app.use(`${baseUrl}/bookings`, verifyToken, bookingRoutes)
};
