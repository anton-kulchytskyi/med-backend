const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Boolean,
    default: false,
  },
  pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy",
  },
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
