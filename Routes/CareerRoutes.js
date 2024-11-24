import express from 'express';
import multer from 'multer';
import { submitCareer } from '../Controller/Career.js';

const upload = multer({ dest: 'uploads/' }); // File upload configuration
const router = express.Router();

router.post('/submit', upload.single('resume'), submitCareer);

export default router;
