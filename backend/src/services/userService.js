const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUser = async (userData) => {
  // Validate the user data
  if (!userData.pseudo || !userData.lastname || !userData.firstname || !userData.email ||
      !userData.address || !userData.phone || !userData.city || !userData.country ||
      !userData.postalCode || !userData.password || !userData.passwordConfirm) {
    throw new Error('All fields are required');
  }

  if (userData.password !== userData.passwordConfirm) {
    throw new Error('Passwords do not match');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Create a new user object
  const newUser = await User.create({
    pseudo: userData.pseudo,
    lastname: userData.lastname,
    firstname: userData.firstname,
    email: userData.email,
    address: userData.address,
    phone: userData.phone,
    city: userData.city,
    country: userData.country,
    postalCode: userData.postalCode,
    password: hashedPassword
  });

  return newUser;
};

module.exports = {
  createUser
};