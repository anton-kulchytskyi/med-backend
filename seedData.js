const connectDB = require('./db');
const Pharmacy = require('./models/pharmacy');
const Medicine = require('./models/medicine');

const seedData = async () => {
  try {
    await connectDB();

    const pharmacies = await Pharmacy.insertMany([
      { name: 'HealthPlus Pharmacy', address: '123 Main Street, Cityville' },
      { name: 'QuickMeds', address: '456 Elm Street, Townsville' },
      { name: 'City Drugs', address: '789 Oak Street, Metropolis' },
    ]);

    const pharmacyIds = await Pharmacy.find().select("_id");

    const medicineNames = [
      "Painkiller",
      "Antihistamine",
      "Antibiotic",
      "Antidepressant",
      "Cough syrup",
      "Multivitamin",
      "Antacid",
      "Laxative",
      "Sleeping pill",
      "Sunscreen",
    ];
    
    const medicines = [];
    
    for (let i = 0; i < 20; i++) {
      const randomPharmacyId = pharmacyIds[Math.floor(Math.random() * pharmacyIds.length)]._id;
      const randomMedicineName = medicineNames[Math.floor(Math.random() * medicineNames.length)];
      medicines.push({
        name: randomMedicineName,
        price: Math.floor(Math.random() * 100) + 1,
        pharmacyId: randomPharmacyId,
      });
    }
    
    await Medicine.insertMany(medicines);
    console.log('Seed data added successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    process.exit(0);
  }
};

seedData();
