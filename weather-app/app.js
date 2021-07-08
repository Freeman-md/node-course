const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fceea1ad480ddb891cfca3288ae6242d'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.main)
})