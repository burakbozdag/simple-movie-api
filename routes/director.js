const express = require('express');
const router = express.Router();

//Models
const Director = require("../models/Director");

router.post('/', (req, res) => {
  const  director = new Director(req.body);
  const promise = director.save();

  promise.then((director) => {
    res.json(director);
  }).catch((err) => {
    res.json(director);
  })
});

module.exports = router;
