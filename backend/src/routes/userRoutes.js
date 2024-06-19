module.exports = (app) => {
    const users = require('../controllers/userController');

    var router = require('express').Router();

    router.get("/", users.getAllUsers);
    router.get("/:id", users.getUserById);
    router.post("/", users.createUser);
    router.put("/:id", users.updateUser);
    router.delete("/:id", users.deleteUser);

    app.use('/api/users', router);
};