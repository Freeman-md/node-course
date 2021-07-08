const request = require('request')

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fceea1ad480ddb891cfca3288ae6242d'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=imperial&appid=fceea1ad480ddb891cfca3288ae6242d'

request({ url: url, json: true }, (error, response) => {
  console.log('It is currently ' + response.body.main.temp + ' degrees out.')
})