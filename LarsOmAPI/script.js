
import { getJson } from "./utility.js"

const temperatureElement = document.querySelector("#temperature")
const windElement = document.querySelector("#wind")
const descriptionElement = document.querySelector("#description")

async function updateWeatherData() {
  const url = "https://goweather.herokuapp.com/weather/bergen"
  const data = await getJson(url)

  temperatureElement.textContent = data.temperature
  windElement.textContent = data.wind
  descriptionElement.textContent = data.description
}

updateWeatherData()

// If you don't specify a protocol and domain
// fetch will ask the server for that file
// Ie here "data/films.json" will become
// "http://127.0.0.1:5500/data/films.json"
const movieUrl = "films.json"
const movieData = await getJson(movieUrl)
console.log(movieData)
