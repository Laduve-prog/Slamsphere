const db = require("../models");

exports.get = (req, res) => {
  const token = req.token;
  const userId = token?.payload?.id;

  db.cards
    .findAll({
      where: {
        userId: userId,
      },
    })
    .then((cards) => {
      res.setHeader("Content-Type", "application/json");
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cards.",
      });
    });
};

exports.post = (req, res) => {
  const token = req.token;
  const userId = token?.payload?.id;
  const card = {
    userId: userId,
    name: req.body.name,
    code: req.body.code,
    ccv: req.body.ccv,
    expirydate: req.body.expirydate,
  };

  db.cards
    .create(card)
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the card.",
      });
    });
};

exports.delete = (req, res) => {
  const token = req.token;
  const userId = token?.payload?.id;
  const id = req.params.id;

  db.cards
    .destroy({
      where: {
        id: id,
        userId: userId,
      },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Card was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete card with id=${id}. Maybe card was not found or does not belong to the user.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete card with id=" + id,
      });
    });
};
