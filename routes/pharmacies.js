const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/pharmacy');

// Отримання всіх аптек
router.get('/', async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    console.error('Error getting pharmacies:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Отримання конкретної аптеки за ідентифікатором
router.get('/:pharmacyId', async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const pharmacy = await Pharmacy.findById(pharmacyId);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    res.json(pharmacy);
  } catch (error) {
    console.error('Error getting pharmacy:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
