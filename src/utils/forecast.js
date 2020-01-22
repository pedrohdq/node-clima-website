const request = require('request')

const darksky_url = 'https://api.darksky.net/forecast/915bddd76fd1ad5c59374d6143dd05ce/'
const darksky_params = '?lang=pt&units=si&exclude=currently,daily,alerts,flags'

const forecast = ({lat, lon}, callback) => {
   const darksky_request = darksky_url + lat + ',' + lon + darksky_params
   request({ url: darksky_request, json: true }, (err, {body}) => {
      if (err) {
         callback('Serviço de clima indisponível!', undefined)
      } else if (body.error) {
         callback('Informação de localização mal formatada! Contate o desenvolvedor.', undefined)
      } else {
         callback(undefined, body)
      }
   })   
}
module.exports = forecast
