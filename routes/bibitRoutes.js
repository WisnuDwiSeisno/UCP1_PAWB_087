import express from 'express';
import { getBibit } from '../controllers/bibitControllers';

const router = express.Router();

router.get('/bibit', getBibit);

export default router;