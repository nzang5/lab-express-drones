const express = require('express');
const router = express.Router();

// require the Drone model here
const droneModel = require("../models/Drone.model.js");


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  droneModel.find()
  .then((allDrones) => {
    console.log(allDrones);
    res.render(`drones/list.hbs`, { allDrones });
})});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form.hbs");
  });

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
const { name, propeller, maxSpeed } = req.body;

  droneModel.create(req.body)
  .then((newDrone)=>{res.redirect("/drones")})
  .catch((error) => `Error while creating a new drone: ${error}`);
});
  

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  console.log(req.params.id)
  DroneModel.findById(droneId)
  .then((foundDrone)=> {
    console.log(foundDrone)
  })
  .catch((error)=> `Error while updating drones: ${error}`)
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
