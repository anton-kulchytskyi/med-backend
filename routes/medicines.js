const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicine');

router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    console.error('Error getting medicines:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:medicineId', async (req, res) => {
  try {
    const { medicineId } = req.params;
    const medicine = await Medicine.findById(medicineId);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json(medicine);
  } catch (error) {
    console.error('Error getting medicine:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
