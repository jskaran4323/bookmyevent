import express from 'express';
import { EventController } from '../controllers/event.controller';


const router = express.Router();

const eventController= new EventController();

router.post("/", (req, res)=> eventController.registerEvent(req,res))
router.get("/:id", (req, res)=> eventController.getSingleEvent(req,res))

export default router;