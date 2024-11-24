import { Career } from '../Model/Career.js';

export const submitCareer = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const resume = req.file ? req.file.path : null;

    const application = await Career.create({ name, email, message, resume });
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
