const db = require("../models");

// Get all products
exports.getAllProducts = (req, res) => {
  db.products.findAll()
    .then((products) => {
      res.setHeader("Content-Type", "application/json");
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  const id = req.params.id;

  db.products.findByPk(id)
    .then((product) => {
      if (product) {
        res.setHeader("Content-Type", "application/json");
        res.send(product);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id,
      });
    });
};

// Create a new product
exports.createProduct = (req, res) => {
  const product = {
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    stock: req.body.stock,
    featured: req.body.featured,
    active: req.body.active,
    rating: req.body.rating,
  };

  db.products.create(product)
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the product.",
      });
    });
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  const id = req.params.id;

  db.products.findByPk(id)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`,
        });
        return;
      }

      product
        .update(req.body)
        .then(() => {
          res.setHeader("Content-Type", "application/json");
          res.send(product);
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error updating product with id=" + id,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id,
      });
    });
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  db.products.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};