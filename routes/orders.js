const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// GET /orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error('Error getting orders:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /orders/:id
router.get('/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Error getting Order:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /orders
router.post('/', async (req, res) => {
  console.log(req.body)
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

module.exports = router;