const mongoose = require('mongoose')
const Place = require('../models/Place')

mongoose.connect('mongodb://localhost/mapbox', 
 { useNewUrlParser: true })

 const wonders = [
    {
      name: 'Great Pyramid of Giza',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/300px-Kheops-Pyramid.jpg',
      location: {
        type: 'Point',
        coordinates: 2958450331080369
      }
    },
    {
      name: 'Hanging Gardens of Babylon',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/350px-Hanging_Gardens_of_Babylon.jpg',
      location: {
        type: 'Point',
        coordinates: 325355444275
      }
    },
    {
      name: 'Temple of Artemis at Ephesus',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/220px-Miniaturk_009.jpg',
      location: {
        type: 'Point',
        coordinates: 375659272150
      }
    },
    {
      name: 'Statue of Zeus at Olypmia',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg/220px-Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg',
      location: {
        type: 'Point',
        coordinates: 3738163213748
      }
    },
    {
      name: 'Mausoleum at Halicarnassus',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mausoleum_at_Halicarnassus_at_the_Bodrum_Museum_of_Underwater_Archaeology.jpg/240px-Mausoleum_at_Halicarnassus_at_the_Bodrum_Museum_of_Underwater_Archaeology.jpg',
      location: {
        type: 'Point',
        coordinates: 370379274241
      }
    },
    {
      name: 'Colossus of Rhodes',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg/220px-Colosse_de_Rhodes_%28Barclay%29.jpg',
      location: {
        type: 'Point',
        coordinates: 362704281340
      }
    },
    {
      name: 'Lighthouse of Alexandria',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lighthouse_-_Thiersch.png/220px-Lighthouse_-_Thiersch.png',
      location: {
        type: 'Point',
        coordinates: 311250295308
      }
    }
 ]

Place.insertMany(wonders)
 .then(data => {
   console.log(`Successfully added ${data.length} places to DB`)
 })
 .catch(err => {
   console.log(err)
 })