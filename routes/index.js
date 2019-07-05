const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { name, imageUrl, latitude, longitude } = req.body
  console.log(latitude + longitude)

  Place.create({
    name: name,
    imageURL: imageUrl,
    location: {
      type: 'Point',
      coordinates: latitude + longitude
    }
  })
    .then(data => {
      console.log(`${name} successfully created`)
      res.redirect('/')
    })
    .catch(err => {
      console.log('Error creating point: ' + err)
    })
})

router.get('/api/places', (req, res) => {
  Place.find({})
    .then(places => {
      res.json(places)
    })
})

axios.get('http://localhost:3000/api/places')
  .then

module.exports = router;
