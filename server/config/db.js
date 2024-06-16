import mongoose from 'mongoose';
import {MONGO_URI} from './config';

export const connectDB = () => mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));