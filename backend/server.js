const express = require("express");
const cors = require('cors');

const app = express();

require('dotenv').config();

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders: 'Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to CNAM application." });
  });
  
  const db = require("./src/models");
  
  db.sequelize
    .sync()
    .then(() => {
      console.log("Synced db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
  
  require("./src/routes")(app);
  
  const PORT = 443;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});