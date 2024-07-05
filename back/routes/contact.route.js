import { Router } from "express";
import * as contactRouter from '../controllers/contact.controller.js';

const router=Router();

router.post('/contact',contactRouter.contact)

export default router;


