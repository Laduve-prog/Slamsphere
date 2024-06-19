const db = require("../models");

// Get all users
exports.getAllUsers = (req, res) => {
  db.users.findAll()
    .then((users) => {
      res.setHeader("Content-Type", "application/json");
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  const id = req.params.id;

  db.users.findByPk(id)
    .then((user) => {
      if (user) {
        res.setHeader("Content-Type", "application/json");
        res.send(user);
      } else {
        res.status(404).send({
          message: `Cannot find user with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};

// Create a new user
exports.createUser = (req, res) => {
  const user = {
    pseudo: req.body.pseudo,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    country: req.body.country,
    postalCode: req.body.postalCode,
    password: req.body.password,
  };

  db.User.create(user)
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const id = req.params.id;

  db.users.findByPk(id)
    .then((user) => {
      if (!user) {
        res.status(404).send({
          message: `Cannot find user with id=${id}.`,
        });
        return;
      }

      user
        .update(req.body)
        .then(() => {
          res.setHeader("Content-Type", "application/json");
          res.send(user);
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error updating user with id=" + id,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  db.users.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};
