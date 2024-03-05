const express = require('express');
const connectDB = require('./db');
const pharmacyRoutes = require('./routes/pharmacies');
const medicineRoutes = require('./routes/medicines');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

// Додайте маршрути аптек та ліків
app.use('/pharmacies', pharmacyRoutes);
app.use('/medicines', medicineRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

