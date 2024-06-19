module.exports = (app) => {
    const products = require('../controllers/productsController');
    var router = require('express').Router();

    router.get("/",products.getAllProducts);
    router.get("/:id",products.getProductById);
    router.post("/",products.createProduct);
    router.put("/:id",products.updateProduct);
    router.delete("/:id",products.deleteProduct);

    app.use('/api/products', router);
};