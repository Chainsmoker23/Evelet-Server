import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './Config/db.js';
import authRoutes from './Routes/AuthRoutes.js';
import careerRoutes from './Routes/CareerRoutes.js';
import { config } from './Config/env.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/career', careerRoutes);

// Start Server
app.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});
