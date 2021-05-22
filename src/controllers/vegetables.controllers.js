const Vegitable = require('../models/vegetables.model');
// Retrieve all Vegetables from the database.
exports.findAll = (req, res) => {
  Vegetable.find()
    .then(vegetables => {
      res.send(vegetables);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong"
      });
    });
};
// Create and Save a new vegetable
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Create a new vegetable
  const vegitables = new Vegetable({
    color: req.body.color,
    price: req.body.price,
    name: req.body.name
    
  });
  // Save vegetable in the database
  vegetables.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating."
      });
    });
};
// Find a single vegetable with a id
exports.findOne = (req, res) => {
  Vegetable.findById(req.params.id)
    .then(vegetables => {
      if (!vegetables) {
        return res.status(404).send({
          message: "vegetables not found with id " + req.params.id
        });
      }
      res.send(vegetables);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "vegetable not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error getting vegetable with id " + req.params.id
      });
    });
};
// Update a vegetable identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Find vegetable and update it with the request body
  Vegetable.findByIdAndUpdate(req.params.id, {
    color: req.body.color,
    price: req.body.price,
    name: req.body.name
    

  }, { new: true })
    .then(vegetables => {
      if (!vegetables) {
        return res.status(404).send({
          message: "vegetable not found with id " + req.params.id
        });
      }
      res.send(vegetables);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "vegetable not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating vegetable with id " + req.params.id
      });
    });
};
// Delete a vegetable with the specified id in the request
exports.delete = (req, res) => {
  Vegetable.findByIdAndRemove(req.params.id)
    .then(vegetables => {
      if (!vegetables) {
        return res.status(404).send({
          message: "vegetable not found with id " + req.params.id
        });
      }
      res.send({ message: "vegetable deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "vegetable not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete vegetable with id " + req.params.id
      });
    });
};