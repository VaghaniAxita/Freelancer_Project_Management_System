const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized access, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); 
    req.user = decoded.id; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = protect;
