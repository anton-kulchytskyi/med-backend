const connectDB = require('../db');
const Pharmacy = require('../models/pharmacy');
const Medicine = require('../models/medicine');

const seedPharmacies = async () => {
  await connectDB();

  // Отримайте ідентифікатори ліків
  const medicines = await Medicine.find();

  const pharmaciesData = [
    {
      name: 'HealthPlus Pharmacy',
      address: '123 Main Street, Cityville',
      medicines: [medicines[0]._id, medicines[1]._id],
    },
    {
      name: 'QuickMeds',
      address: '456 Elm Street, Townsville',
      medicines: [medicines[2]._id, medicines[3]._id],
    },
    {
      name: 'City Drugs',
      address: '789 Oak Street, Metropolis',
      medicines: [medicines[4]._id, medicines[5]._id],
    },
  ];

  try {
    await Pharmacy.insertMany(pharmaciesData);
    console.log('Pharmacies seeded successfully');
  } catch (error) {
    console.error('Error seeding pharmacies:', error.message);
  } finally {
    process.exit(0);
  }
};

seedPharmacies();
