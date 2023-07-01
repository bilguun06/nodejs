const jwt = require('jsonwebtoken');
const User = require('../models/User');


const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

 
    const decoded = jwt.verify(token, 'your_secret_key_here');

   
     req.user = await User.findById(decoded.userId);

    next();
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = authMiddleware;
