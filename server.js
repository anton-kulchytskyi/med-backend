const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const pharmacyRoutes = require('./routes/pharmacies');
const medicineRoutes = require('./routes/medicines');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());


app.use('/pharmacies', pharmacyRoutes);
app.use('/medicines', medicineRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

