import express from 'express';
import { UserController } from '../controllers/user.controller';

const router = express.Router()

 const userController = new UserController();

router.post("/register", (req, res) => userController.createUsers(req, res))
router.get("/users", userController.getUsers)

export default router;
