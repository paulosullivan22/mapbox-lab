document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  axios.get('http://localhost:3000/api/places').then((response) => {
  let places = response.data

  places.forEach(place => {
    let marker = new mapboxgl.Marker()
      .setLngLat(place.location.coordinates)
      .addTo(map)
  })
  })

axios.get('http://localhost:3000/api/places').then((response) => {
  let places = response.data
  
  places.forEach(place => {
    let popup = new mapboxgl.Popup({ offset: 0, className: 'my-class' })
      .setHTML(`<div class="popup"><p>${place.name}</p><img src="${place.imageUrl}" alt=""></div>`)
      .setMaxWidth("none")

    let marker = new mapboxgl.Marker()
      .setLngLat(place.location.coordinates)
      .setPopup(popup)
      .addTo(map)
  })
})
}, false);
