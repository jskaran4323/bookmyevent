import express from 'express';
import { BookingController } from '../controllers/booking.controller';


const router = express.Router();

const bookingController= new BookingController();

router.post("/", (req, res)=> bookingController.registerBooking(req,res))
router.get("/:id", (req, res)=> bookingController.getSingleBooking(req,res))

export default router;