// const fs = require('fs');

const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
};

exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // Way to transform a string to number
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.data);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invaled data sent'
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
