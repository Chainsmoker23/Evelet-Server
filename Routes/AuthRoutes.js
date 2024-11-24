import express from 'express';
import { registerManual, loginManual, googleAuth, onlyFansAuth } from '../Controller/AuthControllers.js';

const router = express.Router();

router.post('/register', registerManual);
router.post('/login', loginManual);
router.post('/google-auth', googleAuth);
router.get('/onlyfans-auth', onlyFansAuth);

export default router;
