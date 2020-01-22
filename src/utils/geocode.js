const request = require('request')

const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const mapbox_key = 'pk.eyJ1IjoiZ2FubnVtYW4iLCJhIjoiY2s0eXdkNnRtMDFmMDNtazdyOW8zZmx1aSJ9.-1Bhr2moQeijdJFnlbeqAg'
const mapbox_params = '?country=BR&language=pt&limit=1'

const geocode = (address, callback) => {
   const mapbox_request = mapbox_url + address + '.json' + mapbox_params + '&access_token=' + mapbox_key
   request({ url: mapbox_request, json: true }, (err, {body: {features: [place]}} = {}) => {
      if (err) {
         callback('Serviço de localização indisponível!', undefined)
      } else if (!place) {
         callback('Localização não encontrada!', undefined)
      } else {
         callback(undefined, {
            lat: place.center[1],
            lon: place.center[0],
            loc: place.place_name
         })
      }
   })
}

module.exports = geocode
