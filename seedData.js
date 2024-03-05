const connectDB = require('./db');
const Pharmacy = require('./models/pharmacy');
const Medicine = require('./models/medicine');

const seedData = async () => {
  try {
    // Підключіться до бази даних
    await connectDB();

    // Створіть аптеки
    const pharmacies = await Pharmacy.insertMany([
      { name: 'HealthPlus Pharmacy', address: '123 Main Street, Cityville' },
      { name: 'QuickMeds', address: '456 Elm Street, Townsville' },
      { name: 'City Drugs', address: '789 Oak Street, Metropolis' },
    ]);

    // Створіть ліки
    const medicines = await Medicine.insertMany([
      { name: 'Aspirin', price: 5.99 },
      { name: 'Paracetamol', price: 3.49 },
      { name: 'Ibuprofen', price: 7.99 },
      { name: 'Cough Syrup', price: 8.99 },
      { name: 'Antihistamine', price: 12.99 },
      { name: 'Vitamin C', price: 6.99 },
      { name: 'Bandages', price: 2.49 },
      { name: 'Antibiotic Ointment', price: 4.99 },
    ]);

    // Додайте ліки до аптек
    await Pharmacy.findByIdAndUpdate(pharmacies[0]._id, { medicines: [medicines[0]._id, medicines[1]._id] });
    await Pharmacy.findByIdAndUpdate(pharmacies[1]._id, { medicines: [medicines[2]._id, medicines[3]._id] });
    await Pharmacy.findByIdAndUpdate(pharmacies[2]._id, { medicines: [medicines[4]._id, medicines[5]._id] });

    console.log('Seed data added successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    // Закрийте з'єднання з базою даних після завершення виконання
    process.exit(0);
  }
};

// Викликайте функцію для додавання даних до бази даних
seedData();
