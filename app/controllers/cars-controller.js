const db = require("../models");
const cars = db.cars;

// Get all cars from the database.
exports.findAll = async (req, res) => {
    try {
        const car = await cars.find()
        res.json(car)
        console.log('Bağlantı başarılı');
      } catch {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cars."
        });
      }
};

// Find a single car with an id
exports.findOne = (req, res) => {
  
};

// Create and Save a new car
exports.create = (req, res) => {
  
};

// Update a car by the id in the request
exports.update = (req, res) => {
  
};

// Delete a car with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all cars from the database.
exports.deleteAll = (req, res) => {
  
};