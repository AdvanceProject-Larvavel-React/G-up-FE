// routes/cart.js
const express = require('express');
const router = express.Router();
const { validateProductOptions, calculateTotalPrice } = require('../utils/cartUtils');

let cart = [];

router.post('/product', (req, res) => {
    const { productId, attributes, quantity } = req.body;
    if (!validateProductOptions(productId, attributes)) {
        return res.status(400).json({ message: 'Invalid product options' });
    }
    cart.push({ productId, attributes, quantity });
    const totalPrice = calculateTotalPrice(cart);
    res.json({ items: cart, totalPrice });
});

router.patch('/:productId', (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = quantity;
        const totalPrice = calculateTotalPrice(cart);
        res.json({ items: cart, totalPrice });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    cart = cart.filter(item => item.productId !== productId);
    const totalPrice = calculateTotalPrice(cart);
    res.json({ items: cart, totalPrice });
});

const moduleName = require('module');

