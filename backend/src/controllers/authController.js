const {ACCESS_TOKEN_SECRET} = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../models/index.js");

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}

exports.signup = (req, res) => {
    const user = req.body;
  
    db.users
      .create({
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      })
      .then(() => {
        exports.login(req, res);
      })
      .catch((err) => {
        res.status(400).send({
          error: err.message,
        });
      });
};

exports.login = async (req, res) => {
    const user = req.body;
    db.users
      .findOne({
        where: {
          email: user.email,
        },
      })
      .then((fullUser) => {
        if (!fullUser || !bcrypt.compareSync(user.password, fullUser.password)) {
          res.status(401).send({
            error: err.message,
          });
        }
  
        const accessToken = generateAccessToken({
          id: fullUser.id,
          email: fullUser.email,
        });
  
        res.setHeader("Authorization", `Bearer ${accessToken}`);
        res.send({
          user: fullUser,
        });
      })
      .catch((err) => {
        res.status(401).send({
          error: err.message,
        });
      });
};