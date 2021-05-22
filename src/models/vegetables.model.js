const mongoose = require('mongoose');

const VegetableSchema = mongoose.Schema({
    color: String,
    price: Number,
    name: String,

}, {
    timestamps: true // Mongoose uses this option to automatically add two new fields — createdAt and updatedAt to the schema.
});

module.exports = mongoose.model('Vegetables', VegetableSchema);