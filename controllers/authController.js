const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 


exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email or username already exists' });
    }

   
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 

  
    const newUser = await User.create({ 
      username, 
      email, 
      password: hashedPassword 
    });

    res.status(201).json({ 
      message: 'User registered successfully', 
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body; 

  try {
    const user = await User.findOne({ 
      $or: [{ email: email }] 
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    res.json({ 
      message: 'Login successful', 
      token 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
