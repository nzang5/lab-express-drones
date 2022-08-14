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
  droneModel.create().then(() => {
    //show form page
    res.render("drones/create-form.hbs");
  });
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
const { name, propeller, maxSpeed } = req.body;

droneModel.create({ name, propellers, maxSpeed })
  .then((data) => {
    //send the user somewhere
    res.redirect("/");
  })
  .catch((err) => {
    console.log(err);
  });
});
  

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  console.log(req.params)

  DroneModel.findById(droneId)
  .then((data)=> {
    res.render("drones/update-form.hbs", { data });
  })
  .catch((err)=> `Error while updating drones: ${err}`)
});


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  droneModel.findByIdAndUpdate(droneId, { name, propellers, maxSpeed })
    .then((data) => {
      res.redirect("/drones");
    })
    .catch(() => {
      res.render("drones/update-form.hbs", { data });

});
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  //now delete the element
});

module.exports = router;
