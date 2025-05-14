import express from 'express';
const router = express.Router();
import { getMoviesDetalis } from '../controllers/movies-data.js';

router.get('/', getMoviesDetalis); 

export default router;
