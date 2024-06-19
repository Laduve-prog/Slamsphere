module.exports = (app) => {
    const auth = require('../controllers/authController');

    var router = require('express').Router();

    router.post("/login", auth.login);
    router.post("/signup", auth.signup);

    app.use('/api/auth', router);
}