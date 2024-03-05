const connectDB = require('../db');
const Medicine = require('../models/medicine');

const seedMedicines = async () => {
  await connectDB();

  const medicinesData = [
    {
      name: 'Aspirin',
      price: 5.99,
    },
    {
      name: 'Paracetamol',
      price: 3.49,
    },
    {
      name: 'Ibuprofen',
      price: 7.99,
    },
    {
      name: 'Cough Syrup',
      price: 8.99,
    },
    {
      name: 'Antihistamine',
      price: 12.99,
    },
    {
      name: 'Vitamin C',
      price: 6.99,
    },
    {
      name: 'Bandages',
      price: 2.49,
    },
    {
      name: 'Antibiotic Ointment',
      price: 4.99,
    },
  ];

  try {
    await Medicine.insertMany(medicinesData);
    console.log('Medicines seeded successfully');
  } catch (error) {
    console.error('Error seeding medicines:', error.message);
  } finally {
    process.exit(0);
  }
};

seedMedicines();
