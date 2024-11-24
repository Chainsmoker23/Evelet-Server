import { User } from '../Model/User.js';
import { generateToken } from '../Config/Jwt.js';
import { OAuth2Client } from 'google-auth-library';
import { config } from '../Config/env.js';

const googleClient = new OAuth2Client(config.GOOGLE_CLIENT_ID);


export const registerManual = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({ id: user._id, name: user.name, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const loginManual = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ id: user._id, name: user.name, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


export const googleAuth = async (req, res) => {
  const { token } = req.body;

  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: config.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  const user = await User.findOneAndUpdate(
    { email: payload.email },
    { name: payload.name, googleId: payload.sub },
    { upsert: true, new: true }
  );

  res.json({ id: user._id, name: user.name, token: generateToken(user._id) });
};

export const onlyFansAuth = (req, res) => {
  const redirectUrl = `${config.ONLYFANS_REDIRECT_URL}?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_CALLBACK_URL`;
  res.redirect(redirectUrl);
};
