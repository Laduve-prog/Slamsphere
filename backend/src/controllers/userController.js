const userService = require('../services/userService');

class UserController {
  static async getProfile(req, res) {
    try {
      const user = await userService.getUserById(req.user.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const updatedData = req.body;
      const updatedUser = await userService.updateUser(req.user.id, updatedData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;