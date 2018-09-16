const api = require("./api.json");
const https = require("https");

function printWeather(weather) {
  if(weather.main) {
    console.log(`It is ${weather.main.temp} degrees in ${weather.name}`);
  }
  else {
    console.error("The place doesn't exist!")
  }
}

function get(query) {
  try {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${api.apiKey}`, (response) => {
      let body = "";
      response.on('data', (data) => {
        body += data.toString();
      });
      response.on('end', () => {
        const weather = JSON.parse(body);
        console.dir(weather);
        printWeather(weather);
      });
    });
  }
  catch (error) {
    console.error("Error: " + error.message);
  }
}

module.exports.get = get;
