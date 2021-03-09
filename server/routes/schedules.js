import express from 'express';
import { getSchedules } from '../controllers/schedules.js';
const router = express.Router();


router.get('/', getSchedules);

export default router;