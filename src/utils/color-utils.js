const chalk = require('chalk')

const temperature = (str, temperature) => {
   if (temperature < -10) {
      return chalk.white(str)
   } else if (temperature <= 5) {
      return chalk.cyan(str)
   } else if (temperature <= 24) {
      return chalk.blue(str)
   } else if (temperature <= 32) {
      return chalk.yellow(str)
   } else {
      return chalk.red(str)
   }
}

const weather = (str, weather) => {
   if (weather === 'clear-day') {
      return chalk.blueBright(str)
   } else if (weather === 'clear-night') {
      return chalk.blue(str)
   } else if (weather === 'rain') {
      return chalk.blue(str)
   } else if (weather === 'snow') {
      return chalk.white(str)
   } else if (weather === 'sleet') {
      return chalk.white(str)
   } else if (weather === 'wind') {
      return chalk.grey(str)
   } else if (weather === 'fog') {
      return chalk.grey(str)
   } else if (weather === 'cloudy') {
      return chalk.grey(str)
   } else if (weather === 'partly-cloudy-day') {
      return chalk.grey(str)
   } else if (weather === 'partly-cloudy-night') {
      return chalk.blue(str)
   } else {
      return chalk.blue(str)
   }
}

module.exports = {
   temperature: temperature,
   weather: weather
}
