const validateSignup = (req, res, next) => {
    const { pseudo, lastname, firstname, email, address, phone, city, country, postalCode, password, passwordConfirm } = req.body;
  
    if (!pseudo || !lastname || !firstname || !email || !address || !phone || !city || !country || !postalCode || !password || !passwordConfirm) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    if (password !== passwordConfirm) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
  
    next();
  };
  
  const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
  
    next();
  };
  
  const validateUserUpdate = (req, res, next) => {
    // Add validation logic for user update if needed
    next();
  };
  
  module.exports = {
    validateSignup,
    validateLogin,
    validateUserUpdate,
  };
  