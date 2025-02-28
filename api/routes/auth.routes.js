import { Router } from 'express';
//importing the logic
import signup from '../controllers/auth.controller.js'
const router =Router();
router.post("/signup",signup);

export {router as signUpRouter};