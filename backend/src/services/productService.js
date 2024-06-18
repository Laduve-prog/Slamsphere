// src/services/productService.js

const { Product } = require('../models');

async function getAllProducts() {
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

async function getProductById(id) {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
}

async function createProduct(productData) {
    try {
        const product = await Product.create(productData);
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}

async function updateProduct(id, productData) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        await product.update(productData);
        return product;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        await product.destroy();
        return product;
    } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
