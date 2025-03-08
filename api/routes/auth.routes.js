import { Router } from 'express';
//importing the logic
import {signin, signup} from '../controllers/auth.controller.js'
const router =Router();
router.post("/signup",signup);
router.post("/signin",signin);
export default router;  //exporting the router