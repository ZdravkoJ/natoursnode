const express = require('express');

const tourControler = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', (req, res, next, val) => {
//   console.log(`Tour id is ${val}`);
//   next();
// });

// router.param('id', tourControler.checkID);
router.route('/tour-stats').get(tourControler.getTourStats);
router.route('/monthly-plan/:year').get(tourControler.getMonthlyPlan);

router
  .route('/top-5-cheap')
  .get(tourControler.aliasTopTours, tourControler.getAllTours);

router
  .route('/')
  .get(tourControler.getAllTours)
  .post(tourControler.createTour);

router
  .route('/:id')
  .get(tourControler.getTour)
  .patch(tourControler.updateTour)
  .delete(tourControler.deleteTour);

module.exports = router;
