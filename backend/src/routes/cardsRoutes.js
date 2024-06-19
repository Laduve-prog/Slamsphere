const { checkJwt } = require("../middleware/authMiddleware.js");

module.exports = (app) => {
  const cards = require("../controllers/cardsController.js");
  var router = require("express").Router();

  router.get("/", checkJwt, cards.get);
  router.post("/", checkJwt, cards.post);
  router.delete("/:id", checkJwt, cards.delete);

  app.use("/api/cards", router);
};
