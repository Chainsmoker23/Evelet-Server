import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
    resume: { type: String },
  },
  { timestamps: true }
);

export const Career = mongoose.model('Career', careerSchema);
