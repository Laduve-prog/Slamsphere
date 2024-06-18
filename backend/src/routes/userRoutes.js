const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validateUserUpdate } = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/profile', authMiddleware, UserController.getProfile);
router.put('/profile', authMiddleware, validateUserUpdate, UserController.updateProfile);

module.exports = router;