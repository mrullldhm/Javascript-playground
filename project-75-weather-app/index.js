const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "127b7bb836b76cf145844586ff96811b";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  console.log(city);

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (err) {
      console.error(err);
      displayError(err);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  console.log(response);

  if (!response.ok) {
    throw new Error("Please try again");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const desDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  desDisplay.classList.add("desDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(desDisplay);
  card.appendChild(weatherEmoji);

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  desDisplay.textContent =
    description.charAt(0).toUpperCase() + description.slice(1);
  weatherEmoji.textContent = getWeatherEmoji(id);
  console.log(id)
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌦️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🍃";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓❓❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.classList.add("errorDisplay");
  errorDisplay.textContent = message;

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
